import { combineReducers } from 'redux'
import { eventReducer } from './event/event.reducer'

export const rootReducer = combineReducers({
    event: eventReducer
    // ...other reducers
});