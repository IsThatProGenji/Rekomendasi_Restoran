import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  IconButton,
  Box,
  FormLabel,
  Select,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
  Image,
  Flex,
  Text
} from '@chakra-ui/react'
import { LuShoppingCart } from 'react-icons/lu'
import { useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import NumberInput from './numberinput'

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <IconButton
        colorScheme="teal"
        aria-label="Call Segun"
        ref={btnRef}
        onClick={onOpen}
        icon={<LuShoppingCart />}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'sm'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Shopping Cart</DrawerHeader>
          <Flex>
            <Box flex={1}>
              {' '}
              <Image
                src={
                  'https://static.vecteezy.com/system/resources/previews/006/096/450/original/cute-little-cat-sit-adorable-kitten-cartoon-pastel-color-vector.jpg'
                }
                borderRadius="lg"
              />
            </Box>
            <Box flex={1}>
              <Text>Nasi Goreng Kambing</Text>
              <NumberInput />
            </Box>
          </Flex>
          <Flex>
            <Box flex={1}>
              {' '}
              <Image
                src={
                  'https://static.vecteezy.com/system/resources/previews/006/096/450/original/cute-little-cat-sit-adorable-kitten-cartoon-pastel-color-vector.jpg'
                }
                borderRadius="lg"
              />
            </Box>
            <Box flex={1}>
              <Text>Nasi Goreng Kambing</Text>
              <NumberInput />
            </Box>
          </Flex>
          <DrawerBody>
            <Stack spacing="24px">
              <Box maxW={'50%'}>
                <FormLabel htmlFor="option">Choose an Option</FormLabel>
                <Select id="option" defaultValue="dinein">
                  <option value="dinein">Dine In</option>
                  <option value="takeaway">Take Away</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Order Note</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default DrawerExample
