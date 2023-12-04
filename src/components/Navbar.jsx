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
  } from '@chakra-ui/react'
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import PublicRoutes from '../Routes/PublicRoutes'
import PrivateRoutes from '../Routes/PrivateRoutes'
import zara from '../components/zara.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCart, getData } from '../Redux/data/action'
  

  
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
    const navigate=useNavigate()
    const path=useLocation()
    const dispatch=useDispatch()

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

    const items=shoping.length
    console.log("itemsssss",items)
    return (
      <>
        <Box bg={"transparent"} position={'sticky'}  top="0"
        zIndex="1000" >
          <Flex  h={16} alignItems={'center'} justifyContent={'space-between'}>
            {/* <Img  width={"600px"} src={zara}/> */}

          <Box  marginLeft={"50px"} marginTop={"115px"}>
            <svg onClick={handleImage} cursor={'pointer'} width={"265px"} 
            aria-label="ZARA India logo. Go to home page" 
            class="layout-catalog-logo-icon layout-catalog-logo-icon--products-category-view" 
            viewBox="0 0 132 55" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" 
              d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path></svg>
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
             
            
<Grid marginLeft={"50px"} marginTop={"25px"}>

{path.pathname!=="/search"&&<Input onClick={handleSearch}  width={"360px"} border={"groove"} borderRadius={"0px"} color={'red'} height={"30px"}
 fontSize={"small"}  _placeholder={{ color: 'black', textAlign:"right" }}  placeholder='SEARCH'/>}

</Grid>
             
             <Flex cursor={'pointer'}  color={'black'} marginLeft={"300px"} gap={"20px"}>

             <Text fontSize={'x-small'} onClick={handleLogin}>LOG IN</Text>
             <Text fontSize={'x-small'} onClick={handleHelp}>HELP</Text>
             <Text fontSize={'x-small'} onClick={handleShoping}>SHOPING BAG({items})</Text>

              
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
  
        <Box p={4}>


        {!token&&<PublicRoutes/>}
{token&&<PrivateRoutes/>}

        </Box>
      </>
    )
  }