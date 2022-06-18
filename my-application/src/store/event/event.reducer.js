import { EVENT_ACTION_TYPES } from "./event.types";

const INITIAL_STATE = {
    events: [
        {
            id: 0,
            name: "Birthday",
            description: "Just a birthday ;D",
            category: "Holiday"
        }
    ],
    length: 1
}

export const eventReducer = (state = INITIAL_STATE, action = {}) => {
    // type - type of the action
    // payload - data to do the aciton
    const { type, payload } = action;

    switch (type) {
        case EVENT_ACTION_TYPES.CLEAR_EVENT:
            return {
                ...state,
                events: []
            };
        case EVENT_ACTION_TYPES.SET_EVENT:
            return { ...state, events: payload };
        case EVENT_ACTION_TYPES.ADD_EVENTS:
            return {
                events: [...state.events, payload],
                length: state.length+1
            };
        case EVENT_ACTION_TYPES.ADD_FAVORITE:
            return {
                ...state,
                length: state.length+1
            };
        case EVENT_ACTION_TYPES.REMOVE_EVENTS:
            let array = [];
            state.events.map((item) => {
                if (item.name == payload.name)
                {
                    array.push(item);
                }
            });
            return { events: array, length: state.length != 0 ? state.length-1 : state.length };
        default:
            return state;
    }
}