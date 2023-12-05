import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'
import { Button, Flex, Grid, Img, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Women() {

  const womenData=useSelector((store)=>store.data.getData)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  console.log("women",womenData)

  useEffect(()=>{
    dispatch(getData())
  },[])

  const handleProduct=(id)=>{
     navigate(`/detail/${id}`)
  }
  return (
    <Grid fontSize={"xx-small"} marginRight={"100px"}  >

<Flex position={'sticky'} zIndex="1000"  top="200" marginTop={"100px"} marginBottom={"-80px"} marginLeft={"30px"} gap={"10px"}>
        <Button fontWeight={450} width={"40px"} height={"25px"} border={"1px solid black"} borderRadius={"0px"}  fontSize={"small"} color={'grey'}>SIZE</Button>
        <Button fontWeight={450} width={"50px"} height={"25px"} border={"1px solid black"} borderRadius={"0px"}  fontSize={"small"} color={'grey'}>PRICE</Button>
        <Button fontWeight={450} width={"60px"} height={"25px"} border={"1px solid black"} borderRadius={"0px"}  fontSize={"small"} color={'grey'}>COLOUR</Button>

        </Flex>
        <Grid marginTop={"150px"} width={"1200px"} display={'grid'} gridTemplateColumns={"repeat(6,1fr)"}>
      {womenData.map((item)=>(
        <Grid  color={"black"} border={"1px solid black"}>
          
        <Img cursor={"pointer"}  onClick={()=>handleProduct(item.id)}  src={item.images[0]}/>
        <Text fontSize={"x-small"} textAlign={"left"} marginLeft={"5px"} cursor={"pointer"}>{item.name}</Text><br/>
        <Text textAlign={"left"} marginLeft={"5px"}>₹ {item.price}.00</Text><br/>
        {/* <Button border={"1px solid black"} color={'black'} width={"110px"}>+</Button> */}
        
        </Grid>
        
        
        
        
      ))}
      </Grid>
     </Grid>
  )
}

export default Women