import { ADD_ITEM , DELETE_ITEM } from "./cartType";

const initialCartState = {
	products:[]
}

const cartReducer = (state =initialCartState , action )=>{
	switch (action.type) {
		case ADD_ITEM: return {
			...state,
			products: [...state.products , action.payload],
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