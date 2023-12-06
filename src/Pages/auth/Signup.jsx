import { Button, Checkbox, Grid, Input, Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postAuth } from '../../Redux/auth/authAction'

function Signup() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const [number,setNumber]=useState('')

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleName=(e)=>{
    let value=e.target.value 
    setName(value.toUpperCase())
  }
  const handleNumber=(e)=>{
    let value=e.target.value 
    setNumber(value)
  }

  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }
  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }
  const handleLogin=()=>{
    if(email===""&&password===""&&name===""&&number===""){
      alert('please enter valid email id and password')
    }
    else{
    let data={
      email:email,
      password:password,
      name:name,
      number:number
    }
    dispatch(postAuth(data))
    navigate('/cover')}
  }

  return (
    <div>
<Grid marginLeft={"50px"} gap={"15px"}>

<Text fontWeight={"small"} marginRight={"1010px"} marginTop={"10px"}>PERSONAL DETAILS</Text> 
<Input width={"400px"} onChange={handleEmail} placeholder='EMAIL'/>
<Input width={"400px"} onChange={handlePassword} placeholder='PASSWORD'/>
<Input width={"400px"} onChange={handleName} placeholder='NAME'/>
<Input width={"400px"} onChange={handleNumber} placeholder='MOBILE NUMBER'/>

<Text marginRight={"900px"} fontSize={'x-small'}>We will send you an SMS to verify your phone number</Text>
<Checkbox ><Text fontSize={'smaller'}>I wish to receive Zara news on my e-mail</Text></Checkbox>
<Checkbox ><Text fontSize={'smaller'}>I accept the privacy statement</Text></Checkbox>
<Button marginBottom={"150px"} width={"400px"} onClick={handleLogin}>CREATE ACCOUNT</Button>


</Grid>


     
    </div>
  )
}

export default Signup