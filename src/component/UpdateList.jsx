import { Avatar, Box, OrderedList, Text } from '@chakra-ui/react'

const UpdateList = ({text, price, name, src}) => {
  return (
    <OrderedList display="flex" alignItems="center" gap="2.5rem" mb="2rem" className='order-list'>
        <Box>
            <Avatar name={name} src={src} size="lg"/>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
            <Text fontSize="14px" color="grey">{text}</Text>
            <h3>${price}</h3>
        </Box>
    </OrderedList>
  )
}

export default UpdateList