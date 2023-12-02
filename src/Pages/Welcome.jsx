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

<Grid>
        <Flex >
<Img cursor={'pointer'}  onClick={handleImage} src= "data:image/png;base64,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"/>

<Flex fontFamily={"unset"} fontSize={"13px"} marginLeft={"450px"}>
<Input marginTop={"15px"} height={"30px"} width={"300px"} background={"black"} color={'white'} placeholder='SEARCH'/>

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