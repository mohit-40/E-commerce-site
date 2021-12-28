import { ADD_ITEM , DELETE_ITEM, SET_CART ,CLEAR_CART  } from "./cartType";

export const addItem = (cid) =>({
	type:ADD_ITEM,
	payload: cid
})
export const setCart = (c) =>({
	type:SET_CART,
	payload: c
})
export const clearCart = (c) =>({
	type:CLEAR_CART 
})

// export const deleteItem = (product ) =>({
// 	type:DELETE_ITEM,
// 	payload:{
// 		product: product
// 	}
// })
