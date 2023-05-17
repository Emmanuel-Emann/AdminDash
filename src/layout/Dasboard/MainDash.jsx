import { Box, Heading } from '@chakra-ui/react'
import Chart from '../../component/Chart'
import TopSellsList from '../../component/TopSellsList'
import Total from '../../component/Total'

const MainDash = () => {
return (
<Box width="100%" display="flex" flexDirection="row" alignItems="center" gap="1rem" padding="1rem">
    <Box width="30%" padding="1rem" className="list-container">
    <Heading mb="1rem">Most Visited</Heading>
    <Box width="100%" height="60vh" className="list-container_filled">
        <TopSellsList/>
    </Box>
    </Box>
    <Box width="70%" >
    <Box display="flex" flexDirection="row" alignItems="center" gap="1rem" padding="1rem" width="100%">
        <Box width="100%" className="total-container">
        <Total text="Total Profit" amount="$ 20,000" perrate="+53.83%"/>
        </Box>
        <Box width="100%" className="total-container">
        <Total text="Total Expenses" amount="$ 12,000" perrate="+2.97%"/>
        </Box>
        <Box width="100%" className="total-container">
        <Total text="New Users" amount="2,860" perrate="-9.97%"/>
        </Box>
    </Box>
    <Box padding="1rem" width="100%">
        <Box className="chart-container" width="100%">
        <Chart/>
        </Box>
    </Box>
    </Box>
</Box>
)
}

export default MainDash