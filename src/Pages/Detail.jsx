import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetails } from '../Redux/data/action'
import { Button, Img } from '@chakra-ui/react'

function Detail() {
    const params=useParams()

    console.log("params",params)


    const details=useSelector((store)=>store.data.getDetails)
    const dispatch=useDispatch()
    const [count,setCount]=useState(0)
    const [data,setData]=useState(
      []
    )

    const handleNext=()=>{
        
        setCount(count+1)
    }

    

useEffect(()=>{
   if(Object.keys(details).length>0){
    setData(details.images)
   }
  
},[details])

    console.log("data",)
    console.log("detail",details)

    useEffect(()=>{
      dispatch(getDetails(params?.id))
    },[params])

  return (
    <div>
        
        {data?.name}<br/>




       {details?.price}<br/>
       <Img src={data?.[count]}/>
       <Button onClick={handleNext}>next</Button>
       <Button >prev</Button>

       
        
        {/* {data?.map((item)=>(
            <>
            <Img src={item}/>
            </>
        ))} */}



    </div>
  )
}

export default Detail