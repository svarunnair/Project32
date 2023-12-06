import { GET_ADDRESS_FAILURE, GET_ADDRESS_REQUIEST, GET_ADDRESS_SUCCESS, GET_BILLING_FAILURE, GET_BILLING_REQUIEST, GET_BILLING_SUCCESS, GET_CART_FAILURE, GET_CART_REQUIEST, GET_CART_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, GET_DETAILS_FAILURE, GET_DETAILS_REQUIEST, GET_DETAILS_SUCCESS, PATCH_CART_FAILURE, PATCH_CART_REQUIEST, PATCH_CART_SUCCESS, POST_ADDRESS_FAILURE, POST_ADDRESS_REQUIEST, POST_ADDRESS_SUCCESS, POST_BILLING_FAILURE, POST_BILLING_REQUIEST, POST_BILLING_SUCCESS, POST_CART_FAILURE, POST_CART_REQUIEST, POST_CART_SUCCESS } from "./action"




const initState={
    isLoading:false,
    isError:false,
    getData:[],
    getDetails:[],
    postCart:[],
    getCart:[],
    patchCart:[],
    postBilling:[],
    getBilling:[],
    postAddress:[],
    getAddress:[]
}

export const dataReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_DATA_REQUIEST:
            return({
                ...state,
                isErrorr:false,
                isLoading:true
            })
            case GET_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    getData:action.payload
                })
                case GET_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                    case GET_DETAILS_REQUIEST:
            return({
                ...state,
                isErrorr:false,
                isLoading:true
            })
            case GET_DETAILS_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    getDetails:action.payload
                })
                case GET_DETAILS_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                    case POST_CART_REQUIEST:
                        return({
                            ...state,
                            isErrorr:false,
                            isLoading:true
                        })
                        case POST_CART_SUCCESS:
                            return({
                                ...state,
                                isError:false,
                                isLoading:false,
                                postCart:action.payload
                            })
                            case POST_CART_FAILURE:
                                return({
                                    ...state,
                                    isError:true,
                                    isLoading:false
                                })

                                case GET_CART_REQUIEST:
                        return({
                            ...state,
                            isErrorr:false,
                            isLoading:true
                        })
                        case GET_CART_SUCCESS:
                            return({
                                ...state,
                                isError:false,
                                isLoading:false,
                                getCart:action.payload
                            })
                            case GET_CART_FAILURE:
                                return({
                                    ...state,
                                    isError:true,
                                    isLoading:false
                                })


                                case PATCH_CART_REQUIEST:
                        return({
                            ...state,
                            isErrorr:false,
                            isLoading:true
                        })
                        case PATCH_CART_SUCCESS:
                            return({
                                ...state,
                                isError:false,
                                isLoading:false,
                                patchCart:action.payload
                            })
                            case PATCH_CART_FAILURE:
                                return({
                                    ...state,
                                    isError:true,
                                    isLoading:false
                                })

                                case POST_BILLING_REQUIEST:
                        return({
                            ...state,
                            isErrorr:false,
                            isLoading:true
                        })
                        case POST_BILLING_SUCCESS:
                            return({
                                ...state,
                                isError:false,
                                isLoading:false,
                                postBilling:action.payload
                            })
                            case POST_BILLING_FAILURE:
                                return({
                                    ...state,
                                    isError:true,
                                    isLoading:false
                                })

         case GET_BILLING_REQUIEST:
            return({
                ...state,
                isErrorr:false,
                isLoading:true
            })
            case GET_BILLING_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    getBilling:action.payload
                })
                case GET_BILLING_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case POST_ADDRESS_REQUIEST:
                        return({
                            ...state,
                            isErrorr:false,
                            isLoading:true
                        })
                        case POST_ADDRESS_SUCCESS:
                            return({
                                ...state,
                                isError:false,
                                isLoading:false,
                                postAddress:action.payload
                            })
                            case POST_ADDRESS_FAILURE:
                                return({
                                    ...state,
                                    isError:true,
                                    isLoading:false
                                })


                                case GET_ADDRESS_REQUIEST:
                                    return({
                                        ...state,
                                        isErrorr:false,
                                        isLoading:true
                                    })
                                    case GET_ADDRESS_SUCCESS:
                                        return({
                                            ...state,
                                            isError:false,
                                            isLoading:false,
                                            getAddress:action.payload
                                        })
                                        case GET_ADDRESS_FAILURE:
                                            return({
                                                ...state,
                                                isError:true,
                                                isLoading:false
                                            })
            

                                

                                





                    default:
                        return({
                            ...state
                        })
    }

}