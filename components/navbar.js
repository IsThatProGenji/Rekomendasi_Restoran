import { forwardRef, use, useContext } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoInstagram } from 'react-icons/io5'
import DrawerExample from './drawer'
import MyContext from './myContext'
const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props
  const { someValue } = useContext(MyContext)
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="2x1"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={0}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/order" path={path}>
            Order History
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://gofood.co.id/id/bandung/restaurant/atok-rizal-jagonya-sate-nasi-goreng-ikan-bakar-setiabudi-3eb0fa10-cee3-4636-865e-327fe3f1d7e8"
          >
            Delivery
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://instagram.com/atokrizaljagonyasate2?igshid=NjIwNzIyMDk2Mg=="
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoInstagram />
            Social
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton mr={2} />

          <Box ml={2} display={{ base: 'inline-block' }}>
            <DrawerExample />
          </Box>

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/order">
                  Order History
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  target="_blank"
                  href="https://instagram.com/atokrizaljagonyasate2?igshid=NjIwNzIyMDk2Mg=="
                >
                  Social
                </MenuItem>

                <MenuItem
                  as={MenuLink}
                  target="_blank"
                  href="https://gofood.co.id/id/bandung/restaurant/atok-rizal-jagonya-sate-nasi-goreng-ikan-bakar-setiabudi-3eb0fa10-cee3-4636-865e-327fe3f1d7e8"
                >
                  Delivery
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
