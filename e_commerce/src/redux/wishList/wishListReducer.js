import { ADD_WL_ITEM, CLEAR_WISHLIST, DELETE_WL_ITEM, SET_WISHLIST } from "./wishListType"

const initialWishListState = {
	wishListItems:[] //{ _id userId productId}
}

const wishListReducer=(state = initialWishListState , action )=>{
	switch (action.type) {
		case ADD_WL_ITEM :
			const found = state.wishListItems.findIndex((item)=> item.productId===action.payload.productId)
			return found===-1 ? {wishListItems: [...state.wishListItems , action.payload ] } : state
		case DELETE_WL_ITEM:  
			console.log("delete ITem",action)
		return({
			wishListItems: state.wishListItems.filter((wishListItem)=> wishListItem.productId!==action.payload )
		})
		case SET_WISHLIST: return({
			wishListItems: action.payload
		})
		case CLEAR_WISHLIST: return({
			wishListItems: []
		})
		default: return state; 
	}
}

export default wishListReducer;