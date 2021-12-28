import { ADD_ITEM , DELETE_ITEM } from "./cartType";

export const addItem = (productId, color, size , quantity ) =>({
	type:ADD_ITEM,
	payload:{
		productId :productId,
		quantity: quantity,
		size : size,
		color:color
	}
})

// export const deleteItem = (product ) =>({
// 	type:DELETE_ITEM,
// 	payload:{
// 		product: product
// 	}
// })
