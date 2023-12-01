import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'
import { Button, Center, Grid, Img, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


function Men() {

    const dataMen=useSelector((store)=>store.data.getData)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    console.log('dataMen',dataMen)

    useEffect(()=>{
        dispatch(getData())
    },[])
    const handleProducet=(id)=>{
        navigate(`/detail/${id}`)
    }
  return (
    <Grid display={'grid'} gridTemplateColumns={"repeat(6,1fr)"}>
        
        {dataMen?.map((item)=>(
            <Grid >
          
             
                <Grid  all textAlign={'center'}  bg={'white'} color={"black"} cursor={'pointer'} justifyContent={"center"} >
                <Img onClick={()=>handleProducet(item.id)} width={"210px"} src={item?.images[1]}/>
               <Text width={"200px"} fontSize={"small"}> {item.name}</Text>
               <Text>{item.price}</Text>
               <Button>+</Button>
                </Grid>
            
            </Grid>
        ))}
    
        
        </Grid>
  )
}

export default Men