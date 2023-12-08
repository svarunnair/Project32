import axios from "axios"



export const GET_DATA_REQUIEST="GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"

export const GET_DETAILS_REQUIEST="GET_DETAILS_REQUIEST"
export const GET_DETAILS_SUCCESS="GET_DETAILS_SUCCESS"
export const GET_DETAILS_FAILURE="GET_DETAILS_FAILURE"

export const POST_CART_REQUIEST="POST_CART_REQUIEST"
export const POST_CART_SUCCESS="POST_CART_SUCCESS"
export const POST_CART_FAILURE="POST_CART_FAILURE"

export const GET_CART_REQUIEST="GET_CART_REQUIEST"
export const GET_CART_SUCCESS="GET_CART_SUCCESS"
export const GET_CART_FAILURE="GET_CART_FAILURE"

export const PATCH_CART_REQUIEST="PATCH_CART_REQUIEST"
export const PATCH_CART_SUCCESS="PATCH_CART_SUCCESS"
export const PATCH_CART_FAILURE="PATCH_CART_FAILURE"

export const POST_BILLING_REQUIEST="POST_BILLING_REQUIEST"
export const POST_BILLING_SUCCESS="POST_BILLING_SUCCESS"
export const POST_BILLING_FAILURE="POST_BILLING_FAILURE"

export const GET_BILLING_REQUIEST="GET_BILLING_REQUIEST"    
export const GET_BILLING_SUCCESS="GET_BILLING_SUCCESS"
export const GET_BILLING_FAILURE="GET_BILLING_FAILURE"

export const POST_ADDRESS_REQUIEST="POST_ADDRESS_REQUIEST"    
export const POST_ADDRESS_SUCCESS="POST_ADDRESS_SUCCESS"
export const POST_ADDRESS_FAILURE="POST_ADDRESS_FAILURE"

export const GET_ADDRESS_REQUIEST="GET_ADDRESS_REQUIEST"    
export const GET_ADDRESS_SUCCESS="GET_ADDRESS_SUCCESS"
export const GET_ADDRESS_FAILURE="GET_ADDRESS_FAILURE"

export const PATCH_ADDRESS_REQUIEST="PATCH_ADDRESS_REQUIEST"    
export const PATCH_ADDRESS_SUCCESS="PATCH_ADDRESS_SUCCESS"
export const PATCH_ADDRESS_FAILURE="PATCH_ADDRESS_FAILURE"



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

const postCartRequiest=()=>{
    return({
        type:POST_CART_REQUIEST
    })
}
const postCartSuccess=(data)=>{
    return({
        type:POST_CART_SUCCESS,
        payload:data
    })
}
const postCartFailure=(data)=>{
    return({
        type:POST_CART_FAILURE,
        error:data
    })
}

const getCartRequiest=()=>{
    return({
        type:GET_CART_REQUIEST
    })
}
const getCartSuccess=(data)=>{
    return({
        type:GET_CART_SUCCESS,
        payload:data
    })
}
const getCartFailure=(data)=>{
    return({
        type:GET_CART_FAILURE,
        error:data
    })
}

const patchCartRequiest=()=>{
    return({
        type:PATCH_CART_REQUIEST
    })
}
const patchCartSuccess=(data)=>{
    return({
        type:PATCH_CART_SUCCESS,
        payload:data
    })
}
const patchCartFailure=(data)=>{
    return({
        type:PATCH_CART_FAILURE,
        error:data
    })
}

const postBillingRequiest=()=>{
    return({
        type:POST_BILLING_REQUIEST
    })
}
const postBillingSuccess=(data)=>{
    return({
        type:POST_BILLING_SUCCESS,
        payload:data
    })
}
const postBillingFailure=(data)=>{
    return({
        type:POST_BILLING_FAILURE,
        error:data
    })
}

const getBillingRequiest=()=>{
    return({
        type:GET_BILLING_REQUIEST
    })
}
const getBillingSuccess=(data)=>{
    return({
        type:GET_BILLING_SUCCESS,
        payload:data
    })
}
const getBillingFailure=(data)=>{
    return({
        type:GET_BILLING_FAILURE,
        error:data
    })
}

const postAddressRequiest=()=>{
    return({
        type:POST_ADDRESS_REQUIEST
    })
}
const postAddressSuccess=(data)=>{
    return({
        type:POST_ADDRESS_SUCCESS,
        payload:data
    })
}
const postAddressFailure=(data)=>{
    return({
        type:POST_ADDRESS_FAILURE,
        error:data
    })
}

const getAddressRequiest=()=>{
    return({
        type:GET_ADDRESS_REQUIEST
    })
}
const getAddressSuccess=(data)=>{
    return({
        type:GET_ADDRESS_SUCCESS,
        payload:data
    })
}
const getAddressFailure=(data)=>{
    return({
        type:GET_ADDRESS_FAILURE,
        error:data
    })
}

const patchAddressRequiest=()=>{
    return({
        type:PATCH_ADDRESS_REQUIEST
    })
}
const patchAddressSuccess=(data)=>{
    return({
        type:PATCH_ADDRESS_SUCCESS,
        payload:data
    })
}
const patchAddressFailure=(data)=>{
    return({
        type:PATCH_ADDRESS_FAILURE,
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

export const postCart=(data)=>(dispatch)=>{
    dispatch(postCartRequiest())
    return axios({
        url:"http://localhost:8000/cart",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postCartSuccess(res.data))
        console.log("postCart",res.data)
    })
    .catch((error)=>{
        dispatch(postCartFailure(error))
    })
}

export const getCart=()=>(dispatch)=>{
    dispatch(getCartRequiest())
    return axios({
        url:"http://localhost:8000/cart",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getCartSuccess(res.data))
        console.log("getCart",res.data)
    })
    .catch((error)=>{
        dispatch(getCartFailure(error))
    })
}

export const patchCart=(id,data)=>(dispatch)=>{
    dispatch(patchCartRequiest())
    return axios({
        url:`http://localhost:8000/cart/${id}`,
        method:"PATCH",
        data
    })
    .then((res)=>{
        dispatch(patchCartSuccess(res.data))
        console.log("patchCart",res.data)
    })
    .catch((error)=>{
        dispatch(patchCartFailure(error))
    })
}

export const postBilling=(data)=>(dispatch)=>{
    dispatch(postBillingRequiest())
    return axios({
        url:"http://localhost:8000/billing",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postBillingSuccess(res.data))
        console.log("postBilling",res.data)
    })
    .catch((error)=>{
        dispatch(postBillingFailure(error))
    })
}

export const getBilling=()=>(dispatch)=>{
    dispatch(getBillingRequiest())
    return axios({
        url:"http://localhost:8000/billing",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getBillingSuccess(res.data))
        console.log("getBilling....",res.data)
    })
    .catch((error)=>{
        dispatch(getBillingFailure(error))
    })
}

export const postAddress=(data)=>(dispatch)=>{
    dispatch(postAddressRequiest())
    return axios({
        url:"http://localhost:8000/address",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postAddressSuccess(res.data))
        localStorage.setItem("addressToken",res.data)
        console.log("AdrsTkn",res.data)
        console.log("postAddress",res.data)
    })
    .catch((error)=>{
        dispatch(postAddressFailure(error))
    })
}

export const getAddress=()=>(dispatch)=>{
    dispatch(getAddressRequiest())
    return axios({
        url:"http://localhost:8000/address",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getAddressSuccess(res.data))
        console.log("getAddress",res.data)
    })
    .catch((error)=>{
        dispatch(getAddressFailure(error))
    })
}

export const patchAddress=(data,id)=>(dispatch)=>{
    dispatch(patchAddressRequiest())
    return axios({
        url:`http://localhost:8000/address/${id}`,
        method:"PATCH",
        data
    })
    .then((res)=>{
        dispatch(patchAddressSuccess(res.data))
        console.log("patchAddress",res.data)
    })
    .catch((error)=>{
        dispatch(patchAddressFailure(error))
    })
}