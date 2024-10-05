import reflex as rx

from dev_portfolio_reflex.consts import GITHUB_URL
from dev_portfolio_reflex.layouts.section import section_layout
from dev_portfolio_reflex.styles.common import SECONDARY_BG_COLOR

junior_project_data = [
    {
        "title": "FinFriends, 나랑 다이빙 갈 사람 🙌",
        "filename": "",
        "subtitle": "Spring Boot 로 만드는 RESTful API & 채팅 서버",
        "description": "다이버들을 위한 트레이닝 유틸리티 + 버디를 찾아주는 커뮤니티 서비스",
        "date": "2024.07 ~ ",
        "completed": False,
    },
]
newbie_project_data = [
    {
        "title": "개발자의 길이 열리다, Bruteforce",
        "filename": "Bruteforce.md",
        "subtitle": "Django 로 시작한 웹풀스택 개발",
        "description": "코딩 학습의 진입 장벽을 낮추기 위한 교육 사업 Bruteforce, 더불어 공부하는 힘을 되살리다",
        "date": "2021.07 ~ 2021.12",
        "completed": True,
    },
    {
        "title": "대학생들의 링크드인, 그 첫걸음 Groovy",
        "filename": "Groovy.md",
        "subtitle": "DRF 로 시작하는 백엔드 개발",
        "description": "다들 뭐하고 살지...? 대학생들은 레퍼런스가 부족해! 진로에 대해 고민하는 새로운 방법을 제시하다",
        "date": "2022.01 ~ 2022.06",
        "completed": True,
    },
    {
        "title": "ICAAN 프로젝트의 SW 연구원",
        "filename": "ICAAN.md",
        "subtitle": "설계부터 배포까지, React + Node.js + MongoAtlas",
        "description": "질병관리청 국립보건연구원 주관 ICAAN 프로젝트의 어드민 페이지와 피험자 웹앱 구현",
        "date": "2022.05 ~ 2022.12",
        "completed": True,
    },
    {
        "title": "Space Gem",
        "filename": "SpaceGem.md",
        "subtitle": "Unity 로 배우는 C#",
        "description": "C# 과 유니티로 만들어보는 레트로 캐주얼 게임 Space Gem",
        "date": "2022.10",
        "completed": True,
    },
    {
        "title": "Fruit Ninja 3D",
        "filename": "FruitNinja.md",
        "subtitle": "Unity 로 배우는 C# 2",
        "description": "Fruit Ninja 게임을 벤치마킹한 3D Hand Recognition 버전의 새로운 3D 게임",
        "date": "2022.12",
        "completed": True,
    },
    {
        "title": "우리의 시간을 소중하게, BisTime",
        "filename": "BisTime.md",
        "subtitle": "비는 시간이 언제인가요?",
        "description": "모임 시간을 똑똑하게, 간단한 모임부터 팀의 효율적인 일정 관리까지 책임집니다!",
        "date": "2023.01 ~",
        "completed": True,
    },
    {
        "title": "누구나 간편하게, PinTalk",
        "filename": "PinTalk.md",
        "subtitle": "Django Channels, 소켓 통신 입문",
        "description": "채널톡을 벤치마킹한 간편한 채팅 서비스",
        "date": "2023.01 ~ 2023.04",
        "completed": True,
    },
    {
        "title": "AWS CDK 를 사용한 머신러닝 모델 배포",
        "filename": "CDK_ML.md",
        "subtitle": "AWS CDK - Lambda Function",
        "description": "파이썬 CDK 를 이용하여 AWS 리소스 생성하고 관리하기",
        "date": "2023.02",
        "completed": True,
    },
    {
        "title": "연세대 BK 연구실의 홈페이지 새단장",
        "filename": "BK_Nutrition.md",
        "subtitle": "FastAPI 프레임워크 사용기",
        "description": "FastAPI 를 이용한 백엔드 API 와 Jinja Template 을 이용한 관리자 페이지 개발",
        "date": "2023.02 ~  2023.03",
        "completed": True,
    },
    {
        "title": "설문을 대하는 새로운 방법, Convey",
        "filename": "Convey.md",
        "subtitle": "효율적인 Eager loading 에 대한 고민",
        "description": "피험자들을 대상으로 한 연구 설문을 수합하는 과정을 간편화해보자",
        "date": "2023.02 ~ 2023.03",
        "completed": True,
    },
]


def _project_group_divider(title: str) -> rx.Component:
    return rx.flex(
        rx.divider(flex_grow="1", margin="0 10px"),
        rx.heading(rx.text.em(title), size="2", font_weight="400", color="gray", white_space="nowrap"),
        rx.divider(flex_grow="1", margin="0 10px"),
        width="100%",
        align="center",
        justify="center",
    )


def _project_card(data: dict) -> rx.Component:
    return rx.card(
        rx.vstack(
            rx.flex(
                rx.heading(data["title"], size="4", font_weight="500", color="#4CCCE6"),
                rx.badge(
                    data["date"],
                ),
                justify="between",
                direction="row",
                width="100%",
                flex_wrap="wrap",
            ),
            rx.vstack(
                rx.text.strong(data["subtitle"], font_size="0.8em"),
                rx.text(data["description"], font_size="0.9em"),
                width="100%",
            ),
            rx.box(
                rx.cond(
                    data["completed"],
                    rx.link(
                        rx.icon("move-right", size=20),
                        href=f"{GITHUB_URL}/projects/blob/main/{data['filename']}",
                        is_external=True,
                    ),
                    rx.button("In Progress", disabled=True),
                ),
                position="absolute",
                right="20px",
                bottom="10px",
            ),
            spacing="1",
        ),
        padding="10px",
        background_color=SECONDARY_BG_COLOR,
        box_shadow="0px 4px 8px 5px rgba(0, 0, 0, 0.1)",
        width="100%",
        position="relative",
    )


def projects() -> rx.Component:
    return section_layout(
        "Projects",
        # 주니어 프로젝트
        rx.flex(
            rx.text(f"count: {len(junior_project_data) + len(newbie_project_data)}", font_size="0.6rem"),
            justify="end",
            width="100%",
        ),
        _project_group_divider("Junior"),
        rx.vstack(
            rx.foreach(
                junior_project_data,
                lambda data: _project_card(data),
            ),
            justify="center",
            width="100%",
        ),
        # 뉴비 프로젝트
        _project_group_divider("Newbie"),
        rx.vstack(
            rx.foreach(
                newbie_project_data[::-1],
                lambda data: _project_card(data),
            ),
            justify="center",
            width="100%",
        ),
    )
