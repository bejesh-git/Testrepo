import axios from "axios";

// create axios object with basic configuration
const axiosHttp = axios.create({
    baseURL:window.location.hostname.includes("localhost") ? 
    "http://localhost:9999/user"     :
    "http://www.hematitecorp.com/"
})


// create interceptor
axiosHttp.interceptors.request.use(
    (config) => {
        const token = !!sessionStorage.getItem("accessToken");
        return{
            ...config,
            headers:{
                ...axios(token && {'Authorization':`Bearer ${sessionStorage.getItem("accessToken")}`}),
                ...config.headers
            }
        }
    },
    (error) => {
        return Promise.reject(error)
    }
);

axiosHttp.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error)=>{
        return Promise.reject(error)
    }
)



export const GET = (url, header={}) => {
    return axios.get(url, {headers:header});
}
export const DELETE = (url, header={}) => {
    return axios.delete(url, {headers:header});
}
export const POST = (url, payload, header={}) => {
    return axios.post(url,payload, {headers:header});
}
export const PUT = (url, payload, header={}) => {
    return axios.put(url, payload, {headers:header});
}