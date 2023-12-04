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

    console.log("mainDataaaaaa",mainData)

    const handleSearch=(e)=>{
        let value=e.target.value 
        setSearch(value)   
    }

    useEffect(()=>{
        dispatch(getData())
    },[])
  return (
    <Grid marginTop={"100px"}>
     
        <Input onChange={handleSearch} border={"1px solid black"} borderRadius={"0px"}
         fontSize={"smaller"} _placeholder={{ color: 'grey' } }
          placeholder='SEARCH FOR AN ITEM, COLOUR, COLLECTION...'/>
<Text color={"grey"} fontSize={"x-small"}>YOU MIGHT BE INTERESTED IN</Text>
          <Grid display={"grid"} gridTemplateColumns={"(repeat(6,1fr))"}>
            
            {mainData.map((item)=>(
                <>
                <Img width={"250px"} src={item.images[0]}/>

                </>
            ))}
          </Grid>
    </Grid>
  )
}

export default Search