import { POST_AUTH_FAILURE, POST_AUTH_REQUIEST, POST_AUTH_SUCCESS } from "./authAction"



const initState={
    isLoading:false,
    isError:false,
    auth:[]
}

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case POST_AUTH_REQUIEST:
            return({
                ...state,
                isLoading:true,
                isError:false
            })
            case POST_AUTH_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    auth:action.payload
                })
                case POST_AUTH_FAILURE:
                    return({
                        ...state,
                        isLoading:false,
                        isError:true
                    })




                    default:
                        return({
                            ...state
                        })
    }
}