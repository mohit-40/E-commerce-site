import { ADD_ITEM, CLEAR_WISHLIST, DELETE_ITEM, SET_WISHLIST } from "./wishListType"

export const addItem = (item)=>({
	type:ADD_ITEM,
	payload: item 
})
export const deleteItem = (itemId)=>({
	type:DELETE_ITEM,
	payload:itemId
})
export const setItem = (wishList) =>({
	type:SET_WISHLIST,
	payload:wishList
})

export const clearItem=()=>({
	type:CLEAR_WISHLIST,
})
