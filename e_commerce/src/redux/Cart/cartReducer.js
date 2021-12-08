import { ADD_ITEM , DELETE_ITEM } from "./cartType";

const initialCartState = {
	products:[],   // products => {product:{} , color , size , quantity }
	totalPrice:0,
	totalQuantity:0
}

const cartReducer = (state =initialCartState , action )=>{
	switch (action.type) {
		case ADD_ITEM: return {
			...state,
			products: [...state.products , action.payload],
			totalQuantity: state.totalQuantity+1,
			totalPrice: state.totalPrice+ action.payload.product.price * action.payload.quantity
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