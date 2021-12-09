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
			isFetching: true
		}
		case LOGIN_SUCCESS: return {
			...state,
			isFetching:false,
			currentUser: action.payload			
		}
		case LOGIN_FAIL: return {
			...state,
			isFetching:false,
			error:action.payload
		}
		default: return state	
	}
}

export default userReducer