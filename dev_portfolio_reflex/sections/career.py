import reflex as rx

from dev_portfolio_reflex.layouts.section import section_layout
from dev_portfolio_reflex.styles.common import ACCENT_COLOR

career_details = {
    "Crysbe": [
        "대량의 데이터 관리와 차트를 통한 시각화를 지원하는 대시보드 서비스를 위한 Django Ninja 기반의 RESTful API 개발",
        "다양한 소스로부터 대규모 데이터를 수집하고 가공하는 데이터 파이프라인 구축",
        "Playwright 를 이용한 다수 개의 크롤링 봇 개발",
        "asyncio, aiohttp, celery 를 이용한 비동기 수집 시스템 개발",
        "DRF 기반의 인플루언서 관리 솔루션 유지 보수 및 CI/CD 구축",
        "AWS 리소스의 중앙 관리를 위한 bastion host 구축",
        "기타 사내 클라우드 리소스 관리",
    ]
}


def _circle() -> rx.Component:
    return rx.box(
        "",
        position="relative",
        border_radius="100%",
        width="20px",
        height="20px",
        aspect_ratio="1/1",
        text_align="center",
        background_color=ACCENT_COLOR,
        box_shadow="inset 5px 3px 6px #0090ffde",
        z_index="2",
        _after=(
            {
                "position": "absolute",
                "border": "1px solid #999",
                "width": "0",
                "height": "100vh",
                "display": "block",
                "content": "''",
                "left": "50%",
                "z_index": "1",
                "top": "100%",
                "margin_left": "-1px",
            }
        ),
    )


def _career_description(company: str, date_str: str, bullets: list[str]) -> rx.Component:
    return rx.hstack(
        _circle(),
        rx.flex(
            rx.vstack(
                rx.heading(company, size="2"),
                rx.badge(date_str, size="2", variant="soft", color_scheme="cyan"),
                spacing="1",
            ),
            rx.list.unordered(
                rx.foreach(
                    bullets,
                    lambda t: rx.list.item(rx.text(t, size="2")),
                ),
            ),
            spacing="3",
        ),
    )


def _career_card(company: str, date_str: str, bullets: list[str]) -> rx.Component:
    return rx.card(
        rx.vstack(
            rx.heading(company, size="2"),
            rx.badge(date_str, size="2", variant="soft", color_scheme="cyan"),
            rx.list.unordered(
                rx.foreach(
                    bullets,
                    lambda t: rx.list.item(rx.text(t, size="2")),
                ),
            ),
            spacing="3",
        ),
        padding=["10px", "20px", "20px", "20px", "20px"],
        background_color="#333",
        box_shadow="0px 4px 8px rgba(0, 0, 0, 0.1)",
        width="100%",
        position="relative",
    )


def career() -> rx.Component:
    return section_layout(
        "Career",
        rx.vstack(
            rx.text(
                "성장하는 2년차 백엔드 개발자입니다. 주로 Python과 Django를 사용하여 백엔드 서비스를 개발하고 있으며 AWS 서비스를 활용한 인프라 구축에 관심이 많습니다.",
                color="white",
                size="2",
            ),
            rx.text(
                "polars, rabbitmq, celery 를 이용하여 대용량 데이터 수집 및 분석 시스템을 개발한 경험이 있습니다.",
                color="white",
                size="2",
            ),
            rx.text(
                "새로운 기술에 대해 배우는 것을 즐기며, 호기심이 많고 질문을 통한 배움을 좋아합니다.",
                color="white",
                size="2",
            ),
            spacing="1",
        ),
        rx.divider(width="95%", margin="10px"),
        rx.tablet_and_desktop(
            rx.vstack(
                _career_description("Crysbe (크리스비)", "2023.08.01 ~ ing", career_details["Crysbe"]),
                spacing="0",
                padding_left="30px",
                margin_top="1rem",
                overflow_y="hidden",
                flex="1",
            ),
        ),
        rx.mobile_only(
            rx.vstack(
                _career_card("Crysbe (크리스비)", "2023.08.01 ~ ing", career_details["Crysbe"]),
                spacing="1",
            ),
        ),
    )
