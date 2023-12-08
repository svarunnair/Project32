import { Box, Button, Grid, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { patchAddress } from '../Redux/data/action'

function Edit() {

    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [location,setLocation]=useState('')
    const [state,setState]=useState('')
    const [mobile,setMobile]=useState('')
    const [more,setMore]=useState('')
    const [city,setCity]=useState('')
    const [region,setRegion]=useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const params=useParams()

    console.log("paramsss",params)


    const handleName=(e)=>{
        let value =e.target.value 
        setName(value)
    }
    const handleAddress=(e)=>{
        let value = e.target.value 
        setAddress(value)
    }
    const handleLocation=(e)=>{
        let value = e.target.value 
        setLocation(value)
    }
    const handleState=(e)=>{
        let value = e.target.value 
        setState(value)
    }
    const handleMobile=(e)=>{
        let value = e.target.value 
        setMobile(value)
    }
    const handleMore=(e)=>{
        let value = e.target.value 
        setMore(value)
    }
    const handleCity=(e)=>{
        let value = e.target.value 
        setCity(value)
    }
    const handleRegion=(e)=>{
        let value = e.target.value 
        setRegion(value)
    }

    let id=params.id 
    const handleContinue=()=>{
        let data={
            name:name,
            address:address,
            location:location,
            state:state,
            mobile:mobile,
            more:more,
            city:city,
            region:region    
        }
        dispatch(patchAddress(data,id))
    }



  return (
    <Grid >

       

<Grid marginTop={"100px"} color={"black"} display={'grid'} gridTemplateColumns={"repeat(2,1fr)"}>

<Input _hover={{ bg: "white" }} fontSize={"x-small"} borderRadius={"0px"}  _placeholder={{ color: 'grey' }} color={"black"} border={"1px solid black"} onChange={handleName} width={"300px"} placeholder='NAME' />
<Input _hover={{ bg: "white" }} fontSize={"x-small"} borderRadius={"0px"}  _placeholder={{ color: 'grey' }} color={"black"} border={"1px solid black"} onChange={handleAddress} marginRight={"650px"} width={"300px"} placeholder='ADDRESS' />
<Input _hover={{ bg: "white" }} fontSize={"x-small"} borderRadius={"0px"}  _placeholder={{ color: 'grey' }} color={"black"} border={"1px solid black"} onChange={handleLocation} width={"300px"} placeholder='LOCATION' />
<Input _hover={{ bg: "white" }} fontSize={"x-small"} borderRadius={"0px"}  _placeholder={{ color: 'grey' }} color={"black"} border={"1px solid black"} onChange={handleState} width={"300px"} placeholder='STATE' />
<Input _hover={{ bg: "white" }} fontSize={"x-small"} borderRadius={"0px"}  _placeholder={{ color: 'grey' }} color={"black"} border={"1px solid black"} onChange={handleMobile} width={"300px"} placeholder='MOBILE NUMBER' />
<Input _hover={{ bg: "white" }} fontSize={"x-small"} borderRadius={"0px"}  _placeholder={{ color: 'grey' }} color={"black"} border={"1px solid black"} onChange={handleMore} width={"300px"} placeholder='MORE INFO' />
<Input _hover={{ bg: "white" }} fontSize={"x-small"} borderRadius={"0px"}  _placeholder={{ color: 'grey' }} color={"black"} border={"1px solid black"} onChange={handleCity} width={"300px"} placeholder='CITY' />
<Input _hover={{ bg: "white" }} fontSize={"x-small"} borderRadius={"0px"}  _placeholder={{ color: 'grey' }} color={"black"} border={"1px solid black"} onChange={handleRegion} width={"300px"} placeholder='REGION' />

</Grid >


<Button borderRadius={"0px"} bg={"black"} color={"white"} onClick={handleContinue}>CONTINUE</Button>
    </Grid>
  )
}

export default Edit