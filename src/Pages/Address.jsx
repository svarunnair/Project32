import { Button, Grid, Input, Text, grid } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postAddress, postBilling } from '../Redux/data/action'
import { useDispatch } from 'react-redux'

function Address() {
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

    const handleContinue=()=>{
        if(name===""||address===""||location===""||state===""||mobile===""||city===""||region===""){
            alert('please fill the details')
        }
        else{

            let data={
                name:name,
                address:address,
                location:location,
                state:state,
                mobile:mobile,
                more:more,
                city:city,
                region:region,
            }
            dispatch(postAddress(data))
            navigate('/billing')

        }
        
    }







  return (
    <Grid  >
        <Text>EDIT YOUR BILLING ADDRESS
To place your order, you must first fill in your account details. You can change them in your account at any time.</Text>

<Grid display={'grid'} gridTemplateColumns={"repeat(2,1fr)"}>

    <Input onChange={handleName} width={"300px"} placeholder='NAME' />
    <Input onChange={handleAddress} marginRight={"650px"} width={"300px"} placeholder='ADDRESS' />
    <Input onChange={handleLocation} width={"300px"} placeholder='LOCATION' />
    <Input onChange={handleState} width={"300px"} placeholder='STATE' />
    <Input onChange={handleMobile} width={"300px"} placeholder='MOBILE NUMBER' />
    <Input onChange={handleMore} width={"300px"} placeholder='MORE INFO' />
    <Input onChange={handleCity} width={"300px"} placeholder='CITY' />
    <Input onChange={handleRegion} width={"300px"} placeholder='REGION' />

</Grid>

<Button onClick={handleContinue} marginLeft={"900px"} width={"250px"}>Continue</Button>


    </Grid>
  )
}

export default Address