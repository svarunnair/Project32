import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, patchCart, postBilling } from '../Redux/data/action'
import { Button, Flex, Grid, Img, Text, grid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Cart() {

    const cartData=useSelector((store)=>store.data.getCart)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [count,setCount]=useState(0)

    console.log("cartData",cartData)


    const handleAddCount=(id)=>{
        if(count>=2){
            setCount(0)
        }
        else{
            setCount(count+1)
        }
       
    }
    const handleReduceCount=()=>{
        if(count<=0){
            setCount(2)
        }
        else{
            setCount(count-1)
        }
       
    }

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
    dispatch(postBilling(cartData))
    navigate('/address')
    }
  return (
    <Grid>
        <Grid justifyContent={'center'} >
         {cartData.map((item)=>(
            <Grid border={'solid red'}>
            {item.name}<br/>
            {item.price}<br/>
            {/* {item.images.map((i)=>(
                <>
                <Img width={"200px"} src={i}/>
                </>
            ))} */}
            <Flex>
            <Img width={"250px"} src={item.images[count]}/>
            <Button onClick={()=>handleAddCount(item.id)}>next</Button>
            <Button onClick={()=>handleReduceCount(item.id)}>prev</Button>

            </Flex>
           

            <Button width={"25px"} onClick={()=>handleAdd(item.id,item.quant)}>+</Button>
            <Button width={"25px"} onClick={()=>handleReduce(item.id,item.quant)}>-</Button>
            <Text>{item.quant}</Text>

            
            </Grid>
         ))}

<Text>Total amount :{total}</Text>
            <Text fontSize={'smaller'}>INCLUDING GST
* EXCL SHIPPING COST</Text>
<Button onClick={hanldleContinue} >Continue</Button>
          </Grid>
        
    </Grid>
  )
}

export default Cart