// import { createContext, useReducer } from "react";

// export const EventContext = createContext({
//     events: [], 
//     length: 0,
//     setEvent: () => null, // setter
//     clearEvent: () => null
//     // other data ...
// });

// const INITIAL_STATE = {
//     events: [],
//     length: 0
// }

// const EVENT_ACTION_TYPES = {
//     CLEAR_EVENT: 'CLEAR_EVENT',
//     SET_EVENT: 'SET_EVENT',
//     ADD_EVENTS: 'ADD_EVENTS',
// };

// const eventReducer = (state, action) => {
//     // type - type of the action
//     // payload - data to do the aciton
//     const { type, payload } = action;

//     switch (type) {
//         case EVENT_ACTION_TYPES.CLEAR_EVENT:
//             return {
//                 ...state,
//                 events: []
//             };
//         case EVENT_ACTION_TYPES.SET_EVENT:
//             return { ...state, events: payload };
//         case EVENT_ACTION_TYPES.ADD_EVENTS:
//             return {
//                 events: [...state.events, payload],
//                 length: state.length+1
//             };
//         default:
//             throw new Error('Invalid action type');
//     }
// }

// export const EventProvider = ({ children }) => {
//     const [{ events, length }, dispatch] = useReducer(eventReducer, INITIAL_STATE);

//     // action realizations
//     const clearEvents = () => {
//         dispatch({ type: EVENT_ACTION_TYPES.CLEAR_EVENT });
//     }
//     const addEvent = (event) => {
//         dispatch({ type: EVENT_ACTION_TYPES.ADD_EVENTS, payload: event });
//     }

//     const value = { events, length, addEvent, clearEvents };

//     return <EventContext.Provider value={value}>{children}</EventContext.Provider>
// }