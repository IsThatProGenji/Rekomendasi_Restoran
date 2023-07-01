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
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon, StarIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/links/youtube.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
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
function AirbnbCard() {
  const property = {
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/006/096/450/original/cute-little-cat-sit-adorable-kitten-cartoon-pastel-color-vector.jpg',
    imageAlt: 'Rear view of modern home with pool',
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
        <Image
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
            <Box as="span" ml="2" color="gray.600" fontSize="sm" noOfLines={1}>
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const Home = () => (
  <Layout>
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

export default Home
export { getServerSideProps } from '../components/chakra'
