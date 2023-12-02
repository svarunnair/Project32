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

      <Grid gap={"20px"}>
        <Flex  marginLeft={"800px"}><Button onClick={handleRegistaer}>REGISTER NOW</Button></Flex>

     <Text fontWeight={"small"} marginRight={"1010px"} marginTop={"10px"}>LOG IN TO YOUR ACCOUNT</Text> 
     <Input width={"400px"} onChange={handleEmail} placeholder='EMAIL'/>
     <Input width={"400px"} onChange={handlePassword} placeholder='PASSWORD'/>
     <Button onClick={handleLogin} width={"400px"}>LOGIN</Button>
     <Text marginRight={"1050px"} fontSize={'smaller'}>Have you forgotten your password?</Text>



    
      </Grid>
    </div>
  )
}

export default Signin