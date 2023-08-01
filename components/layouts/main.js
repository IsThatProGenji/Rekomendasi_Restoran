import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import { createContext, useContext } from 'react'
import MyContextProvider from '../myContextProvider'
const Main = ({ children, router }) => {
  // const orders = 'boom'
  // const OrderContext = createContext(orders)

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Atok Rizal Jagonya Sate" />
        <meta name="author" content="Atok Rizal Jagonya Sate" />
        <meta name="author" content="Atok Rizal Jagonya Sate" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <meta property="og:site_name" content="Atok Rizal Jagonya Sate" />
        <meta name="og:title" content="Atok Rizal Jagonya Sate" />
        <meta property="og:type" content="website" />

        <title>Atok Rizal Jagonya Sate - Homepage</title>
      </Head>
      <MyContextProvider>
        <NavBar path={router.asPath} />

        <Container maxW="2x1" pt={14}>
          {children}
          <Footer />
        </Container>
      </MyContextProvider>
    </Box>
  )
}

export default Main
