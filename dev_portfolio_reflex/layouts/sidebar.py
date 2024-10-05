import reflex as rx

from dev_portfolio_reflex.components.common import card_with_icon
from dev_portfolio_reflex.consts import GITHUB_URL, CV_URL, BLOG_URL
from dev_portfolio_reflex.styles.common import ACCENT_COLOR, PRIMARY_BG_COLOR


def icon_with_link(icon_tag: str, href: str) -> rx.Component:
    return rx.link(
        rx.icon(tag=icon_tag, color="white", size=20, _hover={"color": ACCENT_COLOR}),
        href=href,
        is_external=True,
    )


def sidebar() -> rx.Component:
    card_with_icon_style = {"width": "100%"}
    return rx.vstack(
        rx.avatar(src="avatar.png", fallback="JS", size="8", alt="profile image"),
        rx.heading("EarthlyZ9 Dev", size="8"),
        rx.badge(
            "Backend Developer",
            radius="large",
            variant="soft",
            color_scheme="blue",
            size="3",
            padding="5px 10px",
            font_weigh="bold",
        ),
        rx.flex(
            icon_with_link("file", CV_URL),
            icon_with_link("github", GITHUB_URL),
            icon_with_link("pen-line", BLOG_URL),
            direction="row",
            spacing="5",
        ),
        rx.divider(
            size="4",
            width="80%",
        ),
        rx.flex(
            card_with_icon("STATUS", icon_tag="mail", content="Working 💻", **card_with_icon_style),
            card_with_icon("EMAIL", icon_tag="mail", content="earthlyz9.dev@gmail.com", **card_with_icon_style),
            card_with_icon("ADDRESS", icon_tag="map-pin", content="Gwangjin-gu, Seoul", **card_with_icon_style),
            card_with_icon("BIRTH", icon_tag="calendar-days", content="JULY 29, 2000", **card_with_icon_style),
            spacing="5",
            direction="column",
            align="start",
        ),
        spacing="5",
        padding="4rem 1rem",
        justify="center",
        align="center",
        height="100%",
        width="280px",
        background_color=PRIMARY_BG_COLOR,
        border_radius="30px",
        justify_content="start",
    )


def sidebar_horizontal() -> rx.Component:
    card_with_icon_style = {"min_width": "100px"}
    return rx.hstack(
        # 첫번째 flex box
        rx.flex(
            # 1-1. 아바타, 이름, 뱃지
            rx.flex(
                rx.avatar(src="avatar.png", fallback="JS", size="5", alt="profile image"),
                rx.flex(
                    rx.heading("EarthlyZ9 Dev", size="8"),
                    rx.badge(
                        "Backend Developer",
                        radius="large",
                        variant="soft",
                        color_scheme="blue",
                        padding="5px 10px",
                        font_weigh="bold",
                        width="fit-content",
                    ),
                    direction="column",
                    margin_left="1rem",
                ),
            ),
            # 1-2. 아이콘 링크
            rx.flex(
                icon_with_link("file", CV_URL),
                icon_with_link("github", GITHUB_URL),
                icon_with_link("pen-line", BLOG_URL),
                direction="row",
                spacing="5",
                margin="20px 0",
            ),
            rx.divider(size="4", width="100%"),
            direction="column",
            flex="1",
            width="100%",
        ),
        # 두번째 flex box: 프로필 정보 카드
        rx.flex(
            rx.flex(
                rx.flex(
                    card_with_icon("STATUS", icon_tag="mail", content="Working 💻", **card_with_icon_style),
                    card_with_icon("EMAIL", icon_tag="mail", content="earthlyz9.dev@gmail.com", **card_with_icon_style),
                    direction="column",
                    padding="10px 0",
                    justify="between",
                    width="45%",
                ),
                rx.flex(
                    card_with_icon("ADDRESS", icon_tag="map-pin", content="Gwangjin-gu, Seoul", **card_with_icon_style),
                    card_with_icon("BIRTH", icon_tag="calendar-days", content="JULY 29, 2000", **card_with_icon_style),
                    direction="column",
                    padding="10px 0",
                    justify="between",
                    width="45%",
                ),
                height="100%",
                justify="between",
                flex="1",
            ),
            spacing="5",
            direction="row",
            align="start",
            width="100%",
        ),
        spacing="2",
        padding="2rem 3rem",
        align_items="start",
        align="center",
        height="100%",
        background_color=PRIMARY_BG_COLOR,
        border_radius="30px",
        justify_content="start",
        direction="column",
        width="100%",
    )


def sidebar_horizontal_accordian() -> rx.Component:
    card_with_icon_style = {"width": "100%"}
    return rx.hstack(
        rx.accordion.root(
            rx.accordion.item(
                header=rx.flex(
                    # 1-1. 아바타, 이름, 뱃지
                    rx.flex(
                        rx.avatar(src="avatar.png", fallback="JS", size="4", alt="profile image", radius="small"),
                        rx.flex(
                            rx.heading("EarthlyZ9 Dev", size="5"),
                            rx.badge(
                                "Backend Developer",
                                radius="large",
                                variant="soft",
                                color_scheme="blue",
                                size="1",
                                padding="2px 4px",
                                font_weigh="bold",
                                width="fit-content",
                            ),
                            direction="column",
                            margin_left="1rem",
                        ),
                    ),
                    # 1-2. 아이콘 링크
                    rx.flex(
                        icon_with_link("file", CV_URL),
                        icon_with_link("github", GITHUB_URL),
                        icon_with_link("pen-line", BLOG_URL),
                        direction="row",
                        spacing="5",
                        margin="20px 0",
                        justify="center",
                    ),
                    direction="column",
                    flex="1",
                    width="100%",
                    _hover={"background_color": f"{PRIMARY_BG_COLOR} !important"},
                ),
                content=rx.flex(
                    card_with_icon("STATUS", icon_tag="mail", content="Working 💻", **card_with_icon_style),
                    card_with_icon("EMAIL", icon_tag="mail", content="earthlyz9.dev@gmail.com", **card_with_icon_style),
                    card_with_icon("ADDRESS", icon_tag="map-pin", content="Gwangjin-gu, Seoul", **card_with_icon_style),
                    card_with_icon("BIRTH", icon_tag="calendar-days", content="JULY 29, 2000", **card_with_icon_style),
                    spacing="5",
                    direction="column",
                    align="start",
                    overflow_y="hidden",
                ),
                value="1",
            ),
            width="100%",
            collapsible=True,
            default_value="1",
            style={"background_color": f"{PRIMARY_BG_COLOR} !important"},
            color_scheme=None,
        ),
        width="100%",
    )
