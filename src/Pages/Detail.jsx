import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getData, getDetails, postCart } from '../Redux/data/action'
import { Box, Button, Flex, Grid, Img, Text } from '@chakra-ui/react'

function Detail() {
    const params=useParams()
    const navigate=useNavigate()
    const maninData=useSelector((store)=>store.data.getData)

    console.log("mainData",maninData)

    console.log("params",params)


    const details=useSelector((store)=>store.data.getDetails)
    const dispatch=useDispatch()
    const [count,setCount]=useState(0)
    const [data,setData]=useState([])
    

    const handleNext=()=>{
      if(count>=2){
        setCount(0)
      }
      else{
        setCount(count+1)
      }   
    }
    const handlePrev=()=>{
      if(count<=0){
        setCount(2)
      }
      else{
        setCount(count-1)
      }
      
    }

    useEffect(()=>{
    dispatch(getData())
    },[])

    

useEffect(()=>{
   if(Object.keys(details).length>0){
    setData(details.images)
   }
  
},[details])

    console.log("data",data)
    console.log("detail",details)

    useEffect(()=>{
      dispatch(getDetails(params?.id))
    },[params])

    const handleBag=()=>{
      details.quant=1
      dispatch(postCart(details))    
    }

  return (
    <Box >
        <Grid textAlign={"left"} marginLeft={"10px"} color={"black"} marginTop={"300px"} width={"260px"} height={"300px"} border={"1px solid black"}>

        <Text marginLeft={"10px"} marginTop={"20px"} fontSize={"small"}>COMPOSITION, CARE & ORIGIN</Text><br/>
        <Text marginLeft={"10px"} marginTop={"-90px"} fontSize={"small"}>COMPOSITION</Text>
        <Text marginLeft={"10px"} marginTop={"-80px"} fontSize={"x-small"}>We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a </Text>
          <Link><Text textDecoration={"underline"}  marginLeft={"10px"} marginTop={"-40px"} fontSize={"xx-small"}>view more</Text></Link>
          </Grid>
     
       <Grid justifyContent={"center"}>

      
       <Img marginTop={"-400px"} width={"250px"} src={data?.[count]}/>
       <Flex>
       <Button color={'black'} onClick={handleNext}>next</Button>
       <Button marginBottom={"200px"} color={'black'} onClick={handlePrev}>prev</Button>

       </Flex>
       
       </Grid>
       <Grid marginTop={"-300px"} marginLeft={"800px"} marginBottom={"100px"}>
        <Box></Box>

        <Box marginLeft={"20px"} padding={"20px"} textAlign={'left'} marginTop={"-350px"} border={"1px solid black"} width={"300px"} height={"380px"} fontSize={"small"}  color={"black"}>
<Text  fontSize={"xx-small"}>FEW ITEMS LEFT<br/> </Text>
{details?.name}<br/>
₹{details?.price}.00<br/>
<Text fontSize={"xx-small"}>MRP incl. of all taxes</Text><br/>
<Text fontSize={"xx-small"}>CHECK IN-STORE AVAILABILITY
SHIPPING, <br/>EXCHANGES AND RETURNS</Text>

 </Box>
 <Button marginTop={"-30px"} marginLeft={"20px"}  fontSize={"smaller"} borderRadius={"0px"}
  height={"30px"} width={"300px"} border={"1px solid black"}  
  color={'black'} onClick={()=>handleBag()}>ADD</Button>
       </Grid>

      <Flex color={"black"}>
       <Text marginBottom={"20px"} fontSize={"x-small"}>YOU MAY ALSO LIKE</Text>
      </Flex>

      <Grid display={'grid'} gridTemplateColumns={"repeat(6,1fr)"}>
        {maninData.map((item)=>(
          <Grid marginBottom={"20px"} fontSize={"xx-small"} color={"black"}>
          <Img border={'1px solid black'} src={item.images[0]}/>
          {item.name}<br/>
          ₹ {item.price}.00
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Detail