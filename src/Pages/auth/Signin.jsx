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
  const handleRegistaer=()=>{
    navigate('/signup')
  }

  const handleLogin=()=>{
    if(email===""&&password===""){
     alert('please enter valid data')
    }
  }

  return (
    <div>
      <Text>NEED AN ACCOUNT?</Text>
      <Flex marginRight={"500px"} marginTop={"22px"} marginLeft={"800px"}>
        <Button fontSize={"small"} fontWeight={"1px"} height={"33px"} bg={'white'} border={"1px solid black"} borderRadius={"0px"} width={"400px"} onClick={handleRegistaer}>REGISTER </Button>
        </Flex>

      <Grid gap={"20px"} paddingLeft={"15px"}>
        

     <Text fontWeight={"small"} marginRight={"1410px"} >LOG IN TO YOUR ACCOUNT</Text> 
     <Input width={"400px"} onChange={handleEmail} placeholder='EMAIL'/>
     <Input width={"400px"} onChange={handlePassword} placeholder='PASSWORD'/>
     <Button onClick={handleLogin} bgColor={'white'} borderRadius={'0px'} border={'1px solid black'} width={"400px"}>LOGIN</Button>
     <Text marginRight={"1050px"} fontSize={'smaller'}>Have you forgotten your password?</Text>



    
      </Grid>
    </div>
  )
}

export default Signin