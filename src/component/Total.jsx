import { Box, Text } from '@chakra-ui/react'

const Total = ({text, amount, perrate, color}) => {
  return (
    <Box ml="2rem" className='estimation'>
        <div>
            <h3>{text}</h3>
        </div>
        <Box display="flex" alignItems="center" gap=".5rem">
            <Text fontSize="20px" fontWeight="500" >{amount}</Text>
            <div>
                <h4 color={color}>{perrate}</h4>
            </div>
        </Box>
    </Box>
  )
}

export default Total