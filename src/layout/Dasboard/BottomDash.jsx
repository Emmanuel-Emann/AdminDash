import { Box, Text } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import Map from '../../common/Map'
import OrderTable from '../../common/OrderTable'

const BottomDash = () => {
    return (
    <Box width="100%" display="flex" flexDirection="row" alignItems="center" gap="2rem" padding="1rem">
        <Box width="70%" height="" className="recent">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="18px" fontWeight="bold">
            Recent Orders
        </Text>
        <BsThreeDots size={18} cursor="pointer"/>
        </Box>
        <OrderTable/>
        </Box>
        <Box width="30%" height="" className="statistics" >
        <Text fontSize="18px" fontWeight="bold">
            Statistics
        </Text>
        <Map/>
        </Box>
    </Box>
    )
}

export default BottomDash