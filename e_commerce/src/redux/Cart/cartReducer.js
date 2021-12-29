import { ADD_ITEM , DELETE_ITEM, SET_CART ,CLEAR_CART} from "./cartType";

const initialCartState = {
	cartItems:[]  // [{_id, date.now() ,userId , pid , quantity, color, size  }] 
}

const cartReducer = (state =initialCartState , action )=>{
	switch (action.type) {
		case ADD_ITEM: return {
			...state,
			cartItems: [...state.cartItems , action.payload],
		}
		case DELETE_ITEM:
			if(action.payload.cid){
				console.log("herre bhai ")
				return { cartItems: state.cartItems.filter((p)=> p._id !== action.payload.cid ) }
			}
			else {
				return {  cartItems: state.cartItems.filter((p)=> p.date !== action.payload.date ) }
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

export default cartReducer ;