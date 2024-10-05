/** @jsxImportSource @emotion/react */


import { Fragment, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import Error from "next/error"
import { useClientSideRouting } from "/utils/client_side_routing"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Div_88fb5840144af87827db7f22a493c318 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_a863e98a4e31dca34182756564a2b4b7/>
</div>
  )
}

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

export default function Component() {
  const routeNotFound = useClientSideRouting()

  return (
    <Fragment>
  <Fragment>
  <Div_88fb5840144af87827db7f22a493c318/>
  <Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d/>
</Fragment>
  <Fragment>
  {isTrue(routeNotFound) ? (
  <Fragment>
  <Error statusCode={404}/>
</Fragment>
) : (
  <Fragment>
  
</Fragment>
)}
</Fragment>
  <NextHead>
  <title>
  {"404 - Not Found"}
</title>
  <meta content={"The page was not found"} name={"description"}/>
  <meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
