import reflex as rx

from dev_portfolio_reflex.styles.common import ACCENT_COLOR


class NavButtonState(rx.State):
    active_button: int = 1

    def set_active_button(self, button_id: int):
        self.active_button = button_id

    @staticmethod
    def button_color(id: int) -> str:
        return "gold" if NavButtonState.active_button == id else "white"


def nav_button(id, label) -> rx.Component:
    return rx.button(
        label,
        background_color="transparent",
        _active={"outline": "none"},
        _hover={"background_color": "black", "cursor": "pointer"},
        font_size="17px",
        color=rx.cond(NavButtonState.active_button == id, ACCENT_COLOR, "white"),
        on_click=lambda: NavButtonState.set_active_button(id),
    )


def navbar():
    return rx.flex(
        rx.flex(
            nav_button(1, "About"),
            nav_button(2, "Career"),
            nav_button(3, "Projects"),
            nav_button(4, "Blog"),
            direction="row",
            justify="between",
            align="center",
            background_color="#333",
            padding="5px",
            border_radius="5px",
            box_shadow="6px 13px 38px rgba(0, 0, 0, 0.30), 5px 4px 10px rgba(0, 0, 0, 0.22)",
        ),
        width="100%",
        position="sticky",
        top="0",
        z_index="1000",
        justify="center",
    )
