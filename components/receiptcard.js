import { formatToRupiah } from './formatPrice'
import {
  Box,
  Text,
  Badge,
  Container,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react'

const ReceiptCard = ({ orderData }) => {
  const { feedback, nama, nomeja, note, opsi, order, date, total } = orderData
  const milliseconds =
    date.seconds * 1000 + Math.floor(date.nanoseconds / 1000000)

  // Create a new Date object using the milliseconds
  const formattedDate = new Date(milliseconds)

  // Extract the components of the date
  const year = formattedDate.getFullYear()
  const month = String(formattedDate.getMonth() + 1).padStart(2, '0') // Months are zero-based, so we add 1
  const day = String(formattedDate.getDate()).padStart(2, '0')
  const hours = String(formattedDate.getHours()).padStart(2, '0')
  const minutes = String(formattedDate.getMinutes()).padStart(2, '0')
  const seconds = String(formattedDate.getSeconds()).padStart(2, '0')

  return (
    <Container>
      <Box borderWidth="1px" borderRadius="md" p={4} mb={4} maxWidth="600px">
        {/* Order Feedback */}
        {/* Order Details */}
        <Box mb={4}>
          <Badge colorScheme="teal" fontSize="sm" mb={2}>
            Order Details
          </Badge>
          <Text>Nama: {nama}</Text>
          <Text>No Meja: {nomeja}</Text>
          <Text>Opsi: {opsi}</Text>
          <Text>Note: {note}</Text>
        </Box>
        {/* Ordered Items */}
        <Box>
          <Badge colorScheme="teal" fontSize="sm" mb={2}>
            Ordered Items
          </Badge>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Item Name</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {order.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.nama}</Td>
                  <Td>{item.jumlah}</Td>
                  <Td>{formatToRupiah(item.harga)}</Td>
                </Tr>
              ))}
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td>Total: {total}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>{' '}
        <Text paddingTop={2}>
          Waktu Pemesanan: {year}-{month}-{day} ({hours}.{minutes})
        </Text>
        {feedback && (
          <Box mb={4}>
            <Badge colorScheme="teal" fontSize="sm" mb={2}>
              Feedback
            </Badge>
            <Text>{feedback}</Text>
          </Box>
        )}
      </Box>
    </Container>
  )
}

export default ReceiptCard
