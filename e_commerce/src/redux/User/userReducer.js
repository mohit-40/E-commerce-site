import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "./userType"
const initialUserState={
	currentUser:null,
	isFetching:false,
	error:""
}

const userReducer=(state=initialUserState , action)=>{
	switch (action.type) {
		case LOGIN_START: return {
			...state,
			currentUser:null,
			isFetching:true,
			error:""

		}
		case LOGIN_SUCCESS: return {
			...state,
			currentUser: action.payload,			
			isFetching:false,
			error: ""
		}
		case LOGIN_FAIL: return {
			...state,
			currentUser:null,
			isFetching:false,
			error:action.payload
		}
		default: return state	
	}
}

export default userReducer