import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/data/action'
import { Button, Grid, Img } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Kids() {

  const kidsData=useSelector((store)=>store.data.getData)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleProduct=(id)=>{
    navigate(`/detail/${id}`)
  }

  console.log("kids",kidsData)

  useEffect(()=>{
    dispatch(getData())
  },[])
  return (
    <Grid border={'solid black'} cursor={'pointer'} fontSize={"xx-small"} display={'grid'} gridTemplateColumns={"repeat(6,1fr)"}>

      {kidsData.map((item)=>(

        <Grid>

        {item.name}<br/>
        {item.price}<br/>
        <Img onClick={()=>handleProduct(item.id)} width={"210px"} src={item.images[0]}/><br/>
        <Button  width={"210px"}>+</Button>
          
        
        </Grid>
      ))}


    </Grid>
  )
}

export default Kids