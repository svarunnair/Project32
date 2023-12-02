import { Grid, Img, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBilling } from '../Redux/data/action'

function Billing() {

    const billingData=useSelector((store)=>store.data.getBilling)
    const dispatch=useDispatch()

    console.log("billing",billingData)

    useEffect(()=>{
     dispatch(getBilling())
    },[])
  return (
    <div><Grid>
        <Text>WHERE DO YOU WANT TO RECEIVE YOUR ORDER?</Text>

        {billingData?.map((item)=>(
            <>
        {item.name}
       
       <Img src={item.images[0]}/>
            </>
        ))}
        


        </Grid></div>
  )
}

export default Billing