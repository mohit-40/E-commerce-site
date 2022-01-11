import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "./userType"; 
import {publicRequest} from "../../requestMethod"
export const loginStart=()=>({
	type:LOGIN_START
})
export const loginSuccess=(user)=>({
	type:LOGIN_SUCCESS,
	payload: user
})

export const loginFail=()=>({
	type:LOGIN_FAIL
	
})

export const login=(email, password)=>{
	return async(dispatch)=>{
		await dispatch(loginStart());
		try { 
			const res= await publicRequest.post("/auth/login",{ email: email , password: password});
			const user =res.data;  
			localStorage.setItem("accessToken",user.accessToken);
			localStorage.setItem("refreshToken",user.refreshToken);
			dispatch(loginSuccess(user._id));
		} catch (error) {
			dispatch(loginFail())
		}
	}
}
