import reflex as rx

from dev_portfolio_reflex.layouts.navbar import NavButtonState
from dev_portfolio_reflex.layouts.section import section_layout
from dev_portfolio_reflex.styles.common import ACCENT_COLOR, SECONDARY_BG_COLOR, SECONDARY_ACCENT_COLOR


def _card(icon_tag: str, heading: str, *children, **style) -> rx.Component:
    return rx.card(
        rx.flex(
            rx.vstack(
                rx.vstack(
                    rx.icon(tag=icon_tag, color=ACCENT_COLOR, size=40),
                    rx.heading(heading, size="5"),
                    align="center",
                    width="100%",
                ),
                *children,
                spacing="3",
                align="start",
                text_align="center",
            ),
            direction="row",
            spacing="5",
            align="start",
            justify="center",
        ),
        padding="20px",
        **style,
    )


def _bullet_point_content(date: str, content: str) -> rx.Component:
    return rx.hstack(
        rx.text(date, size="3", color=SECONDARY_ACCENT_COLOR),
        rx.spacer(),
        rx.text(content, size="3"),
        spacing="2",
        align="start",
        justify="between",
    )


def _career_item(date: str, company_name: str, is_active: bool = False) -> rx.Component:
    icon_tag = "activity" if is_active else "minus"
    return rx.flex(
        rx.card(
            rx.icon(tag=icon_tag, color=ACCENT_COLOR, width="100%", height="100%"),
            width="40px",
            height="40px",
            align_items="center",
        ),
        rx.heading(date, size="3", font_weight="500", color=SECONDARY_ACCENT_COLOR),
        rx.heading(company_name, size="3", font_weight="500"),
        # rx.badge(
        #     "Backend Developer",
        #     radius="large",
        #     variant="surface",
        #     color_scheme="gray",
        #     size="2",
        #     padding="5px 10px",
        #     font_weigh="bold",
        # ),
        padding="3px",
        gap="10px",
        direction="row",
        justify="start",
        align="center",
        border_radius="10px",
        _hover={"background_color": SECONDARY_BG_COLOR} if is_active else {},
        on_click=NavButtonState.set_active_button(2),
        style={"cursor": "pointer"} if is_active else {},
        flex_wrap="wrap",
    )


def _tech_badges() -> rx.Component:
    badge_contents: list[str] = [
        "Python",
        "Django",
        "Fast API",
        "Celery",
        "Spring Boot",
        "Go",
        "Docker",
        "Git",
        "AWS",
        "Kubernetes",
        "ArgoCD",
        "Helm",
        "PostgreSQL",
        "PostGIS",
    ]
    return rx.flex(
        rx.foreach(
            badge_contents,
            lambda content: rx.badge(content, radius="full", variant="soft", color_scheme="cyan", size="2"),
        ),
        spacing="3",
        flex_wrap="wrap",
    )


def about() -> rx.Component:
    return section_layout(
        "About Me",  # 소개
        rx.text.strong(
            "문제를 해결하는 개발자, 이지수입니다.",
            size="3",
        ),
        rx.text("가설을 세우고 집요하게 증명해나가며 문제의 본질을 파고듭니다.", size="2"),
        rx.text(
            "정체를 거부하고 끊임없이 우상향하는 사람이 되고자 하며, 남들보다 반박자 빠르게 혹은 다르게 움직이는 것이 비범함을 만든다고 믿습니다.",
            size="2",
        ),
        rx.text(
            "팀으로 일하는 것에 관심이 많으며 직무와 상관없이 함께 일하기에 편안하고 영감을 주는 동료가 되는 것을 목표로 하고 있습니다.",
            size="2",
        ),
        # 카드 그리드
        rx.grid(
            # Tech Stack
            _card("code", "Tech Stack", _tech_badges(), grid_column="1 / -1"),
            # Career
            _card(
                "briefcase-business",
                "Career",
                rx.vstack(
                    _career_item("2024.10.28 ~ ing", "쏘카 (Socar)", is_active=True),
                    _career_item("2023.08.01 ~ 2024.10.25", "크리스비 (Crysbe)", is_active=False),
                    width="100%",
                ),
                grid_column="1 / -1",
                width="100%",
            ),
            # Education
            _card(
                "graduation-cap",
                "Education",
                rx.list.unordered(
                    rx.list.item(_bullet_point_content("2024.02", "연세대 경영학과 졸업")),
                    rx.list.item(_bullet_point_content("2022.01", "GWU 교환학생")),
                    rx.list.item(_bullet_point_content("2019.03", "연세대 경영학과 입학")),
                    rx.list.item(_bullet_point_content("2019.02", "동탄국제고등학교 졸업")),
                ),
            ),
            # Certificates
            _card(
                "award",
                "Certificates",
                rx.list.unordered(
                    rx.list.item(_bullet_point_content("2025.10", "리눅스마스터 2급")),
                    rx.list.item(_bullet_point_content("2024.06", "SQL 개발자")),
                    rx.list.item(_bullet_point_content("2023.06", "정보처리기사")),
                    rx.list.item(_bullet_point_content("2019.10", "컴활 1급")),
                ),
            ),
            columns=rx.breakpoints(xs="1", sm="2", md="2", lg="2", xl="2"),
            spacing="4",
            width="100%",
            height="100%",
        ),
    )
