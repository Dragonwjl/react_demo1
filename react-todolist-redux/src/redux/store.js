import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import footerReducer from "./reducers/footer"
import headerReducer from "./reducers/header"
import tableReducer from "./reducers/table"

const allReducers = combineReducers({
     header: headerReducer,
     footer: footerReducer,
     table: tableReducer

})

export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))