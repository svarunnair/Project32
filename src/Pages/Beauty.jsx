import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'
import { Button, Flex, Grid, Img, Text, grid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Beauty() {

  const mainData=useSelector((store)=>store.data.getData)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  console.log("dataBeauty",mainData)

  const handleProduct=(id)=>{
    navigate(`/detail/${id}`)
  }

  useEffect(()=>{
     dispatch(getData())
  },[])

  return (

    <Grid >
      
      <Flex position={'sticky'} zIndex="1000"  top="200" marginTop={"100px"} marginBottom={"-80px"} marginLeft={"30px"} gap={"10px"}>
        <Button fontWeight={450} width={{ base: "20px", md: "30px", lg: "50px" }} bg={"rgba(255,255,255,0)"} height={"25px"} border={"1px solid black"} borderRadius={"0px"}  fontSize={{ base: "xx-small", md: "x-small", lg: "small" }} color={'black'}>SIZE</Button>
        <Button fontWeight={450} width={{ base: "20px", md: "30px", lg: "50px" }} bg={"rgba(255,255,255,0)"} height={"25px"} border={"1px solid black"} borderRadius={"0px"}  fontSize={{ base: "xx-small", md: "x-small", lg: "small" }} color={'black'}>PRICE</Button>
        <Button fontWeight={450} width={{ base: "20px", md: "30px", lg: "70px" }} bg={"rgba(255,255,255,0)"} height={"25px"} border={"1px solid black"} borderRadius={"0px"}  fontSize={{ base: "xx-small", md: "x-small", lg: "small" }} color={'black'}>COLOUR</Button>

        </Flex>


    <Grid marginTop={"150px"}  display={"grid"} gridTemplateColumns={"repeat(6,1fr)"}>

      {mainData.map((item)=>(
        <Grid border={"1px solid black"}  fontSize={"x-small"}>
         <Img onClick={()=>handleProduct(item.id)} cursor={"pointer"} width={250} src={item.images[0]}/><br/>
         <Text >{item.name}<br/></Text>
         <Text>{item.price}<br/></Text>
        </Grid>
      ))}
      
    </Grid>
    </Grid>
  )
}

export default Beauty