import reflex as rx

from dev_portfolio_reflex.consts import CV_URL
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
    ],
    "Socar": [
        "서울시 따릉이 서비스 채널링을 통한 쏘카의 슈퍼앱 전략에 기여",
        "Go 기반의 기기 제어 유지 보수 및 개선",
        "K8s 환경에서의 서비스 운영 및 모니터링",
        "레거시 Django 기반 서비스를 FastAPI로 마이그레이션하는 과정 주도",
        "DDD 패턴을 적용한 마이크로서비스 아키텍처 설계 및 구현",
        "오픈소스 fork를 통한 사내 라이브러리 개발",
        "PLG 스택을 이용한 서비스 모니터링",
    ],
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
                rx.badge(
                    date_str,
                    size="1",
                    variant="soft",
                    color_scheme="cyan",
                ),
                spacing="1",
                style={"width": "150px"},
            ),
            rx.list.unordered(
                rx.foreach(
                    bullets,
                    lambda t: rx.list.item(rx.text(t, size="2")),
                ),
            ),
            spacing="3",
            margin_bottom="10px",
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
                "주로 Python과 Go를 사용하여 백엔드 서비스를 개발하고 있으며 AWS, K8s 환경에서의 서비스 운영 경험을 가지고 있습니다.",
                color="white",
                size="2",
            ),
            rx.text(
                "현재 쏘카에서는 MAU 30만의 쏘카일레클 전기자전거 서비스를 운영하며, 약 50,000대의 IoT 디바이스와 실시간 통신하는 시스템을 개발하고 있습니다. 하루 평균 6만 건의 라이딩 데이터를 안정적으로 처리하며, 대규모 트래픽 환경에서의 서비스 운영과 최적화 경험을 쌓고 있습니다.",
                color="white",
                size="2",
            ),
            rx.text(
                "크리스비에서는 polars, RabbitMQ, Celery를 활용하여 매일 대량의 매출/마케팅 데이터를 수집·분석하고 30여 가지 차트로 시각화하는 데이터 파이프라인을 구축했습니다. Django Ninja 기반의 RESTful API 개발과 함께 프로젝트 초기 세팅부터 CI/CD 구축, AWS 인프라 설계까지 백엔드 시스템의 전 영역을 경험했습니다.",
                color="white",
                size="2",
            ),
            rx.flex(
                rx.box(
                    rx.link(
                        rx.text("자세히 보기", size="2"),
                        href=CV_URL,
                        is_external=True,
                    ),
                ),
                justify="end",
                width="100%",
            ),
            spacing="1",
        ),
        rx.divider(width="95%", margin="10px"),
        rx.tablet_and_desktop(
            rx.vstack(
                _career_description("Socar (쏘카)", "2024.10.28 ~ ", career_details["Socar"]),
                _career_description("Crysbe (크리스비)", "2023.08 ~ 2024.10", career_details["Crysbe"]),
                spacing="0",
                padding_left="30px",
                margin_top="1rem",
                overflow_y="hidden",
                flex="1",
            ),
        ),
        rx.mobile_only(
            rx.vstack(
                _career_card("Socar (쏘카)", "2024.10 ~ ", career_details["Socar"]),
                _career_card("Crysbe (크리스비)", "2023.08 ~ 2024.10", career_details["Crysbe"]),
                spacing="1",
            ),
        ),
    )
