import { createStore, applyMiddleware, combineReducers } from "redux"
import countReducer from "./reducers/count"
import personReducer from "./reducers/person"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

//汇总所有的reducer
const allReducers = combineReducers({
    count: countReducer,
    person: personReducer
})

export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))