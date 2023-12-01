import axios from "axios"



export const POST_AUTH_REQUIEST="POST_AUTH_REQUIEST"
export const POST_AUTH_SUCCESS="POST_AUTH_SUCCESS"
export const POST_AUTH_FAILURE="POST_AUTH_FAILURE"


const postAuthRequiest=()=>{
    return({
        type:POST_AUTH_REQUIEST
    })
}
const postAuthSuccess=(data)=>{
    return({
        type:POST_AUTH_SUCCESS,
        payload:data
    })
}
const postAuthFailure=(data)=>{
    return({
        type:POST_AUTH_FAILURE,
        error:data
    })
}


export const postAuth=(data)=>(dispatch)=>{
    dispatch(postAuthRequiest())
    return axios({
        url:"http://localhost:8000/auth",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postAuthSuccess(res.data))
        localStorage.setItem('token',res.data)
        console.log("token",res.data)
    })
    .catch((error)=>{
        dispatch(postAuthFailure(error))
    })
}