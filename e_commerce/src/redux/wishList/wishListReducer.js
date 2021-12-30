import { ADD_ITEM, CLEAR_WISHLIST, DELETE_ITEM, SET_WISHLIST } from "./wishListType"

const initialWishListState = {
	wishListItems:[] //{userId productId}
}

const wishListReducer=(state = initialWishListState , action )=>{
	switch (action.type) {
		case ADD_ITEM : return({
			wishListItems: [...state.wishListItems , action.payload ]
		})
		case DELETE_ITEM: return({
			wishListItems: state.wishListItems.filter((wishListItem)=> wishListItem._id!==action.payload.itemId )
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