import axios from "axios"



export const GET_DATA_REQUIEST="GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"

export const GET_DETAILS_REQUIEST="GET_DETAILS_REQUIEST"
export const GET_DETAILS_SUCCESS="GET_DETAILS_SUCCESS"
export const GET_DETAILS_FAILURE="GET_DETAILS_FAILURE"


const getDataRequiest=()=>{
    return({
        type:GET_DATA_REQUIEST
    })
}
const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}
const getDataFailure=(data)=>{
    return({
        type:GET_DATA_FAILURE,
        error:data
    })
}

const getDetailsRequiest=()=>{
    return({
        type:GET_DETAILS_REQUIEST
    })
}
const getDetailsSuccess=(data)=>{
    return({
        type:GET_DETAILS_SUCCESS,
        payload:data
    })
}
const getDetailsFailure=(data)=>{
    return({
        type:GET_DETAILS_FAILURE,
        error:data
    })
}


export const getData=()=>(dispatch)=>{
    dispatch(getDataRequiest())
    return axios({
        url:"http://localhost:8000/data",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
        console.log("getData",res.data)
    })
    .catch((error)=>{
        dispatch(getDataFailure(error))
    })
}

export const getDetails=(id)=>(dispatch)=>{
    dispatch(getDetailsRequiest())
    return axios({
        url:`http://localhost:8000/data/${id}`,
        method:"GET"
    })
    .then((res)=>{
        dispatch(getDetailsSuccess(res.data))
        console.log("getDetails",res.data)
    })
    .catch((error)=>{
        dispatch(getDetailsFailure(error))
    })
}

