import { Button, Grid, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postAuth } from '../../Redux/auth/authAction'

function Signup() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }
  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }
  const handleLogin=()=>{
    if(email===""&&password===""){
      alert('please enter valid email id and password')
    }
    else{
    let data={
      email:email,
      password:password
    }
    dispatch(postAuth(data))
    navigate('/cover')}
  }
  return (
    <div>
<Grid marginLeft={"50px"} gap={"15px"}>

<Text marginRight={"1010px"} marginTop={"10px"}>LOG IN TO YOUR ACCOUNT</Text> 
<Input width={"400px"} onChange={handleEmail} placeholder='EMAIL'/>
<Input width={"400px"} onChange={handlePassword} placeholder='PASSWORD'/>
<Button width={"400px"} onClick={handleLogin}>LOGIN</Button>
<Text marginRight={"900px"}>Have you forgotten your password?</Text>


</Grid>
     
    </div>
  )
}

export default Signup