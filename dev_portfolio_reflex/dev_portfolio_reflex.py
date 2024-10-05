import reflex as rx

from dev_portfolio_reflex import sections
from dev_portfolio_reflex.layouts.navbar import navbar, NavButtonState
from dev_portfolio_reflex.layouts.sidebar import sidebar, sidebar_horizontal, sidebar_horizontal_accordian
from dev_portfolio_reflex.styles.common import PRIMARY_BG_COLOR


class State(rx.State):
    """The app state."""

    ...


def main_content_box() -> rx.Component:
    return rx.box(
        navbar(),
        rx.match(
            NavButtonState.active_button,
            (1, sections.about()),
            (2, sections.career()),
            (3, sections.projects()),
            (4, sections.blog()),
        ),
        height="100%",
        width="100%",
        background_color=PRIMARY_BG_COLOR,
        border_radius="30px",
        position="relative",
        padding="1rem 1rem 2rem 1rem",
        overflow_x="hidden",
    )


@rx.page(route="/", title="EarthlyZ9 Dev")
def index() -> rx.Component:
    return rx.flex(
        # Desktop Layout
        rx.desktop_only(
            rx.flex(
                rx.flex(
                    sidebar(),
                    width="280px",
                    align="start",
                    height="90vh",
                    justify="center",
                ),
                rx.flex(
                    # Main content
                    main_content_box(),
                    align="center",
                    justify="center",
                    margin_left="30px",
                    height="90vh",
                    width="100%",
                ),
                direction="row",
                align="start",
            ),
            rx.logo(
                padding="6px",
                position="fixed",
                bottom="0rem",
                background="transparent",
                color="inherit",
                z_index="20",
            ),
            margin="2rem 2rem",
            width="100%",
        ),
        # Tablet Layout
        rx.tablet_only(
            rx.flex(
                rx.flex(
                    sidebar_horizontal(), width="100%", align="start", height="300px", justify="center", flex_shrink="0"
                ),
                rx.flex(
                    # Main content
                    main_content_box(),
                    align="center",
                    justify="center",
                    width="100%",
                    flex="1",
                    overflow_y="auto",
                    margin_top="1rem",
                ),
                direction="column",
                align="start",
                overflow="hidden",
                margin="2rem",
                height="calc(100vh - 4rem)",
            ),
            width="100%",
        ),
        rx.mobile_only(
            rx.flex(
                rx.flex(
                    sidebar_horizontal_accordian(),
                    width="100%",
                    align="start",
                    justify="center",
                    flex_shrink="0",
                ),
                rx.flex(
                    # Main content
                    main_content_box(),
                    align="center",
                    justify="center",
                    width="100%",
                    flex="1",
                    overflow_y="auto",
                    margin_top="1rem",
                ),
                direction="column",
                align="start",
                overflow="hidden",
                margin="1rem",
                height="calc(100vh - 4rem)",
            )
        ),
    )


# Reflex App Configuration
global_style = {
    "breakpoints": ["550px", "48em", "62em", "80em", "96em"],
    "body": {
        "background": "#f5f5f5",
        "margin": "2rem",
        "padding": "0",
        "font_family": "Arial, sans-serif",
        "height": "100%",
        "box_sizing": "border-box",
    },
}
app = rx.App(
    theme=rx.theme(appearance="dark", has_background=True, radius="large", accent_color="blue"),
    style=global_style,
    stylesheets=[
        "/styles.css",  # This path is relative to assets/
    ],
)
