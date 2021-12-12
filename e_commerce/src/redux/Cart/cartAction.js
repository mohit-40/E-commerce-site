import { ADD_ITEM , DELETE_ITEM } from "./cartType";

export const addItem = (product, color, size , quantity ) =>({
	type:ADD_ITEM,
	payload:{
		product: product,
		productId :product._id,
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
