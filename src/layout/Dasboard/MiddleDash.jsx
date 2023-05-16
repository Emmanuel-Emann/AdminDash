import { Box } from '@chakra-ui/react'

const MiddleDash = () => {
return (
<Box width="100%" display="flex" flexDirection="row" alignItems="center" gap="2rem" padding="1rem">
    <Box width="100%" height="60vh" className="active-users">
    Active users
    </Box>
    <Box width="100%" height="60vh" className="next-event">
    Next Events
    </Box>
    <Box width="100%" height="60vh" className="category">
    Most visited category
    </Box>
</Box>
)
}

export default MiddleDash