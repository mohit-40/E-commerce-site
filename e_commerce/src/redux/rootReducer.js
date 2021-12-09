import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer"
import userReducer from "./User/userReducer"

const rootReducer = combineReducers({
	cart : cartReducer,
	user: userReducer

})
export default rootReducer;