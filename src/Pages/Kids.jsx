import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'
import { Button, Flex, Grid, Img } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Kids() {

  const kidsData=useSelector((store)=>store.data.getData)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleProduct=(id)=>{
    navigate(`/detail/${id}`)
  }

  console.log("kids",kidsData)

  useEffect(()=>{
    dispatch(getData())
  },[])
  return (
    <Grid>
      
      <Flex position={'sticky'} zIndex="1000"  top="200" marginTop={"100px"} marginBottom={"-80px"} marginLeft={"30px"} gap={"10px"}>
        <Button fontWeight={450} width={{ base: "20px", md: "30px", lg: "50px" }} height={"25px"} border={"1px solid black"} borderRadius={"0px"} bg={"rgba(255,255,255,0)"}  fontSize={"small"} color={'black'}>SIZE</Button>
        <Button fontWeight={450} width={{ base: "20px", md: "30px", lg: "50px" }} height={"25px"} border={"1px solid black"} borderRadius={"0px"} bg={"rgba(255,255,255,0)"} fontSize={"small"} color={'black'}>PRICE</Button>
        <Button fontWeight={450} width={{ base: "20px", md: "30px", lg: "70px" }} height={"25px"} border={"1px solid black"} borderRadius={"0px"} bg={"rgba(255,255,255,0)"} fontSize={"small"} color={'black'}>COLOUR</Button>

        </Flex>
    
    <Grid marginTop={"150px"} cursor={'pointer'} fontSize={"xx-small"} display={'grid'} gridTemplateColumns={"repeat(6,1fr)"}>


      {kidsData.map((item)=>(

        <Grid  border={'1px solid black'}>

        {item.name}<br/>
        {item.price}<br/>
        <Img onClick={()=>handleProduct(item.id)} width={"210px"} src={item.images[0]}/><br/>
       
          
        
        </Grid>
      ))}


    </Grid>

    </Grid>
  )
}

export default Kids