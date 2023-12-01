import { GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, GET_DETAILS_FAILURE, GET_DETAILS_REQUIEST, GET_DETAILS_SUCCESS } from "./action"




const initState={
    isLoading:false,
    isError:false,
    getData:[],
    getDetails:[]
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





                    default:
                        return({
                            ...state
                        })
    }

}