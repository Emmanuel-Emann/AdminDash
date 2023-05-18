import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react"


const ThreadList = () => {
return (
<TableContainer boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)" padding="1.5rem" borderRadius=".5rem">
<Table size='sm'>
    <Thead>
        <Tr>
            <Th fontSize="16px">Title</Th>
            <Th fontSize="16px">Requester</Th>
            <Th fontSize="16px">Seller</Th>
            <Th fontSize="16px">Requested Time</Th>
        </Tr>
    </Thead>
</Table>
</TableContainer>
)}

export default ThreadList