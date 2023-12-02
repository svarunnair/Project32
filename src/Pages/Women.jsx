import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'
import { Button, Grid, Img } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Women() {

  const womenData=useSelector((store)=>store.data.getData)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  console.log("women",womenData)

  useEffect(()=>{
    dispatch(getData())
  },[])

  const handleProduct=(id)=>{
     navigate(`/detail/${id}`)
  }
  return (
    <Grid border={'solid black'} fontSize={"xx-small"}  display={'grid'} gridTemplateColumns={"repeat(6,1fr)"}>
      {womenData.map((item)=>(
        <Grid cursor={'pointer'}>
        {item.name}<br/>
        {item.price}<br/>
        <Img onClick={()=>handleProduct(item.id)} width={"210px"} src={item.images[0]}/>
        <Button width={"210px"}>+</Button>
        
        </Grid>
      ))}
     </Grid>
  )
}

export default Women