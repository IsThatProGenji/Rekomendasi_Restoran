import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Divider,
  Image,
  Grid,
  GridItem,
  Flex,
  Badge,
  IconButton,
  Img
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon, StarIcon } from '@chakra-ui/icons'

import Layout from '../components/layouts/article'
import Section from '../components/section'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { useEffect, useState } from 'react'
import GetMenu from '../firebase/clientApp'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDE-1OZl0wNOQxxrZST194KD3U1kLW9Qy4',
  authDomain: 'restaurant-7305c.firebaseapp.com',
  projectId: 'restaurant-7305c',
  storageBucket: 'restaurant-7305c.appspot.com',
  messagingSenderId: '872390095470',
  appId: '1:872390095470:web:ef12a7ed5bfe5d2ddd2c7f',
  measurementId: 'G-9DGLGTQ0X0'
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  }
}

function Home() {
  const [items, setItems] = useState([])
  async function GetMenu() {
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    const q = query(collection(db, 'makanan'), orderBy('nama', 'asc'), limit(5))

    try {
      const querySnapshot = await getDocs(q)
      const newItems = []
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        const newItem = {
          nama: doc.data().nama,
          harga: doc.data().harga,
          jenis: doc.data().jenis,
          disukai: doc.data().disukai,
          totalp: doc.data().totalp,
          url: doc.data().url
        }
        newItems.push(newItem)
        // console.log(doc.id, ' => ', doc.data())
      })

      setItems(prevItems => [...prevItems, ...newItems])
      console.log('Items fetched and updated:', [...items, ...newItems])
      return newItems
    } catch (e) {
      console.error('Error adding document: ', e)
      return []
    }
  }

  useEffect(() => {
    GetMenu()
    // const newItem = { firstname: 'Kaylee', lastname: 'Frye' }
    // setItems(prevItems => [...prevItems, newItem])
    // console.log(items)
  }, [])

  function MyButton() {
    const handleClick = () => {
      setItems([...items, newItem])
      console.log(items)
      // getMenu() // This will be logged to the console when the button is clicked.
    }

    return (
      <Button onClick={handleClick} colorScheme="teal">
        Click Me
      </Button>
    )
  }
  function AirbnbCard() {
    const property = {
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/restaurant-7305c.appspot.com/o/Ayam%20Katsu.jpg?alt=media&token=d53dbb75-69e9-4dbb-8e47-e4426c096b48',
      imageAlt: 'food katsu',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4
    }

    return (
      <Box paddingX={{ base: 1, md: 2 }}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Img
            src={property.imageUrl}
            alt={property.imageAlt}
            borderRadius="lg"
          />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
                noOfLines={1}
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {property.title}
            </Box>

            <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? 'teal.500' : 'gray.300'}
                  />
                ))}
              <Box
                as="span"
                ml="2"
                color="gray.600"
                fontSize="sm"
                noOfLines={1}
              >
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Layout>
      <MyButton></MyButton>
      <Container maxW="x1" flexDirection="row">
        {/* Left Carousel */}
        <Section delay={0.4}>
          <Flex pt={5} direction={{ base: 'column', md: 'row' }}>
            {/* Left Carousel */}
            <Box flex={1} px={2} w={{ base: '100%', md: '50%' }}>
              <Heading as="h3" variant="section-title" pl={2}>
                Top Seller
              </Heading>
              <Carousel
                responsive={responsive}
                ssr={true}
                itemClass="carousel-item-padding-40-px"
              >
                <AirbnbCard />
                <AirbnbCard />
                <AirbnbCard />
                <AirbnbCard />
              </Carousel>

              {/* Rest of the left side content */}
            </Box>

            {/* Right Carousel */}
            <Box flex={1} w={{ base: '100%', md: '50%' }} px={2}>
              <Heading as="h3" variant="section-title" pl={2}>
                Top Seller
              </Heading>
              <Carousel
                responsive={responsive}
                ssr={true}
                itemClass="carousel-item-padding-40-px"
              >
                <AirbnbCard />
                <AirbnbCard />
                <AirbnbCard />
                <AirbnbCard />
              </Carousel>

              {/* Rest of the right side content */}
            </Box>
          </Flex>
        </Section>
        <Section delay={0.5}>
          <Flex pt={5} direction={{ base: 'column', md: 'row' }}>
            {/* Left Carousel */}
            <Box flex={1} px={2} w={{ base: '100%', md: '50%' }}>
              <Heading as="h3" variant="section-title" pl={2}>
                Top Seller
              </Heading>
              <Carousel
                responsive={responsive}
                ssr={true}
                itemClass="carousel-item-padding-40-px"
              >
                <AirbnbCard />
                <AirbnbCard />
                <AirbnbCard />
                <AirbnbCard />
              </Carousel>

              {/* Rest of the left side content */}
            </Box>

            {/* Right Carousel */}
            <Box flex={1} w={{ base: '100%', md: '50%' }} px={2}>
              <Heading as="h3" variant="section-title" pl={2}>
                Top Seller
              </Heading>
              <Carousel
                responsive={responsive}
                ssr={true}
                itemClass="carousel-item-padding-40-px"
              >
                <AirbnbCard />
                <AirbnbCard />
                <AirbnbCard />
                <AirbnbCard />
              </Carousel>

              {/* Rest of the right side content */}
            </Box>
          </Flex>
        </Section>
        {/* Rest of the left side content */}
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
