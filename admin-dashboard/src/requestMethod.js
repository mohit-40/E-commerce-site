// make axios intance so that no need to pass hearder:authorization again and again 

import axios from "axios";

const BASE_URL = "http://localhost:8800/api/";

export const publicRequest = axios.create({ baseURL: BASE_URL })
export const userRequest =axios.create({ baseURL: BASE_URL })

