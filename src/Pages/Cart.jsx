import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, patchCart, postBilling } from '../Redux/data/action'
import { Box, Button, Flex, Grid, Img, Text, grid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { color } from 'framer-motion'

function Cart() {

    const cartData=useSelector((store)=>store.data.getCart)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    // const [count,setCount]=useState(0)

    console.log("cartData",cartData)



    useEffect(()=>{
        dispatch(getCart())
    },[])

    const handleAdd=(id,quant)=>{
        let data={
            quant:quant+1
        }
        dispatch(patchCart(id,data))
    }
    const handleReduce=(id,quant)=>{
        if(quant<2){
            quant=1
        }
        else{
            let data={
                quant:quant-1
            }
            dispatch(patchCart(id,data))
        }
    }

    const total=cartData?.reduce((acc,item,index)=>{
        return acc+item.price*item.quant
    },0)
    console.log("total",total)

    const hanldleContinue=()=>{
      cartData?.map((item)=>(
        dispatch(postBilling(item))
      ))
    navigate('/address')
    }
    

    
  return (
    <Grid color={"black"}>
        <Grid color={"black"} padding={"10px"}  display={"flex"} gridTemplateColumns={"(repeat(6,1fr)"} >
         {cartData.map((item)=>(
            <Grid marginTop={"150px"} border={'1px solid black'} width={"200px"} >
           
            
            <Grid textAlign={"left"}>
            <Img width={"250px"} src={item.images[0]}/>
           <Text padding={"10px"} fontSize={"small"}>{item.name}</Text> <br/>
           <Text padding={"10px"} marginTop={"-5"} fontSize={"x-small"}>₹ {item.price}.00</Text> <br/>
           <Flex  justifyContent={"left"} padding={"10px"}>
           <Button borderRadius={"0px"} border={"1px solid black"} color={"black"} height={"25px"}  width={"25px"} onClick={()=>handleAdd(item.id,item.quant)}>+</Button>
           <Box fontSize={"smaller"} height={"25px"} textAlign={"center"} width={"40px"} border={"1px solid black"}><Text>{item.quant}</Text></Box>
            <Button height={"25px"} borderRadius={"0px"} border={"1px solid black"} 
            color={"black"}  width={"25px"} onClick={()=>handleReduce(item.id,item.quant)}>-</Button>
           </Flex>
            

            </Grid>
        
            
            </Grid>
         ))}


          </Grid>

          <Grid marginTop={"80px"} height={"80px"}  border={"1px solid black"}>
          <Text marginLeft={"500px"}>Total amount :₹ {total}.00</Text>
            <Text marginLeft={"500px"} fontSize={"x-small"}>INCLUDING GST
* EXCL SHIPPING COST</Text>
<Button marginTop={"-41px"} _hover={{ bg: "black" }} marginLeft={"1045px"} height={"80px"} 
borderRadius={"0px"} width={"200px"} bg={"black"} color={"white"} onClick={hanldleContinue} >Continue</Button>
</Grid>
          </Grid>
  )
}

export default Cart