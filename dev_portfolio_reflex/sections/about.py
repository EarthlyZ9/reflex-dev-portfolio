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
        on_click=lambda: NavButtonState.set_active_button(2) if is_active else None,
        style={"cursor": "pointer"} if is_active else {},
        flex_wrap="wrap",
    )


def _tech_badges() -> rx.Component:
    badge_contents: list[str] = [
        "Python",
        "Django",
        "REST API",
        "Celery",
        "Spring Boot",
        "GitHub Actions",
        "Docker",
        "Git",
        "AWS",
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
        rx.text("왕성한 호기심과 빠른 습득 속도, 강한 지구력을 기반으로 다양한 문제를 해결합니다.", size="2"),
        rx.text(
            "프로젝트 초기 세팅부터 배포 및 운영까지 프로덕트 개발의 전반적인 과정을 경험했습니다. RESTful 한 API 개발, 대규모 데이터 수집 및 분석을 위한 데이터 파이프라인 구축, GitHub Actions 와 AWS 를 이용한 CI/CD 구축 등을 비롯한 인프라 세팅의 경험이 있습니다.",
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
                rx.hstack(
                    _career_item("2023.08.01 ~ ing", "크리스비 (Crysbe)", True),
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
                    rx.list.item(_bullet_point_content("2019.02", "동탄국제고등학교 졸업")),
                    rx.list.item(_bullet_point_content("2019.03", "연세대 경영학과 입학")),
                    rx.list.item(_bullet_point_content("2022.01", "GWU 교환학생")),
                    rx.list.item(_bullet_point_content("2024.02", "연세대 경영학과 졸업")),
                ),
            ),
            # Certificates
            _card(
                "award",
                "Certificates",
                rx.list.unordered(
                    rx.list.item(_bullet_point_content("2024.06", "SQL 개발자")),
                    rx.list.item(_bullet_point_content("2023.06", "정보처리기사")),
                    rx.list.item(_bullet_point_content("2022.01", "TOEIC 990")),
                    rx.list.item(_bullet_point_content("2019.10", "컴활 1급")),
                ),
            ),
            columns=rx.breakpoints(xs="1", sm="2", md="2", lg="2", xl="2"),
            spacing="4",
            width="100%",
        ),
    )
