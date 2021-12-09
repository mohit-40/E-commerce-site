import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "./userType";
import axios from "axios"

export const loginStart=()=>({
	type:LOGIN_START
})
export const loginSuccess=(user)=>({
	type:LOGIN_SUCCESS,
	payload: user
})

export const loginFail=(error)=>({
	type:LOGIN_FAIL,
	payload:error
	
})

export const login=(email, password)=>{
	return async(dispatch)=>{
		await dispatch(loginStart());
		try {
			const res= await axios.post("/auth/login",{ email: email , password: password});
			dispatch(loginSuccess(res.data));;
		} catch (error) {
			dispatch(loginFail(error))
		}
	}
}

