import { ADD_ITEM, DELETE_ITEM, SET_CART, CLEAR_CART, UPDATE_ITEM } from "./cartType";

const initialCartState = {
	cartItems: []  // [{_id, date.now() ,userId , pid , quantity, color, size  }] 
}

const cartReducer = (state = initialCartState, action) => {
	switch (action.type) {
		case ADD_ITEM: return {
			...state,
			cartItems: [...state.cartItems, action.payload],
		}
		case DELETE_ITEM:
			if (action.payload.cid) {
				return { cartItems: state.cartItems.filter((p) => p._id !== action.payload.cid) }
			}
			else {
				return { cartItems: state.cartItems.filter((p) => p.date !== action.payload.date) }
			}
		case UPDATE_ITEM:
			if(action.payload.cid) {
				console.log("in update item reducer")
				return { cartItems: state.cartItems.map((cartItem) => cartItem._id===action.payload.cid ? action.payload.item : cartItem) }
			}
			else{
				return { cartItems: state.cartItems.map((cartItem) => cartItem.date === action.payload.date ? action.payload.item : cartItem) }
			}
		case SET_CART: return {
			...state,
			cartItems: action.payload,
		}
		case CLEAR_CART: return {
			...state,
			cartItems: [],
		}
		default: return state
	}
}

export default cartReducer;