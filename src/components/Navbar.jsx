import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Img,
    Input,
    Grid,
    scroll,
    Hide,
  } from '@chakra-ui/react'
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import PublicRoutes from '../Routes/PublicRoutes'
import PrivateRoutes from '../Routes/PrivateRoutes'
import zara from '../components/zara.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getCart, getData } from '../Redux/data/action'
import { getAuth } from '../Redux/auth/authAction'
import Footer from './Footer'
  

  
  const Links = ['Dashboard', 'Projects', 'Team']
  
  // const NavLink = () => {
  
  
  //   return (
  //     <Box
  //       as="a"
  //       px={2}
  //       py={1}
  //       rounded={'md'}
  //       _hover={{
  //         textDecoration: 'none',
  //         bg: useColorModeValue('gray.200', 'gray.700'),
  //       }}
  //       href={'#'}>
  //       {"children"}
  //     </Box>
  //   )
  // }
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let token=localStorage.getItem('token')
    const [show,setShow]=useState(false)
    const navigate=useNavigate()
    const path=useLocation()
    const dispatch=useDispatch()
    const authData=useSelector((store)=>store.auth.getAuth)

    console.log("NavauthData",authData)



    const shoping=useSelector((store)=>store.data.getCart)

    console.log('shoping.......',shoping)
    
    
    const handleMen=()=>{
      navigate('/men')
    }
    const handleWomen=()=>{
      navigate('/women')
    }
    const handleKids=()=>{
      navigate('/kids')
    }
    const handleBeauty=()=>{
      navigate('/beauty')
    }
    const handleLogin=()=>{
      navigate('/signin')
    }
    const handleHelp=()=>{
      navigate('/help')
    }
    const handleShoping=()=>{
      navigate('/cart')
    }
    const handleImage=()=>{
      navigate('/')
    }
    const handleSearch=()=>{
      navigate('/search')
    }
    useEffect(()=>{
     dispatch(getCart())
    },[])


    useEffect(()=>{
     dispatch(getAuth())
    },[])
    const items=shoping.length
    console.log("itemsssss",items)

    let name=authData.map((item)=>{
      return item.name})

      
      const handleMeanu=()=>{
        if(show===false){
          setShow(true)
        }
        if(show===true){
          setShow(false)
        }
      }

      const handleShow=()=>{
        setShow(false)
       
      }
      console.log("show",show)

    return (
      <>
        <Box bg={"transparent"} position={'sticky'}  top="0"
        zIndex="1000" >
          
          
          <Flex  h={16} alignItems={'center'} justifyContent={'space-between'}>
            {/* <Img  width={"600px"} src={zara}/> */}
            
            <Flex onClick={handleMeanu} cursor={"pointer"}>
              {show?<Text marginLeft={"20px"} fontSize={"xx-large"} 
            color={"black"}>x</Text>:<Text marginLeft={"20px"} fontSize={"xx-large"} 
            color={"black"}>=</Text>}
            </Flex>

          <Box    marginTop={"155px"}>
          
           
            <svg onClick={handleImage} cursor={'pointer'} width={{ base: "190px", md: "220px", lg: "275px" }} 
            aria-label="ZARA India logo. Go to home page" 
            class="layout-catalog-logo-icon layout-catalog-logo-icon--products-category-view" 
            viewBox="0 0 132 55" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" 
              d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path></svg>
            
            {show&&<Box border={'1px solid black'} marginLeft={"20px"} marginTop={86}  position={"sticky"} 
              maxHeight= {"400px"} overflow={"auto"} bg={'white'} color={'black'}>
             
              <Img  marginLeft={3.5} width={304} src="data:image/png;base64,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"/>
             <Grid width={400} border={"1px solid black"} >
              <Flex marginLeft={130} gap={6}>
              <Text borderRadius={"0px"}>MEN</Text>
              <Text borderRadius={"0px"}>WOMEN</Text>
              <Text borderRadius={"0px"}>KIDS</Text>
              <Text borderRadius={"0px"}>BEAUTY</Text>

              </Flex>
              <Box marginTop={12}  marginBottom={75} marginLeft={220} borderRadius={'0px'} >
                <Button fontSize={"small"} fontWeight={90} marginLeft={115}  width={11} height={7} bg={'transparent'} border={"1px solid black"} borderRadius={'0px'}>NEW</Button><br/>
                <Button fontSize={"small"} fontWeight={90} width={97} height={7} bg={'transparent'} border={"1px solid black"} borderRadius={'0px'}>ZARA ORIGINS</Button>
                <Button fontSize={"small"} fontWeight={90} width={67} height={7} bg={'transparent'} border={"1px solid black"} borderRadius={'0px'}>GIFTS</Button>
            
              <Button marginTop={2} color={"orange"}  fontSize={"small"} fontWeight={90} marginLeft={91}  
              width={77} height={7} bg={'transparent'} border={"1px solid black"}
               borderRadius={'0px'}>WEDDING <Text fontSize={5}>NEW</Text></Button>
           
           
              </Box>
              
             </Grid>
              </Box>}
            

            <Flex marginTop={"25px"} gap={"12px"}>

{path.pathname==="/"&&<Box onClick={handleMen} cursor={'pointer'}>MEN</Box>}
{path.pathname==="/"&&<Box onClick={handleWomen} cursor={'pointer'}>WOMEN</Box>}
{path.pathname==="/"&&<Box onClick={handleKids} cursor={'pointer'}>KIDS</Box>}
{path.pathname==="/"&& <Box onClick={handleBeauty} cursor={'pointer'}>BEAUTY</Box>}

</Flex>
            </Box>
            <IconButton 
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
             
            
<Grid width={{ base: "40px", md: "70px", lg: "110px" }} marginLeft={"240px"} marginTop={"25px"}>

{path.pathname!=="/search"&&<Input fontWeight={11} onClick={handleSearch} bg={"white"}  
width={{ base: "40px", md: "270px", lg: "360px" }} 
border={"groove"}
 borderRadius={"0px"} color={'red'} height={{ base: "28px", md: "30px", lg: "32px" }}
 fontSize={"small"}  _placeholder={{ color: 'black', textAlign:"right" }}  placeholder='SEARCH'/>}

</Grid>
             
             <Flex cursor={'pointer'}  color={'black'} marginLeft={"250px"}  gap={"20px"}>

           {token?<Text fontWeight={90} marginTop={"-0px"} fontSize={'x-small'} onClick={handleLogin} >{name}</Text>:<Text fontSize={'x-small'} fontWeight={90} onClick={handleLogin}>LOG IN</Text>}
             <Text fontWeight={90} fontSize={'x-small'} onClick={handleHelp}>HELP</Text>
             <Text fontWeight={90} fontSize={'x-small'} onClick={handleShoping}>SHOPING BAG({items})</Text>

              
             </Flex>
             
             
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {/* {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))} */}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  {/* <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  /> */}
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {/* {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))} */}
              </Stack>
            </Box>
          ) : null}
        </Box>
  
        <Box onClick={handleShow} p={4}>
       
       

        {!token&&<PublicRoutes/>}
{token&&<PrivateRoutes/>}

        </Box>
      </>
    )
  }