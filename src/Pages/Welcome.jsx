import { Flex, Grid, Img, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Cover from './Cover'
import zara from '../components/zara.png'
import { useLocation, useNavigate } from 'react-router-dom'
import PublicRoutes from '../Routes/PublicRoutes'
import PrivateRoutes from '../Routes/PrivateRoutes'

function Welcome() {
  let token=localStorage.getItem('token')
  const navigate=useNavigate()
  const path=useLocation()
  console.log("path",path)


  const handleClick=()=>{
    navigate('/signin')
  }
  const handleImage=()=>{
    navigate('/cover')
  }
  const handleMen=()=>{
    navigate('/men')
  }
  const handleWomen=()=>{
    navigate('/women')
  }
  const handleKids=()=>{
    navigate('/kids')
  }
  const handleCart=()=>{
    navigate('/cart')
  }
  const handleHelp=()=>{
    navigate('/help')
  }


  return (

<Grid position={"absolute"}>
        <Flex >
<Img width={"200px"} cursor={'pointer'}  onClick={handleImage} src= {zara}/>

<Flex fontFamily={"unset"} fontSize={"13px"} marginLeft={"450px"}>
<Input position="sticky"  top="0"
        zIndex="1000" marginTop={"15px"} height={"30px"} width={"300px"} border="1px solid black" borderRadius={'0px'}  bgColor={'white'}  placeholder='SEARCH'/>

<Text onClick={handleClick}  padding={"10px"} cursor={'pointer'} >LOGIN</Text>
<Text onClick={handleHelp}  padding={"10px"} cursor={'pointer'}>HELP</Text>
<Text onClick={handleCart} padding={"10px"} cursor={'pointer'}>SHOPPING BAG({})</Text>

</Flex>


        </Flex>
        <Flex fontWeight={"lighter"} gap={"10px"}>
 {path.pathname==="/cover"&&<Text cursor={'pointer'} onClick={handleMen}>MEN</Text>}
 {path.pathname==="/cover"&&<Text cursor={'pointer'}  onClick={handleWomen}>WOMEN</Text>}
 {path.pathname==="/cover"&&<Text cursor={'pointer'}  onClick={handleKids}>KIDS</Text>}

 {path.pathname==="/"&&<Text onClick={handleMen}>MEN</Text>}
 {path.pathname==="/"&&<Text  onClick={handleWomen}>WOMEN</Text>}
 {path.pathname==="/"&&<Text  onClick={handleKids}>KIDS</Text>}


</Flex>


{!token&&<PublicRoutes/>}
{token&&<PrivateRoutes/>}

    </Grid>
  )
}

export default Welcome