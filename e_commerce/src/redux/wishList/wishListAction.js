import { ADD_WL_ITEM, CLEAR_WISHLIST, DELETE_WL_ITEM, SET_WISHLIST } from "./wishListType"

export const addWlItem = (item)=>({
	type:ADD_WL_ITEM,
	payload: item 
})
export const deleteWlItem = (productId)=>({
	type:DELETE_WL_ITEM,
	payload:productId
})
export const setItem = (wishList) =>({
	type:SET_WISHLIST,
	payload:wishList
})

export const clearItem=()=>({
	type:CLEAR_WISHLIST,
})
