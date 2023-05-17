import { Avatar, Box, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"

const OrderTable = () => {
  return (
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Date</Th>
        <Th>Customer</Th>
        <Th>Status</Th>
        <Th isNumeric>Total</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td >01 4 2023 12:00 PM</Td>
        <Td display="flex" alignItems="center" gap=".5rem">
            <Avatar name="Eman Dnd"/>
            <Box textAlign="center">
                <Text>Emmanuel Eman</Text>
            </Box>
        </Td>
        <Td>
            <Box display="flex" alignItems="" gap=".5rem">
                <div className="dot"></div>
                <Text color="green">Completed</Text>
            </Box>
        </Td>
        <Td isNumeric>4 Orders</Td>
      </Tr>
      <Tr>
        <Td>01 4 2023 12:00 PM</Td>
        <Td display="flex" alignItems="center" gap=".5rem">
            <Avatar name="Eman Dnd"/>
            <Box textAlign="center">
                <Text>Emmanuel Eman</Text>
            </Box>
        </Td>
        <Td>
            <Box display="flex" alignItems="" gap=".5rem">
                <div className="dots"></div>
                <Text color="blue" >Processing</Text>
            </Box>
        </Td>
        <Td isNumeric>6 Orders</Td>
      </Tr>
      <Tr>
        <Td>01 4 2023 12:00 PM</Td>
        <Td display="flex" alignItems="center" gap=".5rem">
            <Avatar name="Eman Dnd"/>
            <Box textAlign="center">
                <Text>Emmanuel Eman</Text>
            </Box>
        </Td>
        <Td>
            <Box display="flex" alignItems="" gap=".5rem">
                <div className="dott"></div>
                <Text color="red">Pending</Text>
            </Box>
        </Td>
        <Td isNumeric>5 Orders</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Date</Th>
        <Th>Customer</Th>
        <Th>Status</Th>
        <Th>Total</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
}

export default OrderTable