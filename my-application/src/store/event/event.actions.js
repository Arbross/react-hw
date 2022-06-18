import { EVENT_ACTION_TYPES } from "./event.types";

export const clearEvent = () => ({ type: EVENT_ACTION_TYPES.CLEAR_USERNAME });

export const addEvent = (event) => ({ type: EVENT_ACTION_TYPES.ADD_EVENTS, payload: event });
export const addFavorite = () => ({ type: EVENT_ACTION_TYPES.ADD_FAVORITE });
export const removeEvent = (event) => ({ type: EVENT_ACTION_TYPES.REMOVE_EVENTS, payload: event });
