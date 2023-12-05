
import { ReactNode } from 'react'
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Grid,
  Flex,
} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'


import { useToast } from '@chakra-ui/react'

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}



export default function Footer() {




  return (
    <Box
      bg={"white"}
      color={"black"}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            
            <ListHeader><Text textAlign={'left'} fontSize={"x-small"}>HELP</Text></ListHeader>
            <Grid textAlign={'left'} fontSize={"xx-small"}>
            <Box as="a" href={'#'}>
            MY ZARA ACCOUNT
            </Box>
            <Box as="a" href={'#'}>
            ITEMS AND SIZES
            </Box>
            <Box as="a" href={'#'}>
            GIFT OPTIONS
            </Box>
            <Box as="a" href={'#'}>
            SHIPPING
            </Box>
            <Box as="a" href={'#'}>
            PAYMENT AND INVOICES
            </Box>
            <Box as="a" href={'#'}>
            MY PURCHASES
            </Box>
            <Box as="a" href={'#'}>
            EXCHANGES, RETURNS AND 
            </Box>
            <Box as="a" href={'#'}>
            REFUNDS
            </Box>
            <Box as="a" href={'#'}>
            ZARA EXPERIENCIES
            </Box>
            </Grid>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader><Text textAlign={'left'} fontSize={"x-small"}>FOLLOW US</Text></ListHeader>
            <Grid textAlign={'left'} fontSize={"xx-small"}>

           
            <Box as="a" href={'#'}>
            NEWSLETTER
            </Box>
            <Box as="a" href={'#'}>
            INSTAGRAM
            </Box>
            <Box as="a" href={'#'}>
            FACEBOOK
            </Box>
            <Box as="a" href={'#'}>
            TWITTER
            </Box>
            <Box as="a" href={'#'}>
            PINTEREST
            </Box>
            <Box as="a" href={'#'}>
            YOUTUBE
            </Box>
            </Grid>
            
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader><Text textAlign={'left'} fontSize={"x-small"}>COMPANY</Text></ListHeader>
            <Grid textAlign={'left'} fontSize={"xx-small"} >
            <Box as="a" href={'#'}>
            ABOUT US
            </Box>
            <Box as="a" href={'#'}>
            JOIN LIFE
            </Box>
            <Box as="a" href={'#'}>
            OFFICES
            </Box>
            <Box as="a" href={'#'}>
            STORES
            </Box>
            <Box as="a" href={'#'}>
            WORK WITH US
            </Box>
            </Grid>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader><Text textAlign={'left'} fontSize={"x-small"}>POLICIES</Text></ListHeader>
            <Grid textAlign={'left'} fontSize={"xx-small"} >
            <Box as="a" href={'#'}>
            PRIVACY POLICY
            </Box>
            <Box as="a" href={'#'}>
            PURCHASE CONDITIONS
            </Box>
            <Box as="a" href={'#'}>
            GIFT CARD CONDITIONS
            </Box>
            <Box as="a" href={'#'}>
            COOKIES SETTINGS
            </Box>
            </Grid>
           
          </Stack>
        </SimpleGrid>
      </Container>

        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
            <Flex>
            <Text marginTop={"120px"} color={'grey'} fontSize={"xx-small"}>INDIA</Text>
            <Text marginLeft={"930px"} marginTop={"120px"} color={'grey'} fontSize={"xx-small"} >ENGLISH © ALL RIGHTS RESERVED</Text>
            </Flex>

          <Stack direction={'row'} spacing={6}>
            
            
            
          </Stack>
        </Container>
        <Flex padding={"70px"} marginTop={"50px"}  textAlign={"left"} color={'grey'} fontSize={"xx-small"}>NAME AND ADDRESS OF THE MANUFACTURER:<br/>
INDUSTRIA DE DISEÑO TEXTIL, S.A. (INDITEX, S.A.)<br/>
AVENIDA DE LA DIPUTACIÓN, EDIFICIO INDITEX, 15143, ARTEIXO (A CORUÑA), SPAIN<br/></Flex>
      </Box>
   
  )
}