import { Grid, Img, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBilling } from '../Redux/data/action'
import { useState } from 'react'

function Billing() {

    const billingData=useSelector((store)=>store.data.getBilling)
    const dispatch=useDispatch()
    const [data,setdata]=useState([])

    useEffect(()=>{
      if(Object.keys(billingData).length>0){

        setdata(billingData)
      }
     
    },[billingData])
    console.log('dataBill',data)

    console.log("billing",billingData)

    useEffect(()=>{
     dispatch(getBilling())
    },[])
  return (
    <div><Grid marginTop={"100px"}>
        <Text>WHERE DO YOU WANT TO RECEIVE YOUR ORDER?</Text>

        {billingData?.map((item)=>(
            <Grid width={"250px"} color={"black"}>
        {item.name}
       
       <Img src={data.images}/>
       
            </Grid>
        ))}
        


        </Grid></div>
  )
}

export default Billing