// make axios intance so that no need to pass hearder:authorization again and again 

import axios from "axios";

let BASE_URL = "http://localhost:8800/api";
if (process.env.NODE_ENV === "production") {
	BASE_URL = "https://fashionstore.cyclic.app/api";
} 
export const publicRequest = axios.create({ baseURL: BASE_URL })
export const userRequest =axios.create({ baseURL: BASE_URL })