import { Button, Flex, Img, Input, Text } from '@chakra-ui/react'
import React from 'react'

function Help() {


  return (
    <div>
        <Flex>
        <Input  width={"400px"} placeholder='HOW CAN WE HELP YOU?'/>
        </Flex>
       
        <Img width={"1500px"} src='https://static.zara.net/photos///contents/mkt/spots/aw23-north-man-gifts/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-50429c03-75bd-4ffd-b22e-cb5ab45ed246-default_0.jpg?ts=1701435993273'/>
       <Text marginRight={"1000px"} marginBottom={"40px"} marginTop={"100px"}>FREQUENTLY ASKED QUESTIONS</Text>
       <Flex marginBottom={"100px"} gap={"40px"} fontSize={'x-small'}>
       <Button>HOW TO RETURN</Button>
        <Button>REFUNDS</Button>
        <Button>ITEMS AVAILABLE</Button>
        <Button>ORDER STATUS</Button>

       </Flex>
       
    </div>
  )
}

export default Help