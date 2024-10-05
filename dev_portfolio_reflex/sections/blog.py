from datetime import datetime
from typing import Optional

import reflex as rx
import requests

from dev_portfolio_reflex.consts import notion, BLOG_URL
from dev_portfolio_reflex.layouts.section import section_layout


class PostContent(rx.Base):
    emoji: Optional[str]
    external_img: Optional[str]
    tags: list[str]
    tag_color: str
    title: str
    created: str
    public_url: str


class PostDataState(rx.State):
    NOTION_DATABASE_IDS = {
        "개발생각": "23645d879faa4dcfad43945f0b3dad32",
        "Fluent Python": "eb500ba0c7e143748cade86de85948c6",
        "Web": "c1febf8570564c5faafe92b32fa85d33",
        "CS": "c1febf8570564c5faafe92b32fa85d33",
    }
    CUSTOM_FILTER = {
        "Web": {"property": "Tags", "multi_select": {"contains": "Web"}},
        "CS": {"property": "Tags", "multi_select": {"contains": "CS"}},
    }

    data_type: str = "개발생각"
    data: list[PostContent] = []
    fetched_items: int = 0

    # 무한 스크롤을 위한 값들
    PAGE_SIZE: int = 10
    start_cursor: Optional[str] = None
    has_more: bool = True

    def set_data_type(self, data_type: str):
        self.data_type = data_type
        self.start_cursor = None
        self.has_more = True
        self.load_entries(None)

    def next_page(self):
        self.load_entries(self.start_cursor)

    def load_entries(self, start_cursor: Optional[str] = None) -> list[PostContent]:
        base_filter = [{"property": "Publish", "checkbox": {"equals": True}}]
        if self.CUSTOM_FILTER.get(self.data_type, None):
            base_filter.append(self.CUSTOM_FILTER[self.data_type])
        payload = {
            "page_size": self.PAGE_SIZE,
            "filter": {"and": base_filter},
            "sorts": [{"property": "Created", "direction": "descending"}],
        }
        if start_cursor:
            payload["start_cursor"] = start_cursor
        res = requests.post(
            f"https://api.notion.com/v1/databases/{self.NOTION_DATABASE_IDS[self.data_type]}/query",
            headers={
                "Authorization": f"Bearer {notion}",
                "Content-Type": "application/json",
                "Notion-Version": "2022-06-28",
            },
            json=payload,
        )
        body = res.json()
        self.has_more = body.get("has_more", False)
        self.start_cursor = body.get("next_cursor", None) if self.has_more else None

        posts: list[PostContent] = []
        for post in body["results"]:
            has_icon = post.get("icon") is not None
            emoji = post["icon"]["emoji"] if has_icon and post["icon"]["type"] == "emoji" else None
            external_img = None
            if has_icon:
                icon_type = post["icon"].get("type", None)
                if icon_type == "external":
                    external_img = post["icon"]["external"]["url"]
                elif icon_type == "file":
                    external_img = post["icon"]["file"]["url"]
            tag_color = post["properties"]["Tags"]["multi_select"][0].get("color", None)

            p = PostContent(
                emoji=emoji,
                external_img=external_img,
                tag_color=tag_color,
                tags=[tag["name"] for tag in post["properties"]["Tags"]["multi_select"]],
                title=post["properties"]["Name"]["title"][0]["plain_text"],
                created=datetime.fromisoformat(post["created_time"]).strftime("%Y-%m-%d"),
                public_url=post["public_url"],
            )
            posts.append(p)

        if start_cursor:
            self.data += posts
        else:
            self.data = posts
        self.fetched_items = len(self.data)


def post_item(item: PostContent) -> rx.Component:
    """하나의 Post 아이템을 렌더링. Table 의 Row 에 해당."""
    return rx.table.row(
        rx.table.cell(
            rx.link(
                rx.hstack(
                    rx.cond(
                        item.emoji,
                        rx.text(item.emoji, font_size="0.8rem"),
                        rx.image(src=item.external_img, width="auto", height="0.8rem"),
                    ),
                    rx.text(item.title, font_size="0.8rem"),
                    align="baseline",
                ),
                href=item.public_url,
                is_external=True,
                color="white",
            )
        ),
        rx.table.cell(
            rx.cond(item.tags, rx.foreach(item.tags, lambda tag: rx.badge(tag, color=item.tag_color)), rx.text("-"))
        ),
        rx.table.cell(item.created),
    )


def blog() -> rx.Component:
    return section_layout(
        "Blog",
        rx.vstack(
            rx.flex(
                rx.text("개발 관련 생각이나 공부한 내용을 기록합니다.", size="2"),
                justify="between",
                width="100%",
            ),
            rx.divider(width="95%"),
            rx.flex(
                rx.flex(
                    rx.heading("Recent Posts", size="4"),
                    rx.tooltip(
                        rx.link(
                            rx.icon("arrow-right", size=15),
                            margin_left="10px",
                            align_content="center",
                            href=BLOG_URL,
                            is_external=True,
                        ),
                        content="Visit Blog",
                    ),
                ),
                rx.text(f"count: {PostDataState.fetched_items}", font_size="0.6rem"),
                justify="between",
                width="100%",
            ),
            # Database 선택 드랍다운
            rx.select(
                PostDataState.NOTION_DATABASE_IDS.keys(),
                default_value="개발생각",
                on_change=PostDataState.set_data_type,
            ),
            # 테이블
            rx.table.root(
                rx.table.header(
                    rx.table.row(
                        rx.table.column_header_cell("Title"),
                        rx.table.column_header_cell("Tags"),
                        rx.table.column_header_cell("Created"),
                    ),
                ),
                rx.table.body(
                    rx.foreach(PostDataState.data, post_item),
                    rx.cond(
                        PostDataState.has_more,
                        rx.table.row(
                            rx.table.cell(
                                rx.text(
                                    "Load More",
                                    on_click=PostDataState.next_page,
                                    _hover={"text_decoration": "underline", "cursor": "pointer"},
                                ),
                                box_shadow="none",
                            )
                        ),
                        None,
                    ),
                ),
                width="100%",
                on_mount=PostDataState.load_entries(None),
            ),
            justify="center",
            width="100%",
        ),
    )
