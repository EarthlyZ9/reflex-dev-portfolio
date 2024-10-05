import reflex as rx

from dev_portfolio_reflex.components.common import section_header, header_divider


def section_layout(section_name: str, *children) -> rx.Component:
    return rx.flex(
        section_header(section_name),
        header_divider(),
        *children,
        direction="column",
        spacing="3",
        align="start",
        margin=["10px", "10px", "10px", "30px", "30px"]
    )
