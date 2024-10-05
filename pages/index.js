/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { ActivityIcon as LucideActivityIcon, ArrowRightIcon as LucideArrowRightIcon, AwardIcon as LucideAwardIcon, BriefcaseBusinessIcon as LucideBriefcaseBusinessIcon, CalendarDaysIcon as LucideCalendarDaysIcon, ChevronDownIcon as LucideChevronDownIcon, CodeIcon as LucideCodeIcon, FileIcon as LucideFileIcon, GithubIcon as LucideGithubIcon, GraduationCapIcon as LucideGraduationCapIcon, MailIcon as LucideMailIcon, MapPinIcon as LucideMapPinIcon, MoveRightIcon as LucideMoveRightIcon, PenLineIcon as LucidePenLineIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Avatar as RadixThemesAvatar, Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, Em as RadixThemesEm, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Select as RadixThemesSelect, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Table as RadixThemesTable, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import NextLink from "next/link"
import { Content as RadixAccordionContent, Header as RadixAccordionHeader, Item as RadixAccordionItem, Root as RadixAccordionRoot, Trigger as RadixAccordionTrigger } from "@radix-ui/react-accordion"
import NextHead from "next/head"



export function Link_d2884dceabb079de7ab3048c12060a61 () {



  return (
    <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>
  <NextLink href={"https://www.rallit.com/resumes/11292@linda2927/%EC%9D%B4%EC%A7%80%EC%88%98"} passHref={true}>
  <LucideFileIcon css={({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "color(display-p3 0.49 0.72 1)" }) })} size={20}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_76e99daec78d2dd0f357ce80ebfd5ed3 () {



  return (
    <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>
  <NextLink href={"https://github.com/EarthlyZ9"} passHref={true}>
  <LucideGithubIcon css={({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "color(display-p3 0.49 0.72 1)" }) })} size={20}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Div_88fb5840144af87827db7f22a493c318 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_a863e98a4e31dca34182756564a2b4b7/>
</div>
  )
}

export function Button_46ece4233785da0c26fa7a45eeb6d958 () {
  const reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state = useContext(StateContexts.reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_e616b38c824d921698564c76cd463c31 = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.dev_portfolio_reflex___layouts___navbar____nav_button_state.set_active_button", ({ ["button_id"] : 1 })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["backgroundColor"] : "transparent", ["&:active"] : ({ ["outline"] : "none" }), ["&:hover"] : ({ ["backgroundColor"] : "black", ["cursor"] : "pointer" }), ["fontSize"] : "17px", ["color"] : ((reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state.active_button === 1) ? "color(display-p3 0.49 0.72 1)" : "white") })} onClick={on_click_e616b38c824d921698564c76cd463c31}>
  {"About"}
</RadixThemesButton>
  )
}

export function Link_8badcea52e96c2b2ffc115478db73862 () {



  return (
    <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>
  <NextLink href={"https://notion.earthlyz9.dev"} passHref={true}>
  <LucidePenLineIcon css={({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "color(display-p3 0.49 0.72 1)" }) })} size={20}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Button_c266b2040839ddce8d896393297bf6b3 () {
  const reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state = useContext(StateContexts.reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_aa348802954f4b27caa5333f7d857df0 = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.dev_portfolio_reflex___layouts___navbar____nav_button_state.set_active_button", ({ ["button_id"] : 3 })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["backgroundColor"] : "transparent", ["&:active"] : ({ ["outline"] : "none" }), ["&:hover"] : ({ ["backgroundColor"] : "black", ["cursor"] : "pointer" }), ["fontSize"] : "17px", ["color"] : ((reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state.active_button === 3) ? "color(display-p3 0.49 0.72 1)" : "white") })} onClick={on_click_aa348802954f4b27caa5333f7d857df0}>
  {"Projects"}
</RadixThemesButton>
  )
}

export function Button_7822c9cf5e053f9bb1ef016f445d36fb () {
  const reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state = useContext(StateContexts.reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_45b27db988006b0ce5716421b6f7ce6c = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.dev_portfolio_reflex___layouts___navbar____nav_button_state.set_active_button", ({ ["button_id"] : 4 })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["backgroundColor"] : "transparent", ["&:active"] : ({ ["outline"] : "none" }), ["&:hover"] : ({ ["backgroundColor"] : "black", ["cursor"] : "pointer" }), ["fontSize"] : "17px", ["color"] : ((reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state.active_button === 4) ? "color(display-p3 0.49 0.72 1)" : "white") })} onClick={on_click_45b27db988006b0ce5716421b6f7ce6c}>
  {"Blog"}
</RadixThemesButton>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


                function Fallback({ error, resetErrorBoundary }) {
                    return (
                        <div>
  <p>
  {"Ooops...Unknown Reflex error has occured:"}
</p>
  <p css={({ ["color"] : "red" })}>
  {error.message}
</p>
  <p>
  {"Please contact the support."}
</p>
</div>
                    );
                }
            

export function Button_59ac2f63a7c1cfdad67a4222a5ac1ac7 () {
  const reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state = useContext(StateContexts.reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_9bfb6c90b40279a45f2d73ca07830cd8 = useCallback(((...args) => ((addEvents([(Event("reflex___state____state.dev_portfolio_reflex___layouts___navbar____nav_button_state.set_active_button", ({ ["button_id"] : 2 })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["backgroundColor"] : "transparent", ["&:active"] : ({ ["outline"] : "none" }), ["&:hover"] : ({ ["backgroundColor"] : "black", ["cursor"] : "pointer" }), ["fontSize"] : "17px", ["color"] : ((reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state.active_button === 2) ? "color(display-p3 0.49 0.72 1)" : "white") })} onClick={on_click_9bfb6c90b40279a45f2d73ca07830cd8}>
  {"Career"}
</RadixThemesButton>
  )
}

export function Link_4814c75bf37e5f2de95834dc2ca1d866 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} size={"3"}>
  <NextLink href={"https://reflex.dev"} passHref={true}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["textAlign"] : "center", ["padding"] : "1em" })} direction={"row"} gap={"3"}>
  {"Built with "}
  <Fragment>
  {isTrue((resolvedColorMode === "light")) ? (
  <Fragment>
  <div className={"rx-Html"} dangerouslySetInnerHTML={({ ["__html"] : "<svg width=\"56\" height=\"12\" viewBox=\"0 0 56 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 11.6V0.400024H8.96V4.88002H6.72V2.64002H2.24V4.88002H6.72V7.12002H2.24V11.6H0ZM6.72 11.6V7.12002H8.96V11.6H6.72Z\" fill=\"#110F1F\"/>\n<path d=\"M11.2 11.6V0.400024H17.92V2.64002H13.44V4.88002H17.92V7.12002H13.44V9.36002H17.92V11.6H11.2Z\" fill=\"#110F1F\"/>\n<path d=\"M20.16 11.6V0.400024H26.88V2.64002H22.4V4.88002H26.88V7.12002H22.4V11.6H20.16Z\" fill=\"#110F1F\"/>\n<path d=\"M29.12 11.6V0.400024H31.36V9.36002H35.84V11.6H29.12Z\" fill=\"#110F1F\"/>\n<path d=\"M38.08 11.6V0.400024H44.8V2.64002H40.32V4.88002H44.8V7.12002H40.32V9.36002H44.8V11.6H38.08Z\" fill=\"#110F1F\"/>\n<path d=\"M47.04 4.88002V0.400024H49.28V4.88002H47.04ZM53.76 4.88002V0.400024H56V4.88002H53.76ZM49.28 7.12002V4.88002H53.76V7.12002H49.28ZM47.04 11.6V7.12002H49.28V11.6H47.04ZM53.76 11.6V7.12002H56V11.6H53.76Z\" fill=\"#110F1F\"/>\n</svg>" })}/>
</Fragment>
) : (
  <Fragment>
  <div className={"rx-Html"} dangerouslySetInnerHTML={({ ["__html"] : "<svg width=\"56\" height=\"12\" viewBox=\"0 0 56 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z\" fill=\"white\"/>\n<path d=\"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z\" fill=\"white\"/>\n<path d=\"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z\" fill=\"white\"/>\n<path d=\"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z\" fill=\"white\"/>\n<path d=\"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z\" fill=\"white\"/>\n<path d=\"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z\" fill=\"white\"/>\n</svg>" })}/>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

const slideDown = keyframes`
from {
  height: 0;
}
to {
  height: var(--radix-accordion-content-height);
}
`
const slideUp = keyframes`
from {
  height: var(--radix-accordion-content-height);
}
to {
  height: 0;
}
`


export function Fragment_a863e98a4e31dca34182756564a2b4b7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue((connectErrors.length > 0)) ? (
  <Fragment>
  <LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ({ ["_js_expr"] : "(\"Check if server is reachable at \"+getBackendURL(env.EVENT).href)", ["_var_type"] : "str", ["_var_data"] : null, ["_var_value"] : [({ ["_js_expr"] : "\"Check if server is reachable at \"", ["_var_type"] : "str", ["_var_data"] : null, ["_var_value"] : "Check if server is reachable at " }), ({ ["_js_expr"] : "getBackendURL(env.EVENT).href", ["_var_type"] : "WebsocketTargetURL", ["_var_data"] : ({ ["state"] : "", ["imports"] : [["/env.json", [({ ["tag"] : "env", ["is_default"] : true, ["alias"] : null, ["install"] : true, ["render"] : true, ["transpile"] : false })]], ["/utils/state", [({ ["tag"] : "getBackendURL", ["is_default"] : false, ["alias"] : null, ["install"] : true, ["render"] : true, ["transpile"] : false })]]], ["hooks"] : [] }) })] }), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))

  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Fragment_e77a8ac322b05277ef65f99a121d71f5 () {
  const reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state = useContext(StateContexts.reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state = useContext(StateContexts.reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state)
  
                useEffect(() => {
                    ((...args) => ((addEvents([(Event("reflex___state____state.dev_portfolio_reflex___sections___blog____post_data_state.load_entries", ({ ["start_cursor"] : null })))], args, ({  })))))()
                    return () => {
                        
                    }
                }, []);



  return (
    <Fragment>
  {
    (() => {
        switch (JSON.stringify(reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state.active_button)) {
                case JSON.stringify(1):
                return <RadixThemesFlex align={"start"} css={({ ["@media screen and (min-width: 0)"] : ({ ["margin"] : "10px" }), ["@media screen and (min-width: 550px)"] : ({ ["margin"] : "10px" }), ["@media screen and (min-width: 48em)"] : ({ ["margin"] : "10px" }), ["@media screen and (min-width: 62em)"] : ({ ["margin"] : "30px" }), ["@media screen and (min-width: 80em)"] : ({ ["margin"] : "30px" }) })} direction={"column"} gap={"3"}>
  <RadixThemesHeading size={"8"}>
  {"About Me"}
</RadixThemesHeading>
  <RadixThemesSeparator css={({ ["width"] : "50px", ["height"] : "5px", ["borderRadius"] : "5px", ["background"] : "linear-gradient(to right, skyblue, color(display-p3 0.49 0.72 1))" })} size={"4"}/>
  <RadixThemesStrong css={({ ["size"] : "3" })}>
  {"\ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \uac1c\ubc1c\uc790, \uc774\uc9c0\uc218\uc785\ub2c8\ub2e4."}
</RadixThemesStrong>
  <RadixThemesText as={"p"} size={"2"}>
  {"\uc655\uc131\ud55c \ud638\uae30\uc2ec\uacfc \ube60\ub978 \uc2b5\ub4dd \uc18d\ub3c4, \uac15\ud55c \uc9c0\uad6c\ub825\uc744 \uae30\ubc18\uc73c\ub85c \ub2e4\uc591\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud569\ub2c8\ub2e4."}
</RadixThemesText>
  <RadixThemesText as={"p"} size={"2"}>
  {"\ud504\ub85c\uc81d\ud2b8 \ucd08\uae30 \uc138\ud305\ubd80\ud130 \ubc30\ud3ec \ubc0f \uc6b4\uc601\uae4c\uc9c0 \ud504\ub85c\ub355\ud2b8 \uac1c\ubc1c\uc758 \uc804\ubc18\uc801\uc778 \uacfc\uc815\uc744 \uacbd\ud5d8\ud588\uc2b5\ub2c8\ub2e4. RESTful \ud55c API \uac1c\ubc1c, \ub300\uaddc\ubaa8 \ub370\uc774\ud130 \uc218\uc9d1 \ubc0f \ubd84\uc11d\uc744 \uc704\ud55c \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95, GitHub Actions \uc640 AWS \ub97c \uc774\uc6a9\ud55c CI/CD \uad6c\ucd95 \ub4f1\uc744 \ube44\ub86f\ud55c \uc778\ud504\ub77c \uc138\ud305\uc758 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4."}
</RadixThemesText>
  <RadixThemesText as={"p"} size={"2"}>
  {"\ud300\uc73c\ub85c \uc77c\ud558\ub294 \uac83\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc73c\uba70 \uc9c1\ubb34\uc640 \uc0c1\uad00\uc5c6\uc774 \ud568\uaed8 \uc77c\ud558\uae30\uc5d0 \ud3b8\uc548\ud558\uace0 \uc601\uac10\uc744 \uc8fc\ub294 \ub3d9\ub8cc\uac00 \ub418\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}
</RadixThemesText>
  <RadixThemesGrid columns={({ ["xs"] : "1", ["sm"] : "2", ["md"] : "2", ["lg"] : "2", ["xl"] : "2" })} css={({ ["width"] : "100%" })} gap={"4"}>
  <RadixThemesCard css={({ ["padding"] : "20px", ["gridColumn"] : "1 / -1" })}>
  <RadixThemesFlex align={"start"} direction={"row"} justify={"center"} gap={"5"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["textAlign"] : "center" })} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>
  <LucideCodeIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)" })} size={40}/>
  <RadixThemesHeading size={"5"}>
  {"Tech Stack"}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["flexWrap"] : "wrap" })} gap={"3"}>
  <>{["Python", "Django", "REST API", "Celery", "Spring Boot", "GitHub Actions", "Docker", "Git", "AWS"].map((content, index_e84697b1f45719d6) => (
  <RadixThemesBadge color={"cyan"} key={index_e84697b1f45719d6} radius={"full"} size={"2"} variant={"soft"}>
  {content}
</RadixThemesBadge>
))}</>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard css={({ ["padding"] : "20px", ["gridColumn"] : "1 / -1", ["width"] : "100%" })}>
  <RadixThemesFlex align={"start"} direction={"row"} justify={"center"} gap={"5"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["textAlign"] : "center" })} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>
  <LucideBriefcaseBusinessIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)" })} size={40}/>
  <RadixThemesHeading size={"5"}>
  {"Career"}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>
  <RadixThemesFlex align={"center"} css={({ ["cursor"] : "pointer", ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["flexWrap"] : "wrap" })} direction={"row"} justify={"start"} onClick={((...args) => ((addEvents([(Event("reflex___state____state.dev_portfolio_reflex___layouts___navbar____nav_button_state.set_active_button", ({ ["button_id"] : 2 })))], args, ({  })))))}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideActivityIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "color(display-p3 0.45 0.79 0.89 / 1)" })} size={"3"}>
  {"2023.08.01 ~ ing"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500" })} size={"3"}>
  {"\ud06c\ub9ac\uc2a4\ube44 (Crysbe)"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard css={({ ["padding"] : "20px" })}>
  <RadixThemesFlex align={"start"} direction={"row"} justify={"center"} gap={"5"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["textAlign"] : "center" })} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>
  <LucideGraduationCapIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)" })} size={40}/>
  <RadixThemesHeading size={"5"}>
  {"Education"}
</RadixThemesHeading>
</RadixThemesFlex>
  <ul css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["marginLeft"] : "1.5rem" })}>
  <li>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"between"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["color"] : "color(display-p3 0.45 0.79 0.89 / 1)" })} size={"3"}>
  {"2019.02"}
</RadixThemesText>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <RadixThemesText as={"p"} size={"3"}>
  {"\ub3d9\ud0c4\uad6d\uc81c\uace0\ub4f1\ud559\uad50 \uc878\uc5c5"}
</RadixThemesText>
</RadixThemesFlex>
</li>
  <li>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"between"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["color"] : "color(display-p3 0.45 0.79 0.89 / 1)" })} size={"3"}>
  {"2019.03"}
</RadixThemesText>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <RadixThemesText as={"p"} size={"3"}>
  {"\uc5f0\uc138\ub300 \uacbd\uc601\ud559\uacfc \uc785\ud559"}
</RadixThemesText>
</RadixThemesFlex>
</li>
  <li>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"between"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["color"] : "color(display-p3 0.45 0.79 0.89 / 1)" })} size={"3"}>
  {"2022.01"}
</RadixThemesText>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <RadixThemesText as={"p"} size={"3"}>
  {"GWU \uad50\ud658\ud559\uc0dd"}
</RadixThemesText>
</RadixThemesFlex>
</li>
  <li>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"between"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["color"] : "color(display-p3 0.45 0.79 0.89 / 1)" })} size={"3"}>
  {"2024.02"}
</RadixThemesText>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <RadixThemesText as={"p"} size={"3"}>
  {"\uc5f0\uc138\ub300 \uacbd\uc601\ud559\uacfc \uc878\uc5c5"}
</RadixThemesText>
</RadixThemesFlex>
</li>
</ul>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard css={({ ["padding"] : "20px" })}>
  <RadixThemesFlex align={"start"} direction={"row"} justify={"center"} gap={"5"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["textAlign"] : "center" })} direction={"column"} gap={"3"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>
  <LucideAwardIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)" })} size={40}/>
  <RadixThemesHeading size={"5"}>
  {"Certificates"}
</RadixThemesHeading>
</RadixThemesFlex>
  <ul css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["marginLeft"] : "1.5rem" })}>
  <li>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"between"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["color"] : "color(display-p3 0.45 0.79 0.89 / 1)" })} size={"3"}>
  {"2024.06"}
</RadixThemesText>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <RadixThemesText as={"p"} size={"3"}>
  {"SQL \uac1c\ubc1c\uc790"}
</RadixThemesText>
</RadixThemesFlex>
</li>
  <li>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"between"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["color"] : "color(display-p3 0.45 0.79 0.89 / 1)" })} size={"3"}>
  {"2023.06"}
</RadixThemesText>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <RadixThemesText as={"p"} size={"3"}>
  {"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac"}
</RadixThemesText>
</RadixThemesFlex>
</li>
  <li>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"between"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["color"] : "color(display-p3 0.45 0.79 0.89 / 1)" })} size={"3"}>
  {"2022.01"}
</RadixThemesText>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <RadixThemesText as={"p"} size={"3"}>
  {"TOEIC 990"}
</RadixThemesText>
</RadixThemesFlex>
</li>
  <li>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"between"} gap={"2"}>
  <RadixThemesText as={"p"} css={({ ["color"] : "color(display-p3 0.45 0.79 0.89 / 1)" })} size={"3"}>
  {"2019.10"}
</RadixThemesText>
  <RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
  <RadixThemesText as={"p"} size={"3"}>
  {"\ucef4\ud65c 1\uae09"}
</RadixThemesText>
</RadixThemesFlex>
</li>
</ul>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesGrid>
</RadixThemesFlex>;
                break;
                case JSON.stringify(2):
                return <RadixThemesFlex align={"start"} css={({ ["@media screen and (min-width: 0)"] : ({ ["margin"] : "10px" }), ["@media screen and (min-width: 550px)"] : ({ ["margin"] : "10px" }), ["@media screen and (min-width: 48em)"] : ({ ["margin"] : "10px" }), ["@media screen and (min-width: 62em)"] : ({ ["margin"] : "30px" }), ["@media screen and (min-width: 80em)"] : ({ ["margin"] : "30px" }) })} direction={"column"} gap={"3"}>
  <RadixThemesHeading size={"8"}>
  {"Career"}
</RadixThemesHeading>
  <RadixThemesSeparator css={({ ["width"] : "50px", ["height"] : "5px", ["borderRadius"] : "5px", ["background"] : "linear-gradient(to right, skyblue, color(display-p3 0.49 0.72 1))" })} size={"4"}/>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"1"}>
  <RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"2"}>
  {"\uc131\uc7a5\ud558\ub294 2\ub144\ucc28 \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4. \uc8fc\ub85c Python\uacfc Django\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc31\uc5d4\ub4dc \uc11c\ube44\uc2a4\ub97c \uac1c\ubc1c\ud558\uace0 \uc788\uc73c\uba70 AWS \uc11c\ube44\uc2a4\ub97c \ud65c\uc6a9\ud55c \uc778\ud504\ub77c \uad6c\ucd95\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc2b5\ub2c8\ub2e4."}
</RadixThemesText>
  <RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"2"}>
  {"polars, rabbitmq, celery \ub97c \uc774\uc6a9\ud558\uc5ec \ub300\uc6a9\ub7c9 \ub370\uc774\ud130 \uc218\uc9d1 \ubc0f \ubd84\uc11d \uc2dc\uc2a4\ud15c\uc744 \uac1c\ubc1c\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4."}
</RadixThemesText>
  <RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"2"}>
  {"\uc0c8\ub85c\uc6b4 \uae30\uc220\uc5d0 \ub300\ud574 \ubc30\uc6b0\ub294 \uac83\uc744 \uc990\uae30\uba70, \ud638\uae30\uc2ec\uc774 \ub9ce\uace0 \uc9c8\ubb38\uc744 \ud1b5\ud55c \ubc30\uc6c0\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4."}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesSeparator css={({ ["width"] : "95%", ["margin"] : "10px" })} size={"4"}/>
  <RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 550px)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["paddingLeft"] : "30px", ["marginTop"] : "1rem", ["overflowY"] : "hidden", ["flex"] : "1" })} direction={"column"} gap={"0"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <RadixThemesBox css={({ ["position"] : "relative", ["borderRadius"] : "100%", ["width"] : "20px", ["height"] : "20px", ["aspectRatio"] : "1/1", ["textAlign"] : "center", ["backgroundColor"] : "color(display-p3 0.49 0.72 1)", ["boxShadow"] : "inset 5px 3px 6px #0090ffde", ["zIndex"] : "2", ["&:after"] : ({ ["position"] : "absolute", ["border"] : "1px solid #999", ["width"] : "0", ["height"] : "100vh", ["display"] : "block", ["content"] : "''", ["left"] : "50%", ["zIndex"] : "1", ["top"] : "100%", ["marginLeft"] : "-1px" }) })}>
  {""}
</RadixThemesBox>
  <RadixThemesFlex gap={"3"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"1"}>
  <RadixThemesHeading size={"2"}>
  {"Crysbe (\ud06c\ub9ac\uc2a4\ube44)"}
</RadixThemesHeading>
  <RadixThemesBadge color={"cyan"} size={"2"} variant={"soft"}>
  {"2023.08.01 ~ ing"}
</RadixThemesBadge>
</RadixThemesFlex>
  <ul css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["marginLeft"] : "1.5rem" })}>
  <>{["\ub300\ub7c9\uc758 \ub370\uc774\ud130 \uad00\ub9ac\uc640 \ucc28\ud2b8\ub97c \ud1b5\ud55c \uc2dc\uac01\ud654\ub97c \uc9c0\uc6d0\ud558\ub294 \ub300\uc2dc\ubcf4\ub4dc \uc11c\ube44\uc2a4\ub97c \uc704\ud55c Django Ninja \uae30\ubc18\uc758 RESTful API \uac1c\ubc1c", "\ub2e4\uc591\ud55c \uc18c\uc2a4\ub85c\ubd80\ud130 \ub300\uaddc\ubaa8 \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0 \uac00\uacf5\ud558\ub294 \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95", "Playwright \ub97c \uc774\uc6a9\ud55c \ub2e4\uc218 \uac1c\uc758 \ud06c\ub864\ub9c1 \ubd07 \uac1c\ubc1c", "asyncio, aiohttp, celery \ub97c \uc774\uc6a9\ud55c \ube44\ub3d9\uae30 \uc218\uc9d1 \uc2dc\uc2a4\ud15c \uac1c\ubc1c", "DRF \uae30\ubc18\uc758 \uc778\ud50c\ub8e8\uc5b8\uc11c \uad00\ub9ac \uc194\ub8e8\uc158 \uc720\uc9c0 \ubcf4\uc218 \ubc0f CI/CD \uad6c\ucd95", "AWS \ub9ac\uc18c\uc2a4\uc758 \uc911\uc559 \uad00\ub9ac\ub97c \uc704\ud55c bastion host \uad6c\ucd95", "\uae30\ud0c0 \uc0ac\ub0b4 \ud074\ub77c\uc6b0\ub4dc \ub9ac\uc18c\uc2a4 \uad00\ub9ac"].map((t, index_0f6c7a16046b1ce2) => (
  <li key={index_0f6c7a16046b1ce2}>
  <RadixThemesText as={"span"} size={"2"}>
  {t}
</RadixThemesText>
</li>
))}</>
</ul>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 550px)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"1"}>
  <RadixThemesCard css={({ ["@media screen and (min-width: 0)"] : ({ ["padding"] : "10px" }), ["@media screen and (min-width: 550px)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 48em)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 62em)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 80em)"] : ({ ["padding"] : "20px" }), ["backgroundColor"] : "#333", ["boxShadow"] : "0px 4px 8px rgba(0, 0, 0, 0.1)", ["width"] : "100%", ["position"] : "relative" })}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesHeading size={"2"}>
  {"Crysbe (\ud06c\ub9ac\uc2a4\ube44)"}
</RadixThemesHeading>
  <RadixThemesBadge color={"cyan"} size={"2"} variant={"soft"}>
  {"2023.08.01 ~ ing"}
</RadixThemesBadge>
  <ul css={({ ["direction"] : "column", ["listStyleType"] : "disc", ["marginLeft"] : "1.5rem" })}>
  <>{["\ub300\ub7c9\uc758 \ub370\uc774\ud130 \uad00\ub9ac\uc640 \ucc28\ud2b8\ub97c \ud1b5\ud55c \uc2dc\uac01\ud654\ub97c \uc9c0\uc6d0\ud558\ub294 \ub300\uc2dc\ubcf4\ub4dc \uc11c\ube44\uc2a4\ub97c \uc704\ud55c Django Ninja \uae30\ubc18\uc758 RESTful API \uac1c\ubc1c", "\ub2e4\uc591\ud55c \uc18c\uc2a4\ub85c\ubd80\ud130 \ub300\uaddc\ubaa8 \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0 \uac00\uacf5\ud558\ub294 \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95", "Playwright \ub97c \uc774\uc6a9\ud55c \ub2e4\uc218 \uac1c\uc758 \ud06c\ub864\ub9c1 \ubd07 \uac1c\ubc1c", "asyncio, aiohttp, celery \ub97c \uc774\uc6a9\ud55c \ube44\ub3d9\uae30 \uc218\uc9d1 \uc2dc\uc2a4\ud15c \uac1c\ubc1c", "DRF \uae30\ubc18\uc758 \uc778\ud50c\ub8e8\uc5b8\uc11c \uad00\ub9ac \uc194\ub8e8\uc158 \uc720\uc9c0 \ubcf4\uc218 \ubc0f CI/CD \uad6c\ucd95", "AWS \ub9ac\uc18c\uc2a4\uc758 \uc911\uc559 \uad00\ub9ac\ub97c \uc704\ud55c bastion host \uad6c\ucd95", "\uae30\ud0c0 \uc0ac\ub0b4 \ud074\ub77c\uc6b0\ub4dc \ub9ac\uc18c\uc2a4 \uad00\ub9ac"].map((t, index_82a6e7ba782d53f2) => (
  <li key={index_82a6e7ba782d53f2}>
  <RadixThemesText as={"span"} size={"2"}>
  {t}
</RadixThemesText>
</li>
))}</>
</ul>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>;
                break;
                case JSON.stringify(3):
                return <RadixThemesFlex align={"start"} css={({ ["@media screen and (min-width: 0)"] : ({ ["margin"] : "10px" }), ["@media screen and (min-width: 550px)"] : ({ ["margin"] : "10px" }), ["@media screen and (min-width: 48em)"] : ({ ["margin"] : "10px" }), ["@media screen and (min-width: 62em)"] : ({ ["margin"] : "30px" }), ["@media screen and (min-width: 80em)"] : ({ ["margin"] : "30px" }) })} direction={"column"} gap={"3"}>
  <RadixThemesHeading size={"8"}>
  {"Projects"}
</RadixThemesHeading>
  <RadixThemesSeparator css={({ ["width"] : "50px", ["height"] : "5px", ["borderRadius"] : "5px", ["background"] : "linear-gradient(to right, skyblue, color(display-p3 0.49 0.72 1))" })} size={"4"}/>
  <RadixThemesFlex css={({ ["width"] : "100%" })} justify={"end"}>
  <RadixThemesText as={"p"} css={({ ["fontSize"] : "0.6rem" })}>
  {"count: 11"}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["width"] : "100%" })} justify={"center"}>
  <RadixThemesSeparator css={({ ["flexGrow"] : "1", ["margin"] : "0 10px" })} size={"4"}/>
  <RadixThemesHeading css={({ ["fontWeight"] : "400", ["color"] : "gray", ["whiteSpace"] : "nowrap" })} size={"2"}>
  <RadixThemesEm>
  {"Junior"}
</RadixThemesEm>
</RadixThemesHeading>
  <RadixThemesSeparator css={({ ["flexGrow"] : "1", ["margin"] : "0 10px" })} size={"4"}/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"center"} gap={"3"}>
  <>{[({ ["title"] : "FinFriends, \ub098\ub791 \ub2e4\uc774\ube59 \uac08 \uc0ac\ub78c \ud83d\ude4c", ["filename"] : "", ["subtitle"] : "Spring Boot \ub85c \ub9cc\ub4dc\ub294 RESTful API & \ucc44\ud305 \uc11c\ubc84", ["description"] : "\ub2e4\uc774\ubc84\ub4e4\uc744 \uc704\ud55c \ud2b8\ub808\uc774\ub2dd \uc720\ud2f8\ub9ac\ud2f0 + \ubc84\ub514\ub97c \ucc3e\uc544\uc8fc\ub294 \ucee4\ubba4\ub2c8\ud2f0 \uc11c\ube44\uc2a4", ["date"] : "2024.07 ~ ", ["completed"] : false })].map((data, index_b2a6cfef77ef1d5f) => (
  <RadixThemesCard css={({ ["padding"] : "10px", ["backgroundColor"] : "#393939", ["boxShadow"] : "0px 4px 8px 5px rgba(0, 0, 0, 0.1)", ["width"] : "100%", ["position"] : "relative" })} key={index_b2a6cfef77ef1d5f}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"1"}>
  <RadixThemesFlex css={({ ["width"] : "100%", ["flexWrap"] : "wrap" })} direction={"row"} justify={"between"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "#4CCCE6" })} size={"4"}>
  {data["title"]}
</RadixThemesHeading>
  <RadixThemesBadge>
  {data["date"]}
</RadixThemesBadge>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>
  <RadixThemesStrong css={({ ["fontSize"] : "0.8em" })}>
  {data["subtitle"]}
</RadixThemesStrong>
  <RadixThemesText as={"p"} css={({ ["fontSize"] : "0.9em" })}>
  {data["description"]}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesBox css={({ ["position"] : "absolute", ["right"] : "20px", ["bottom"] : "10px" })}>
  <Fragment>
  {isTrue(data["completed"]) ? (
  <Fragment>
  <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>
  <NextLink href={("https://github.com/EarthlyZ9/projects/blob/main/"+data["filename"])} passHref={true}>
  <LucideMoveRightIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment>
  <RadixThemesButton disabled={true}>
  {"In Progress"}
</RadixThemesButton>
</Fragment>
)}
</Fragment>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesCard>
))}</>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["width"] : "100%" })} justify={"center"}>
  <RadixThemesSeparator css={({ ["flexGrow"] : "1", ["margin"] : "0 10px" })} size={"4"}/>
  <RadixThemesHeading css={({ ["fontWeight"] : "400", ["color"] : "gray", ["whiteSpace"] : "nowrap" })} size={"2"}>
  <RadixThemesEm>
  {"Newbie"}
</RadixThemesEm>
</RadixThemesHeading>
  <RadixThemesSeparator css={({ ["flexGrow"] : "1", ["margin"] : "0 10px" })} size={"4"}/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"center"} gap={"3"}>
  <>{[({ ["title"] : "\uc124\ubb38\uc744 \ub300\ud558\ub294 \uc0c8\ub85c\uc6b4 \ubc29\ubc95, Convey", ["filename"] : "Convey.md", ["subtitle"] : "\ud6a8\uc728\uc801\uc778 Eager loading \uc5d0 \ub300\ud55c \uace0\ubbfc", ["description"] : "\ud53c\ud5d8\uc790\ub4e4\uc744 \ub300\uc0c1\uc73c\ub85c \ud55c \uc5f0\uad6c \uc124\ubb38\uc744 \uc218\ud569\ud558\ub294 \uacfc\uc815\uc744 \uac04\ud3b8\ud654\ud574\ubcf4\uc790", ["date"] : "2023.02 ~ 2023.03", ["completed"] : true }), ({ ["title"] : "\uc5f0\uc138\ub300 BK \uc5f0\uad6c\uc2e4\uc758 \ud648\ud398\uc774\uc9c0 \uc0c8\ub2e8\uc7a5", ["filename"] : "BK_Nutrition.md", ["subtitle"] : "FastAPI \ud504\ub808\uc784\uc6cc\ud06c \uc0ac\uc6a9\uae30", ["description"] : "FastAPI \ub97c \uc774\uc6a9\ud55c \ubc31\uc5d4\ub4dc API \uc640 Jinja Template \uc744 \uc774\uc6a9\ud55c \uad00\ub9ac\uc790 \ud398\uc774\uc9c0 \uac1c\ubc1c", ["date"] : "2023.02 ~  2023.03", ["completed"] : true }), ({ ["title"] : "AWS CDK \ub97c \uc0ac\uc6a9\ud55c \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378 \ubc30\ud3ec", ["filename"] : "CDK_ML.md", ["subtitle"] : "AWS CDK - Lambda Function", ["description"] : "\ud30c\uc774\uc36c CDK \ub97c \uc774\uc6a9\ud558\uc5ec AWS \ub9ac\uc18c\uc2a4 \uc0dd\uc131\ud558\uace0 \uad00\ub9ac\ud558\uae30", ["date"] : "2023.02", ["completed"] : true }), ({ ["title"] : "\ub204\uad6c\ub098 \uac04\ud3b8\ud558\uac8c, PinTalk", ["filename"] : "PinTalk.md", ["subtitle"] : "Django Channels, \uc18c\ucf13 \ud1b5\uc2e0 \uc785\ubb38", ["description"] : "\ucc44\ub110\ud1a1\uc744 \ubca4\uce58\ub9c8\ud0b9\ud55c \uac04\ud3b8\ud55c \ucc44\ud305 \uc11c\ube44\uc2a4", ["date"] : "2023.01 ~ 2023.04", ["completed"] : true }), ({ ["title"] : "\uc6b0\ub9ac\uc758 \uc2dc\uac04\uc744 \uc18c\uc911\ud558\uac8c, BisTime", ["filename"] : "BisTime.md", ["subtitle"] : "\ube44\ub294 \uc2dc\uac04\uc774 \uc5b8\uc81c\uc778\uac00\uc694?", ["description"] : "\ubaa8\uc784 \uc2dc\uac04\uc744 \ub611\ub611\ud558\uac8c, \uac04\ub2e8\ud55c \ubaa8\uc784\ubd80\ud130 \ud300\uc758 \ud6a8\uc728\uc801\uc778 \uc77c\uc815 \uad00\ub9ac\uae4c\uc9c0 \ucc45\uc784\uc9d1\ub2c8\ub2e4!", ["date"] : "2023.01 ~", ["completed"] : true }), ({ ["title"] : "Fruit Ninja 3D", ["filename"] : "FruitNinja.md", ["subtitle"] : "Unity \ub85c \ubc30\uc6b0\ub294 C# 2", ["description"] : "Fruit Ninja \uac8c\uc784\uc744 \ubca4\uce58\ub9c8\ud0b9\ud55c 3D Hand Recognition \ubc84\uc804\uc758 \uc0c8\ub85c\uc6b4 3D \uac8c\uc784", ["date"] : "2022.12", ["completed"] : true }), ({ ["title"] : "Space Gem", ["filename"] : "SpaceGem.md", ["subtitle"] : "Unity \ub85c \ubc30\uc6b0\ub294 C#", ["description"] : "C# \uacfc \uc720\ub2c8\ud2f0\ub85c \ub9cc\ub4e4\uc5b4\ubcf4\ub294 \ub808\ud2b8\ub85c \uce90\uc8fc\uc5bc \uac8c\uc784 Space Gem", ["date"] : "2022.10", ["completed"] : true }), ({ ["title"] : "ICAAN \ud504\ub85c\uc81d\ud2b8\uc758 SW \uc5f0\uad6c\uc6d0", ["filename"] : "ICAAN.md", ["subtitle"] : "\uc124\uacc4\ubd80\ud130 \ubc30\ud3ec\uae4c\uc9c0, React + Node.js + MongoAtlas", ["description"] : "\uc9c8\ubcd1\uad00\ub9ac\uccad \uad6d\ub9bd\ubcf4\uac74\uc5f0\uad6c\uc6d0 \uc8fc\uad00 ICAAN \ud504\ub85c\uc81d\ud2b8\uc758 \uc5b4\ub4dc\ubbfc \ud398\uc774\uc9c0\uc640 \ud53c\ud5d8\uc790 \uc6f9\uc571 \uad6c\ud604", ["date"] : "2022.05 ~ 2022.12", ["completed"] : true }), ({ ["title"] : "\ub300\ud559\uc0dd\ub4e4\uc758 \ub9c1\ud06c\ub4dc\uc778, \uadf8 \uccab\uac78\uc74c Groovy", ["filename"] : "Groovy.md", ["subtitle"] : "DRF \ub85c \uc2dc\uc791\ud558\ub294 \ubc31\uc5d4\ub4dc \uac1c\ubc1c", ["description"] : "\ub2e4\ub4e4 \ubb50\ud558\uace0 \uc0b4\uc9c0...? \ub300\ud559\uc0dd\ub4e4\uc740 \ub808\ud37c\ub7f0\uc2a4\uac00 \ubd80\uc871\ud574! \uc9c4\ub85c\uc5d0 \ub300\ud574 \uace0\ubbfc\ud558\ub294 \uc0c8\ub85c\uc6b4 \ubc29\ubc95\uc744 \uc81c\uc2dc\ud558\ub2e4", ["date"] : "2022.01 ~ 2022.06", ["completed"] : true }), ({ ["title"] : "\uac1c\ubc1c\uc790\uc758 \uae38\uc774 \uc5f4\ub9ac\ub2e4, Bruteforce", ["filename"] : "Bruteforce.md", ["subtitle"] : "Django \ub85c \uc2dc\uc791\ud55c \uc6f9\ud480\uc2a4\ud0dd \uac1c\ubc1c", ["description"] : "\ucf54\ub529 \ud559\uc2b5\uc758 \uc9c4\uc785 \uc7a5\ubcbd\uc744 \ub0ae\ucd94\uae30 \uc704\ud55c \uad50\uc721 \uc0ac\uc5c5 Bruteforce, \ub354\ubd88\uc5b4 \uacf5\ubd80\ud558\ub294 \ud798\uc744 \ub418\uc0b4\ub9ac\ub2e4", ["date"] : "2021.07 ~ 2021.12", ["completed"] : true })].map((data, index_f1e934364325fbb1) => (
  <RadixThemesCard css={({ ["padding"] : "10px", ["backgroundColor"] : "#393939", ["boxShadow"] : "0px 4px 8px 5px rgba(0, 0, 0, 0.1)", ["width"] : "100%", ["position"] : "relative" })} key={index_f1e934364325fbb1}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"1"}>
  <RadixThemesFlex css={({ ["width"] : "100%", ["flexWrap"] : "wrap" })} direction={"row"} justify={"between"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "#4CCCE6" })} size={"4"}>
  {data["title"]}
</RadixThemesHeading>
  <RadixThemesBadge>
  {data["date"]}
</RadixThemesBadge>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>
  <RadixThemesStrong css={({ ["fontSize"] : "0.8em" })}>
  {data["subtitle"]}
</RadixThemesStrong>
  <RadixThemesText as={"p"} css={({ ["fontSize"] : "0.9em" })}>
  {data["description"]}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesBox css={({ ["position"] : "absolute", ["right"] : "20px", ["bottom"] : "10px" })}>
  <Fragment>
  {isTrue(data["completed"]) ? (
  <Fragment>
  <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>
  <NextLink href={("https://github.com/EarthlyZ9/projects/blob/main/"+data["filename"])} passHref={true}>
  <LucideMoveRightIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>
</NextLink>
</RadixThemesLink>
</Fragment>
) : (
  <Fragment>
  <RadixThemesButton disabled={true}>
  {"In Progress"}
</RadixThemesButton>
</Fragment>
)}
</Fragment>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesCard>
))}</>
</RadixThemesFlex>
</RadixThemesFlex>;
                break;
                case JSON.stringify(4):
                return <RadixThemesFlex align={"start"} css={({ ["@media screen and (min-width: 0)"] : ({ ["margin"] : "10px" }), ["@media screen and (min-width: 550px)"] : ({ ["margin"] : "10px" }), ["@media screen and (min-width: 48em)"] : ({ ["margin"] : "10px" }), ["@media screen and (min-width: 62em)"] : ({ ["margin"] : "30px" }), ["@media screen and (min-width: 80em)"] : ({ ["margin"] : "30px" }) })} direction={"column"} gap={"3"}>
  <RadixThemesHeading size={"8"}>
  {"Blog"}
</RadixThemesHeading>
  <RadixThemesSeparator css={({ ["width"] : "50px", ["height"] : "5px", ["borderRadius"] : "5px", ["background"] : "linear-gradient(to right, skyblue, color(display-p3 0.49 0.72 1))" })} size={"4"}/>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} justify={"center"} gap={"3"}>
  <RadixThemesFlex css={({ ["width"] : "100%" })} justify={"between"}>
  <RadixThemesText as={"p"} size={"2"}>
  {"\uac1c\ubc1c \uad00\ub828 \uc0dd\uac01\uc774\ub098 \uacf5\ubd80\ud55c \ub0b4\uc6a9\uc744 \uae30\ub85d\ud569\ub2c8\ub2e4."}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesSeparator css={({ ["width"] : "95%" })} size={"4"}/>
  <RadixThemesFlex css={({ ["width"] : "100%" })} justify={"between"}>
  <RadixThemesFlex>
  <RadixThemesHeading size={"4"}>
  {"Recent Posts"}
</RadixThemesHeading>
  <RadixThemesTooltip content={"Visit Blog"}>
  <RadixThemesLink asChild={true} css={({ ["marginLeft"] : "10px", ["alignContent"] : "center", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>
  <NextLink href={"https://notion.earthlyz9.dev"} passHref={true}>
  <LucideArrowRightIcon css={({ ["color"] : "var(--current-color)" })} size={15}/>
</NextLink>
</RadixThemesLink>
</RadixThemesTooltip>
</RadixThemesFlex>
  <RadixThemesText as={"p"} css={({ ["fontSize"] : "0.6rem" })}>
  {("count: "+reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state.fetched_items)}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesSelect.Root defaultValue={"\uac1c\ubc1c\uc0dd\uac01"} onValueChange={((_e0) => ((addEvents([(Event("reflex___state____state.dev_portfolio_reflex___sections___blog____post_data_state.set_data_type", ({ ["data_type"] : _e0 })))], [_e0], ({  })))))}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {""}
  <>{Object.keys(reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state.NOTION_DATABASE_IDS).map((item, index_9c31de18063adc4c) => (
  <RadixThemesSelect.Item key={index_9c31de18063adc4c} value={item}>
  {item}
</RadixThemesSelect.Item>
))}</>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesTable.Root css={({ ["width"] : "100%" })}>
  <RadixThemesTable.Header>
  <RadixThemesTable.Row>
  <RadixThemesTable.ColumnHeaderCell>
  {"Title"}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {"Tags"}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {"Created"}
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <RadixThemesTable.Body>
  <>{reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state.data.map((item, index_28ff11c0ea7d2675) => (
  <RadixThemesTable.Row key={index_28ff11c0ea7d2675}>
  <RadixThemesTable.Cell>
  <RadixThemesLink asChild={true} css={({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>
  <NextLink href={item["public_url"]} passHref={true}>
  <RadixThemesFlex align={"baseline"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <Fragment>
  {isTrue(item["emoji"]) ? (
  <Fragment>
  <RadixThemesText as={"p"} css={({ ["fontSize"] : "0.8rem" })}>
  {item["emoji"]}
</RadixThemesText>
</Fragment>
) : (
  <Fragment>
  <img css={({ ["width"] : "auto", ["height"] : "0.8rem" })} src={item["external_img"]}/>
</Fragment>
)}
</Fragment>
  <RadixThemesText as={"p"} css={({ ["fontSize"] : "0.8rem" })}>
  {item["title"]}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <Fragment>
  {isTrue(item["tags"]) ? (
  <Fragment>
  <>{item["tags"].map((tag, index_f6e80ad844bc5c11) => (
  <RadixThemesBadge css={({ ["color"] : item["tag_color"] })} key={index_f6e80ad844bc5c11}>
  {tag}
</RadixThemesBadge>
))}</>
</Fragment>
) : (
  <Fragment>
  <RadixThemesText as={"p"}>
  {"-"}
</RadixThemesText>
</Fragment>
)}
</Fragment>
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  {item["created"]}
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
))}</>
  <Fragment>
  {isTrue(reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state.has_more) ? (
  <Fragment>
  <RadixThemesTable.Row>
  <RadixThemesTable.Cell css={({ ["boxShadow"] : "none" })}>
  <RadixThemesText as={"p"} css={({ ["&:hover"] : ({ ["textDecoration"] : "underline", ["cursor"] : "pointer" }) })} onClick={((...args) => ((addEvents([(Event("reflex___state____state.dev_portfolio_reflex___sections___blog____post_data_state.next_page", ({  })))], args, ({  })))))}>
  {"Load More"}
</RadixThemesText>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
</RadixThemesTable.Body>
</RadixThemesTable.Root>
</RadixThemesFlex>
</RadixThemesFlex>;
                break;
            default:
                return <Fragment/>;
                break;
        }
    })()
  }
</Fragment>
  )
}

export default function Component() {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
    const logFrontendError = (error, info) => {
        if (process.env.NODE_ENV === "production") {
            addEvents([Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", {
                stack: error.stack,
            })])
        }
    }
    

  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={logFrontendError}>
  <Fragment>
  <Div_88fb5840144af87827db7f22a493c318/>
  <Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d/>
</Fragment>
  <RadixThemesFlex>
  <RadixThemesBox css={({ ["margin"] : "2rem 2rem", ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 550px)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>
  <RadixThemesFlex align={"start"} direction={"row"}>
  <RadixThemesFlex align={"start"} css={({ ["width"] : "280px", ["height"] : "90vh" })} justify={"center"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["padding"] : "4rem 1rem", ["height"] : "100%", ["width"] : "280px", ["backgroundColor"] : "#404040", ["borderRadius"] : "30px", ["justifyContent"] : "start" })} direction={"column"} justify={"center"} gap={"5"}>
  <RadixThemesAvatar css={({ ["alt"] : "profile image" })} fallback={"JS"} size={"8"} src={"avatar.png"}/>
  <RadixThemesHeading size={"8"}>
  {"EarthlyZ9 Dev"}
</RadixThemesHeading>
  <RadixThemesBadge color={"blue"} css={({ ["padding"] : "5px 10px", ["fontWeigh"] : "bold" })} radius={"large"} size={"3"} variant={"soft"}>
  {"Backend Developer"}
</RadixThemesBadge>
  <RadixThemesFlex direction={"row"} gap={"5"}>
  <Link_d2884dceabb079de7ab3048c12060a61/>
  <Link_76e99daec78d2dd0f357ce80ebfd5ed3/>
  <Link_8badcea52e96c2b2ffc115478db73862/>
</RadixThemesFlex>
  <RadixThemesSeparator css={({ ["width"] : "80%" })} size={"4"}/>
  <RadixThemesFlex align={"start"} direction={"column"} gap={"5"}>
  <RadixThemesFlex align={"center"} css={({ ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["width"] : "100%" })} direction={"row"} justify={"start"}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideMailIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesFlex direction={"column"} justify={"center"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "300" })} size={"1"}>
  {"STATUS"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "white" })} size={"2"}>
  {"Working \ud83d\udcbb"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["width"] : "100%" })} direction={"row"} justify={"start"}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideMailIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesFlex direction={"column"} justify={"center"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "300" })} size={"1"}>
  {"EMAIL"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "white" })} size={"2"}>
  {"earthlyz9.dev@gmail.com"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["width"] : "100%" })} direction={"row"} justify={"start"}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideMapPinIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesFlex direction={"column"} justify={"center"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "300" })} size={"1"}>
  {"ADDRESS"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "white" })} size={"2"}>
  {"Gwangjin-gu, Seoul"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["width"] : "100%" })} direction={"row"} justify={"start"}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideCalendarDaysIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesFlex direction={"column"} justify={"center"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "300" })} size={"1"}>
  {"BIRTH"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "white" })} size={"2"}>
  {"JULY 29, 2000"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["marginLeft"] : "30px", ["height"] : "90vh", ["width"] : "100%" })} justify={"center"}>
  <RadixThemesBox css={({ ["height"] : "100%", ["width"] : "100%", ["backgroundColor"] : "#404040", ["borderRadius"] : "30px", ["position"] : "relative", ["padding"] : "1rem 1rem 2rem 1rem", ["overflowX"] : "hidden" })}>
  <RadixThemesFlex css={({ ["width"] : "100%", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "1000" })} justify={"center"}>
  <RadixThemesFlex align={"center"} css={({ ["backgroundColor"] : "#333", ["padding"] : "5px", ["borderRadius"] : "5px", ["boxShadow"] : "6px 13px 38px rgba(0, 0, 0, 0.30), 5px 4px 10px rgba(0, 0, 0, 0.22)" })} direction={"row"} justify={"between"}>
  <Button_46ece4233785da0c26fa7a45eeb6d958/>
  <Button_59ac2f63a7c1cfdad67a4222a5ac1ac7/>
  <Button_c266b2040839ddce8d896393297bf6b3/>
  <Button_7822c9cf5e053f9bb1ef016f445d36fb/>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment_e77a8ac322b05277ef65f99a121d71f5/>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%", ["padding"] : "6px", ["position"] : "fixed", ["bottom"] : "0rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20" })}>
  <Link_4814c75bf37e5f2de95834dc2ca1d866/>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={({ ["width"] : "100%", ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 550px)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>
  <RadixThemesFlex align={"start"} css={({ ["overflow"] : "hidden", ["margin"] : "2rem", ["height"] : "calc(100vh - 4rem)" })} direction={"column"}>
  <RadixThemesFlex align={"start"} css={({ ["width"] : "100%", ["height"] : "300px", ["flexShrink"] : "0" })} justify={"center"}>
  <RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["padding"] : "2rem 3rem", ["alignItems"] : "start", ["height"] : "100%", ["backgroundColor"] : "#404040", ["borderRadius"] : "30px", ["justifyContent"] : "start", ["width"] : "100%" })} direction={"column"} gap={"2"}>
  <RadixThemesFlex css={({ ["flex"] : "1", ["width"] : "100%" })} direction={"column"}>
  <RadixThemesFlex>
  <RadixThemesAvatar css={({ ["alt"] : "profile image" })} fallback={"JS"} size={"5"} src={"avatar.png"}/>
  <RadixThemesFlex css={({ ["marginLeft"] : "1rem" })} direction={"column"}>
  <RadixThemesHeading size={"8"}>
  {"EarthlyZ9 Dev"}
</RadixThemesHeading>
  <RadixThemesBadge color={"blue"} css={({ ["padding"] : "5px 10px", ["fontWeigh"] : "bold", ["width"] : "fit-content" })} radius={"large"} variant={"soft"}>
  {"Backend Developer"}
</RadixThemesBadge>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["margin"] : "20px 0" })} direction={"row"} gap={"5"}>
  <Link_d2884dceabb079de7ab3048c12060a61/>
  <Link_76e99daec78d2dd0f357ce80ebfd5ed3/>
  <Link_8badcea52e96c2b2ffc115478db73862/>
</RadixThemesFlex>
  <RadixThemesSeparator css={({ ["width"] : "100%" })} size={"4"}/>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} css={({ ["width"] : "100%" })} direction={"row"} gap={"5"}>
  <RadixThemesFlex css={({ ["height"] : "100%", ["flex"] : "1" })} justify={"between"}>
  <RadixThemesFlex css={({ ["padding"] : "10px 0", ["width"] : "45%" })} direction={"column"} justify={"between"}>
  <RadixThemesFlex align={"center"} css={({ ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["minWidth"] : "100px" })} direction={"row"} justify={"start"}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideMailIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesFlex direction={"column"} justify={"center"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "300" })} size={"1"}>
  {"STATUS"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "white" })} size={"2"}>
  {"Working \ud83d\udcbb"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["minWidth"] : "100px" })} direction={"row"} justify={"start"}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideMailIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesFlex direction={"column"} justify={"center"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "300" })} size={"1"}>
  {"EMAIL"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "white" })} size={"2"}>
  {"earthlyz9.dev@gmail.com"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["padding"] : "10px 0", ["width"] : "45%" })} direction={"column"} justify={"between"}>
  <RadixThemesFlex align={"center"} css={({ ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["minWidth"] : "100px" })} direction={"row"} justify={"start"}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideMapPinIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesFlex direction={"column"} justify={"center"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "300" })} size={"1"}>
  {"ADDRESS"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "white" })} size={"2"}>
  {"Gwangjin-gu, Seoul"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["minWidth"] : "100px" })} direction={"row"} justify={"start"}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideCalendarDaysIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesFlex direction={"column"} justify={"center"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "300" })} size={"1"}>
  {"BIRTH"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "white" })} size={"2"}>
  {"JULY 29, 2000"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["width"] : "100%", ["flex"] : "1", ["overflowY"] : "auto", ["marginTop"] : "1rem" })} justify={"center"}>
  <RadixThemesBox css={({ ["height"] : "100%", ["width"] : "100%", ["backgroundColor"] : "#404040", ["borderRadius"] : "30px", ["position"] : "relative", ["padding"] : "1rem 1rem 2rem 1rem", ["overflowX"] : "hidden" })}>
  <RadixThemesFlex css={({ ["width"] : "100%", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "1000" })} justify={"center"}>
  <RadixThemesFlex align={"center"} css={({ ["backgroundColor"] : "#333", ["padding"] : "5px", ["borderRadius"] : "5px", ["boxShadow"] : "6px 13px 38px rgba(0, 0, 0, 0.30), 5px 4px 10px rgba(0, 0, 0, 0.22)" })} direction={"row"} justify={"between"}>
  <Button_46ece4233785da0c26fa7a45eeb6d958/>
  <Button_59ac2f63a7c1cfdad67a4222a5ac1ac7/>
  <Button_c266b2040839ddce8d896393297bf6b3/>
  <Button_7822c9cf5e053f9bb1ef016f445d36fb/>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment_e77a8ac322b05277ef65f99a121d71f5/>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 550px)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>
  <RadixThemesFlex align={"start"} css={({ ["overflow"] : "hidden", ["margin"] : "1rem", ["height"] : "calc(100vh - 4rem)" })} direction={"column"}>
  <RadixThemesFlex align={"start"} css={({ ["width"] : "100%", ["flexShrink"] : "0" })} justify={"center"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>
  <RadixAccordionRoot collapsible={true} css={({ ["borderRadius"] : "var(--radius-4)", ["boxShadow"] : "0 2px 10px var(--black-a1)", ["&[data-variant='classic']"] : ({ ["backgroundColor"] : "var(--accent-9)", ["boxShadow"] : "0 2px 10px var(--black-a4)" }), ["&[data-variant='soft']"] : ({ ["backgroundColor"] : "var(--accent-3)" }), ["&[data-variant='outline']"] : ({ ["border"] : "1px solid var(--accent-6)", ["--divider-px"] : "1px" }), ["&[data-variant='surface']"] : ({ ["border"] : "1px solid var(--accent-6)", ["backgroundColor"] : "var(--accent-surface)", ["--divider-px"] : "1px" }), ["&[data-variant='ghost']"] : ({ ["backgroundColor"] : "none", ["boxShadow"] : "None" }), ["--animation-duration"] : (250+"ms"), ["--animation-easing"] : "cubic-bezier(0.87, 0, 0.13, 1)", ["backgroundColor"] : "#404040 !important", ["width"] : "100%" })} data-variant={"classic"} defaultValue={"1"}>
  <RadixAccordionItem className={"AccordionItem"} css={({ ["overflow"] : "hidden", ["width"] : "100%", ["marginTop"] : "1px", ["borderTop"] : "var(--divider-px) solid var(--gray-a6)", ["&:first-child"] : ({ ["marginTop"] : 0, ["borderTop"] : 0, ["borderTopLeftRadius"] : "var(--radius-4)", ["borderTopRightRadius"] : "var(--radius-4)" }), ["&:last-child"] : ({ ["borderBottomLeftRadius"] : "var(--radius-4)", ["borderBottomRightRadius"] : "var(--radius-4)" }), ["&:focus-within"] : ({ ["position"] : "relative", ["zIndex"] : 1 }), ["&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child"] : ({ ["borderRadius"] : 0, ["borderTop"] : "var(--divider-px) solid var(--gray-a6)" }), ["&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child"] : ({ ["borderRadius"] : 0, ["borderBottom"] : "var(--divider-px) solid var(--gray-a6)" }) })} value={"1"}>
  <RadixAccordionHeader className={"AccordionHeader"} css={({ ["display"] : "flex" })}>
  <RadixAccordionTrigger className={"AccordionTrigger"} css={({ ["color"] : "var(--accent-11)", ["fontSize"] : "1.1em", ["lineHeight"] : 1, ["justifyContent"] : "space-between", ["alignItems"] : "center", ["flex"] : 1, ["display"] : "flex", ["padding"] : "var(--space-3) var(--space-4)", ["width"] : "100%", ["boxShadow"] : "0 var(--divider-px) 0 var(--gray-a6)", ["&[data-state='open'] > .AccordionChevron"] : ({ ["transform"] : "rotate(180deg)" }), ["&:hover"] : ({ ["backgroundColor"] : "var(--accent-4)" }), ["& > .AccordionChevron"] : ({ ["transition"] : "transform var(--animation-duration) var(--animation-easing)" }), ["&[data-variant='classic'], *:where([data-variant='classic']) &"] : ({ ["color"] : "var(--accent-contrast)", ["&:hover"] : ({ ["backgroundColor"] : "var(--accent-10)" }), ["& > .AccordionChevron"] : ({ ["color"] : "var(--accent-contrast)" }) }) })}>
  <RadixThemesFlex css={({ ["flex"] : "1", ["width"] : "100%", ["&:hover"] : ({ ["backgroundColor"] : "#404040 !important" }) })} direction={"column"}>
  <RadixThemesFlex>
  <RadixThemesAvatar css={({ ["alt"] : "profile image" })} fallback={"JS"} radius={"small"} size={"4"} src={"avatar.png"}/>
  <RadixThemesFlex css={({ ["marginLeft"] : "1rem" })} direction={"column"}>
  <RadixThemesHeading size={"5"}>
  {"EarthlyZ9 Dev"}
</RadixThemesHeading>
  <RadixThemesBadge color={"blue"} css={({ ["padding"] : "2px 4px", ["fontWeigh"] : "bold", ["width"] : "fit-content" })} radius={"large"} size={"1"} variant={"soft"}>
  {"Backend Developer"}
</RadixThemesBadge>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={({ ["margin"] : "20px 0" })} direction={"row"} justify={"center"} gap={"5"}>
  <Link_d2884dceabb079de7ab3048c12060a61/>
  <Link_76e99daec78d2dd0f357ce80ebfd5ed3/>
  <Link_8badcea52e96c2b2ffc115478db73862/>
</RadixThemesFlex>
</RadixThemesFlex>
  <LucideChevronDownIcon className={"AccordionChevron"} css={({ ["color"] : "var(--current-color)" })}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={"AccordionContent"} css={({ ["overflow"] : "hidden", ["color"] : "var(--accent-11)", ["paddingInlineStart"] : "var(--space-4)", ["paddingInlineEnd"] : "var(--space-4)", ["&:before, &:after"] : ({ ["content"] : "' '", ["display"] : "block", ["height"] : "var(--space-3)" }), ["&[data-state='open']"] : ({ ["animation"] : "${slideDown} var(--animation-duration) var(--animation-easing)" }), ["&[data-state='closed']"] : ({ ["animation"] : "${slideUp} var(--animation-duration) var(--animation-easing)" }), ["&[data-variant='classic'], *:where([data-variant='classic']) &"] : ({ ["color"] : "var(--accent-contrast)" }) })}>
  <RadixThemesFlex align={"start"} css={({ ["overflowY"] : "hidden" })} direction={"column"} gap={"5"}>
  <RadixThemesFlex align={"center"} css={({ ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["width"] : "100%" })} direction={"row"} justify={"start"}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideMailIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesFlex direction={"column"} justify={"center"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "300" })} size={"1"}>
  {"STATUS"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "white" })} size={"2"}>
  {"Working \ud83d\udcbb"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["width"] : "100%" })} direction={"row"} justify={"start"}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideMailIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesFlex direction={"column"} justify={"center"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "300" })} size={"1"}>
  {"EMAIL"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "white" })} size={"2"}>
  {"earthlyz9.dev@gmail.com"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["width"] : "100%" })} direction={"row"} justify={"start"}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideMapPinIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesFlex direction={"column"} justify={"center"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "300" })} size={"1"}>
  {"ADDRESS"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "white" })} size={"2"}>
  {"Gwangjin-gu, Seoul"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["padding"] : "3px", ["gap"] : "10px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["backgroundColor"] : "#393939" }), ["width"] : "100%" })} direction={"row"} justify={"start"}>
  <RadixThemesCard css={({ ["width"] : "40px", ["height"] : "40px", ["alignItems"] : "center" })}>
  <LucideCalendarDaysIcon css={({ ["color"] : "color(display-p3 0.49 0.72 1)", ["width"] : "100%", ["height"] : "100%" })}/>
</RadixThemesCard>
  <RadixThemesFlex direction={"column"} justify={"center"}>
  <RadixThemesHeading css={({ ["fontWeight"] : "300" })} size={"1"}>
  {"BIRTH"}
</RadixThemesHeading>
  <RadixThemesHeading css={({ ["fontWeight"] : "500", ["color"] : "white" })} size={"2"}>
  {"JULY 29, 2000"}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixAccordionContent>
</RadixAccordionItem>
</RadixAccordionRoot>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={"center"} css={({ ["width"] : "100%", ["flex"] : "1", ["overflowY"] : "auto", ["marginTop"] : "1rem" })} justify={"center"}>
  <RadixThemesBox css={({ ["height"] : "100%", ["width"] : "100%", ["backgroundColor"] : "#404040", ["borderRadius"] : "30px", ["position"] : "relative", ["padding"] : "1rem 1rem 2rem 1rem", ["overflowX"] : "hidden" })}>
  <RadixThemesFlex css={({ ["width"] : "100%", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "1000" })} justify={"center"}>
  <RadixThemesFlex align={"center"} css={({ ["backgroundColor"] : "#333", ["padding"] : "5px", ["borderRadius"] : "5px", ["boxShadow"] : "6px 13px 38px rgba(0, 0, 0, 0.30), 5px 4px 10px rgba(0, 0, 0, 0.22)" })} direction={"row"} justify={"between"}>
  <Button_46ece4233785da0c26fa7a45eeb6d958/>
  <Button_59ac2f63a7c1cfdad67a4222a5ac1ac7/>
  <Button_c266b2040839ddce8d896393297bf6b3/>
  <Button_7822c9cf5e053f9bb1ef016f445d36fb/>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment_e77a8ac322b05277ef65f99a121d71f5/>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
  <NextHead>
  <title>
  {"EarthlyZ9 Dev"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}
