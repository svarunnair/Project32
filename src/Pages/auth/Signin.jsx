import { Button, Flex, Grid, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

 



function Signin() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  
  


  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }
  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }
  const handleRegister=()=>{
    navigate('/signup')
  }

  
  const handleLogin=()=>{

  }
  const handleSignout=()=>{
    localStorage.clear()
    navigate('/')
  }

  return (
    <div>
      <Text fontSize={17} fontWeight={20} marginTop={'90px'} marginRight={"420px"} marginLeft={"400px"}>NEED AN ACCOUNT?</Text>
      
      <Flex  width={"400px"} marginRight={"900px"} 
      marginTop={"130px"} marginLeft={"520px"}>

        <Button marginTop={"-100px"} fontSize={"small"} fontWeight={7} width={"350px"}  height={"30px"} bg={'white'}
         border={"1px solid black"} borderRadius={"0px"}onClick={handleRegister}>
          REGISTER </Button>

        </Flex>

      <Grid fontWeight={20} marginLeft={"40px"} textAlign={"left"} width={"400px"} marginTop={"-180px"}  gap={"20px"} paddingLeft={"15px"}>
        
<Flex marginTop={"40px"} display={"flex"}>
<Text> LOG IN TO YOUR ACCOUNT</Text>
</Flex>
     
     <Input fontSize={12} marginTop={"10px"} borderRadius={'0px'}  width={"400px"} onChange={handleEmail} placeholder='EMAIL'/>
     <Input fontSize={12} marginTop={"10px"} borderRadius={'0px'} width={"400px"} onChange={handlePassword} placeholder='PASSWORD'/>
     <Button height={"30px"} marginTop={"10px"} onClick={handleLogin} fontWeight={7} bgColor={'white'} borderRadius={'0px'} 
     border={'1px solid black'} width={"400px"}>LOGIN</Button>
     
     <Text textAlign={"left"} marginRight={"1050px"} fontSize={'smaller'}>Have you forgoten your password?</Text>
    
     

     <Text cursor={"pointer"}  fontSize={12} onClick={handleSignout}>SIGNOUT</Text>



    
      </Grid>
    </div>
  )
}

export default Signin