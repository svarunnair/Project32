import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getDetails, postCart } from '../Redux/data/action'
import { Button, Img } from '@chakra-ui/react'

function Detail() {
    const params=useParams()
    const navigate=useNavigate()

    console.log("params",params)


    const details=useSelector((store)=>store.data.getDetails)
    const dispatch=useDispatch()
    const [count,setCount]=useState(0)
    const [data,setData]=useState([])

    const handleNext=()=>{
        
        setCount(count+1)
    }

    

useEffect(()=>{
   if(Object.keys(details).length>0){
    setData(details.images)
   }
  
},[details])

    console.log("data",data)
    console.log("detail",details)

    useEffect(()=>{
      dispatch(getDetails(params?.id))
    },[params])

    const handleBag=()=>{
      details.quant=1
      dispatch(postCart(details))    
    }

  return (
    <div>
        
        {data?.name}<br/>




       {details?.price}<br/>
       <Img width={"200px"} src={data?.[count]}/>
       <Button onClick={handleNext}>next</Button>
       <Button >prev</Button>
       <Button onClick={()=>handleBag()}>Add to bag</Button>

       
        
        {/* {data?.map((item)=>(
            <>
            <Img src={item}/>
            </>
        ))} */}



    </div>
  )
}

export default Detail