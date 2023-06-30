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
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/links/youtube.png'


import { Card, CardHeader, CardBody, CardFooter,Stack,Text,Divider,ButtonGroup ,Image} from '@chakra-ui/react'
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
  <Container maxW="1x1">
    <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>

      {/* Left Side */}
      <Box flex={1} pr={{ md: 6 }}>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
         Top Seller
        </Heading>
      
        <Card >
  <CardBody>
    <Image
      src='https://static.vecteezy.com/system/resources/previews/006/096/450/original/cute-little-cat-sit-adorable-kitten-cartoon-pastel-color-vector.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
     
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        sdasd
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

      </Section>
        {/* Rest of the left side content */}
      </Box>

      {/* Right Side */}
      <Box flex={1} pl={{ md: 6 }}>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
      
         <SimpleGrid columns={[1, 2, 3]} gap={6}>
         <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

      </Section>
      </Box>

    </Box>
  </Container>

  
</Layout>
  // <Layout>
  //   <Container maxW="container.md">
  //     <Section delay={0.1}>
  //       <Heading as="h3" variant="section-title">
  //         On the web
  //       </Heading>
      
  //       <SimpleGrid columns={[1, 2, 3]} gap={6}>
  //         <GridItem
  //           href="https://www.youtube.com/devaslife"
  //           title="Dev as Life"
  //           thumbnail={thumbYouTube}
  //         >
  //           My YouTube channel (&gt;150k subs)
  //         </GridItem>
  //         <GridItem
  //           href="https://www.inkdrop.app/"
  //           title="Inkdrop"
  //           thumbnail={thumbInkdrop}
  //         >
  //           A Markdown note-taking app
  //         </GridItem>
  //         <GridItem
  //           href="https://www.inkdrop.app/"
  //           title="Inkdrop"
  //           thumbnail={thumbInkdrop}
  //         >
  //           A Markdown note-taking app
  //         </GridItem>
  //       </SimpleGrid>

  //       <Heading as="h3" variant="section-title">
  //         Newsletter
  //       </Heading>
  //       <p>
  //         Join me on a behind-the-scenes coding journey. Weekly updates on
  //         projects, tutorials, and videos
  //       </p>

  //       <Box align="center" my={4}>
  //         <Button
  //           as={NextLink}
  //           href="https://www.devas.life/"
  //           scroll={false}
  //           leftIcon={<EmailIcon />}
  //           colorScheme="teal"
  //         >
  //           Sign up my newsletter here
  //         </Button>
  //       </Box>
  //     </Section>
  //   </Container>
  // </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
