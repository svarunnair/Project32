import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'
import { Button, Center, Flex, Grid, Img, Link, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


function Men() {

    const dataMen=useSelector((store)=>store.data.getData)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    console.log('dataMen',dataMen)

    useEffect(()=>{
        dispatch(getData())
    },[])
    const handleProducet=(id)=>{
        navigate(`/detail/${id}`)
    }
  return (
    <Grid >
        <Flex position={'sticky'} zIndex="1000"  top="200" marginTop={"100px"} marginBottom={"-80px"} marginLeft={"30px"} gap={"10px"}>
        <Button fontWeight={450} width={{ base: "20px", md: "30px", lg: "50px" }} bg={"rgba(255,255,255,0)"} height={"25px"} border={"1px solid black"} borderRadius={"0px"}  fontSize={{ base: "xx-small", md: "x-small", lg: "small" }} color={'black'}>SIZE</Button>
        <Button fontWeight={450} width={{ base: "20px", md: "30px", lg: "50px" }} bg={"rgba(255,255,255,0)"} height={"25px"} border={"1px solid black"} borderRadius={"0px"}  fontSize={{ base: "xx-small", md: "x-small", lg: "small" }} color={'black'}>PRICE</Button>
        <Button fontWeight={450} width={{ base: "20px", md: "30px", lg: "70px" }} bg={"rgba(255,255,255,0)"} height={"25px"} border={"1px solid black"} borderRadius={"0px"}  fontSize={{ base: "xx-small", md: "x-small", lg: "small" }} color={'black'}>COLOUR</Button>

        </Flex>
        
    <Grid  marginTop={"120px"} border={'1px solid black'} display={'grid'} gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(6,1fr)" }}>
        



        {dataMen?.map((item)=>(
            <Grid >
          
             
                <Grid  border={'1px solid black'}  all textAlign={'left'}  bg={'white'} color={"black"} 
                cursor={'pointer'} justifyContent={"center"} >
                <Img onClick={()=>handleProducet(item.id)} width={"250px"} src={item?.images[0]}/>
               <Text  width={"200px"} fontSize={"x-small"}> {item.name}</Text>
               <Text fontSize={"x-small"}>{item.price}</Text>
               {/* <Button  textAlign={"center"} justifyContent={"center"}
                borderRadius={"200px"} width={"5px"} bg={"gray.50"} 
                color={"black"} border={"1px solid black"}>+</Button> */}
                </Grid>
            
            </Grid>
        ))}
    
   
        
        </Grid >
        <Grid padding={"10px"} marginLeft={"300px"} textAlign={'left'} marginTop={"180px"} marginBottom={"100px"} >
        <Text marginTop={"10px"} fontSize={'small'}  color={"grey"}>MEN'S PUFFER COATS TO KEEP EVERY LOOK WARM AND ON-TREND</Text>
        <Text marginTop={"10px"}  fontSize={'x-small'}  color={"grey"}>Zara’s range of men’s outerwear sees coats and jackets for men as more than just a warm layer to protect from weather conditions. Nowadays, men are<br/> 
        choosing to express themselves in every aspect of their outfits, with the outer 
        layers acting as a seal of approval for their personal taste and style.</Text>
        <Link textDecoration={"underline"} color={"grey"} fontSize={"x-small"}>view</Link>
        </Grid>
        </Grid>
  )
}

export default Men