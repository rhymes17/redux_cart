import axios from "axios"

const BASE_URL = "/api/users"

const register = async(user) => {
    try {
        const res = await axios.post(`${BASE_URL}/register`, user)
        if(res.data){
            localStorage.setItem("user", JSON.stringify(res.data.data))
        }
        return res.data

    } catch (error) {
        return error.message   
    }
}

export const authService = {register}