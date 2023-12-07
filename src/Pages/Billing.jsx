import { Box, Button, Flex, Grid, Img, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAddress, getBilling, getData } from '../Redux/data/action'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getAuth } from '../Redux/auth/authAction'

function Billing() {

    const billingData=useSelector((store)=>store.data.getBilling)
    const dispatch=useDispatch()
    const [data,setdata]=useState([])
    const authData=useSelector((store)=>store.auth.getAuth)
    const address=useSelector((store)=>store.data.getAddress)
    const mainData=useSelector((store)=>store.data.getData)
    const navigate=useNavigate()

    console.log("billManin Data",mainData)

    useEffect(()=>{
      dispatch(getData())
    },[])

    console.log("adrss",address)

    console.log("authData",authData)


    const handleEdit=()=>{
      navigate('/edit')
    }
    

    useEffect(()=>{
      dispatch(getAddress())
    },[])

    useEffect(()=>{
      dispatch(getAuth())
    },[])


    useEffect(()=>{
      if(Object.keys(billingData).length>0){

        setdata(billingData)
      }
     
    },[billingData])
    console.log('dataBill',data)

    // console.log("billing",billingData.images)

    useEffect(()=>{
     dispatch(getBilling())
    },[])
  return (
    <div>
      <Flex fontWeight={30} marginLeft={"70px"} marginTop={"120px"}><Text>WHERE DO YOU WANT TO RECEIVE YOUR ORDER?</Text></Flex>
      
      <Box marginTop={"50px"} marginLeft={"60px"} width={"300px"} height={"130px"} border={"1px solid black"}>
        <Flex textAlign={"center"} fontSize={11}>
          <Box border={"1px solid black"} width={"150px"} height={"50px"}>HOME</Box>
        <Box border={"1px solid black"} width={"150px"} height={"50px"}>ZARA STORE</Box>
        </Flex>
       
       {address.map((item)=>(
        <Grid textAlign={"left"} marginLeft={"10px"}>
        <Text fontSize={11}>Name:{item.name}</Text>
        <Text fontSize={11}>Location:{item.location}</Text>
        <Text onClick={handleEdit} marginTop={"20px"} cursor={"pointer"} fontSize={9} textDecoration={'underline'}>Edit</Text>
        </Grid>
       ))}
      </Box>
      <Grid>

      </Grid>
      <Grid  marginLeft={"60px"} marginRight={"700px"} marginTop={"100px"} border={"1px solid black"}>
        
      <Flex><Text marginLeft={"10px"} marginTop={"10px"} fontSize={"x-small"}>ITEMS</Text></Flex>
<Grid display={"grid"} gridTemplateColumns={"repeat(4,1fr)"} width={"450px"} color={"black"}
              >
                  
        {data?.map((item)=>(
            <Grid marginTop={"30px"}   >
            
              <Img  width={"180px"} src={item.images[0]}/>
       
            </Grid>
        ))}
        
       
        
        </Grid>

        <Flex>
        <Text marginLeft={"25px"} fontSize={"smaller"} fontWeight={700}>WEDNESDAY 13,  DECEMBER </Text><Text fontSize={"small"} marginLeft={"200px"}  fontWeight={20}>FREE</Text>
        </Flex>
        <Flex>
       <Text marginTop={"15px"} marginLeft={"25px"} fontSize={11}>Free shipping for orders over ₹ 2,990 applies only for full price items</Text> 
      
        </Flex>
        <Flex marginBottom={"20px"} marginLeft={"25px"} marginTop={"20px"} >
        <Link ><Text  textDecoration={"underline"} fontSize={9} color={"black"}>Delivery time frames</Text></Link>
        </Flex>
       
        
        </Grid  >
       
       <Flex bg={"transparent"} position={'sticky'}  top="0"
        zIndex="1000" width={"1247px"} height={"75px"}   marginTop={"100px"} textAlign={"right"}  border={"1px solid black"} 
       fontSize={12} gap={"55px"} 
        color={"black"}>
        <Text marginTop={"30px"} marginLeft={"960px"}>SHIPPING</Text> 
        <Text  marginTop={"30px"}>FREE</Text>
        <Button bg={"black"} width={"300px"} height={"75px"} color={"white"} 
        borderRadius={"0px"} _hover={"black"}>Continue</Button>
      </Flex>
      
      

      
        </div>
  )
}

export default Billing