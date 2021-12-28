import { ADD_ITEM , DELETE_ITEM, SET_CART ,CLEAR_CART} from "./cartType";

const initialCartState = {
	cartItems:[]  // [cid ,cid]
}

const cartReducer = (state =initialCartState , action )=>{
	switch (action.type) {
		case ADD_ITEM: return {
			...state,
			cartItems: [...state.cartItems , action.payload],
		}
		case SET_CART: return {
			...state,
			cartItems: action.payload,
		}
		case CLEAR_CART: return {
			...state,
			cartItems: [],
		}
		// case DELETE_ITEM: return {
		// 	...state,
		// 	product: state.product.filter((p)=>p._id !== action.payload.product._id ),
		// 	totalItem: state.totalItem-1
		// }
		default: return state
	}
}

export default cartReducer ;