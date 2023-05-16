import { Box } from '@chakra-ui/react'

const BottomDash = () => {
    return (
    <Box width="100%" display="flex" flexDirection="row" alignItems="center" gap="2rem" padding="1rem">
        <Box width="70%" height="60vh" className="recent">
        Recent Orders
        </Box>
        <Box width="30%" height="60vh" className="statistics">
        Statistics
        </Box>
    </Box>
    )
}

export default BottomDash