import { Grid, Img, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getData } from '../Redux/data/action'

function Search() {
    const navigate=useNavigate()
    const [search,setSearch]=useState('')
    const mainData=useSelector((store)=>store.data.getData)
    const dispatch=useDispatch()
    const [data,setData] =useState([])



    console.log("mainDataaaaaa",mainData)

    const handleSearch=(e)=>{
        let value=e.target.value 
        setSearch(value)   
    }
    useEffect(()=>{
        setData(mainData)
    },[mainData])

    useEffect(()=>{
        dispatch(getData())
    },[])
  return (
    <Grid marginTop={"100px"}>
        
     
        <Input position={'sticky'}  top="200" bg={'white'}
        zIndex="1000" onChange={handleSearch} border={"1px solid black"} borderRadius={"0px"}
         fontSize={"smaller"} _placeholder={{ color: 'grey' } }
          placeholder='SEARCH FOR AN ITEM, COLOUR, COLLECTION...'/>
<Text marginTop={"30px"} marginBottom={"30px"} marginLeft={"1050px"} color={"grey"} fontSize={"x-small"}>YOU MIGHT BE INTERESTED IN</Text>
          <Grid display={"grid"} gridTemplateColumns={"repeat(6,1fr)"}>
            
            {data.map((item)=>(
                <Grid  textAlign={"left"} border={"1px solid black"}>
                <Img  width={"250px"} src={item.images[0]}/><br/>
                <Text marginLeft={"10px"} marginTop={"-20px"} fontSize={"xx-small"}   color={"grey"}>{item.name}</Text><br/>
                <Text marginLeft={"10px"} marginTop={"-20px"} fontSize={"xx-small"} color={"grey"}>₹ {item.price}</Text>

                </Grid>
            ))}
          </Grid>
    </Grid>
  )
}

export default Search