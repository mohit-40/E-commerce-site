import { ADD_ITEM , DELETE_ITEM, SET_CART ,CLEAR_CART ,UPDATE_ITEM } from "./cartType";

export const addItem = (cartItem) =>({
	type:ADD_ITEM,
	payload: cartItem
})
export const setCart = (cart) =>({
	type:SET_CART,
	payload: cart
})
export const clearCart = ( ) =>({
	type:CLEAR_CART 
})

export const deleteItem = ( itemId , date ) =>({
	type:DELETE_ITEM,
	payload:{
		cid:itemId,
		date:date
	}
})
export const updateItem = ( itemId , date , item) =>({
	type:UPDATE_ITEM,
	payload:{
		item:item,
		cid:itemId,
		date:date
	}
})
