import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"reflex___state____state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.dev_portfolio_reflex___layouts___navbar____nav_button_state": {"active_button": 1}, "reflex___state____state.dev_portfolio_reflex___sections___blog____post_data_state": {"CUSTOM_FILTER": {"Web": {"property": "Tags", "multi_select": {"contains": "Web"}}, "CS": {"property": "Tags", "multi_select": {"contains": "CS"}}}, "NOTION_DATABASE_IDS": {"개발생각": "23645d879faa4dcfad43945f0b3dad32", "Fluent Python": "eb500ba0c7e143748cade86de85948c6", "Web": "c1febf8570564c5faafe92b32fa85d33", "CS": "c1febf8570564c5faafe92b32fa85d33"}, "PAGE_SIZE": 10, "data": [], "data_type": "개발생각", "fetched_items": 0, "has_more": true, "start_cursor": null}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.dev_portfolio_reflex___dev_portfolio_reflex____state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}}

export const defaultColorMode = "dark"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
  reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state: createContext(null),
  reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__dev_portfolio_reflex___dev_portfolio_reflex____state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// Theses events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export const lastCompiledTimeStamp = "2024-10-05 08:00:45.191382"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const [reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state, dispatch_reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state] = useReducer(applyDelta, initialState["reflex___state____state.dev_portfolio_reflex___layouts___navbar____nav_button_state"])
  const [reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state, dispatch_reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state] = useReducer(applyDelta, initialState["reflex___state____state.dev_portfolio_reflex___sections___blog____post_data_state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__dev_portfolio_reflex___dev_portfolio_reflex____state, dispatch_reflex___state____state__dev_portfolio_reflex___dev_portfolio_reflex____state] = useReducer(applyDelta, initialState["reflex___state____state.dev_portfolio_reflex___dev_portfolio_reflex____state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
      "reflex___state____state.dev_portfolio_reflex___layouts___navbar____nav_button_state": dispatch_reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state,
      "reflex___state____state.dev_portfolio_reflex___sections___blog____post_data_state": dispatch_reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.dev_portfolio_reflex___dev_portfolio_reflex____state": dispatch_reflex___state____state__dev_portfolio_reflex___dev_portfolio_reflex____state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
    }
  }, [])

  return (
    <StateContexts.reflex___state____state.Provider value={ reflex___state____state }>
    <StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider value={ reflex___state____state__reflex___state____frontend_event_exception_state }>
    <StateContexts.reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state.Provider value={ reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state }>
    <StateContexts.reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state.Provider value={ reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state }>
    <StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider value={ reflex___state____state__reflex___state____on_load_internal_state }>
    <StateContexts.reflex___state____state__dev_portfolio_reflex___dev_portfolio_reflex____state.Provider value={ reflex___state____state__dev_portfolio_reflex___dev_portfolio_reflex____state }>
    <StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider value={ reflex___state____state__reflex___state____update_vars_internal_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider>
    </StateContexts.reflex___state____state__dev_portfolio_reflex___dev_portfolio_reflex____state.Provider>
    </StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider>
    </StateContexts.reflex___state____state__dev_portfolio_reflex___sections___blog____post_data_state.Provider>
    </StateContexts.reflex___state____state__dev_portfolio_reflex___layouts___navbar____nav_button_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider>
    </StateContexts.reflex___state____state.Provider>
  )
}