import reflex as rx

from dev_portfolio_reflex.styles.common import ACCENT_COLOR, SECONDARY_BG_COLOR


def section_header(title: str) -> rx.Component:
    return rx.heading(title, size="8")


def header_divider() -> rx.Component:
    return rx.divider(
        size="4",
        width="50px",
        height="5px",
        border_radius="5px",
        background=f"linear-gradient(to right, skyblue, {ACCENT_COLOR})",
    )


def card_with_icon(header: str, *, icon_tag: str, content: str, **style) -> rx.Component:
    return rx.flex(
        rx.card(
            rx.icon(tag=icon_tag, color=ACCENT_COLOR, width="100%", height="100%"),
            width="40px",
            height="40px",
            align_items="center",
        ),
        rx.flex(
            rx.heading(header, size="1", font_weight="300"),
            rx.heading(content, size="2", font_weight="500", color="white"),
            direction="column",
            justify="center",
        ),
        padding="3px",
        gap="10px",
        direction="row",
        justify="start",
        align="center",
        border_radius="10px",
        _hover={"background_color": SECONDARY_BG_COLOR},
        **style,
    )
