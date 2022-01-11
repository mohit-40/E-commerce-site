import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer"
import userReducer from "./User/userReducer"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import wishListReducer from "./wishList/wishListReducer";

const persistConfig = {
	key:'root',
	storage, 
	whitelist:["user","cart" , "wishList"]
}

const rootReducer = combineReducers({
	cart : cartReducer,
	user: userReducer,
	wishList :wishListReducer
})

export default persistReducer( persistConfig ,rootReducer);