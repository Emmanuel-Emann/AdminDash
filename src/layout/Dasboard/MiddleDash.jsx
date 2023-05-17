import { Box, Text } from '@chakra-ui/react'
import { BsMinecartLoaded } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'
import ActiveUserChart from '../../component/ActiveUserChart'
import DoughnutChart from '../../component/DoughnutChart'
import UpcomingEvent from '../../component/UpcomingEvent'

const MiddleDash = () => {
return (
<Box width="100%" display="flex" flexDirection="row" alignItems="center" gap="2rem" padding="1rem">
    <Box width="100%" height="60vh">
    <Box className="active-users">
        <Box display="flex" alignItems="center" justifyContent="space-between" mb="2rem">
            <Box>
                <Text fontSize="20" fontWeight="bold">Active users</Text>
                <h4>Page views per day</h4>
            </Box>
            <Box display="flex" alignItems="center" gap="1rem">
                <FaUserFriends size={24}/>
                <h3>200</h3>
            </Box>
        </Box>
        <ActiveUserChart/>
    </Box>
        <Box height="" className="little-users" display="flex" alignItems="center" justifyContent="space-around">
            <div>
                <Text fontSize={28} fontWeight="bold">Orders</Text>
                <BsMinecartLoaded size={125}/>
            </div>
            <Box >
                <div className='orders'>
                    <Text fontSize={24}>2,860</Text>
                    <h4>/ 3k Target</h4>
                </div>
                <h4>Orders Period</h4>
            </Box>
        </Box>
    </Box>
    <Box width="100%" height="60vh" className="next-event">
    Next Events
    <UpcomingEvent/>
    </Box>
    <Box width="100%" height="60vh" className="category">
        <Text fontSize="20" fontWeight="bold">Most visited category</Text>
        <DoughnutChart/>
    </Box>
</Box>
)
}

export default MiddleDash