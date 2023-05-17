import { Box, Text } from '@chakra-ui/react'
import { useState } from 'react'

const TextHolder = ({textHolder, icon, children}) => {
    const [open, setOpen] = useState(false)
return (
    <>
    <Box  
    className="actives"
    background={open ? "rgba(255, 255, 255, 0.202)" : ""}
    width="100%"
    borderRadius="2rem 0 0 2rem"
    padding=".5rem"
    color="#fff"
    >
        {icon}
        {open ? <Text fontSize="16px" fontWeight="400" onClick={() => setOpen(false)}>{textHolder}</Text> 
        : <Text fontSize="16px" fontWeight="400" onClick={() => setOpen(true)}>{textHolder}</Text>}
    </Box>
    {open ? (
    <Box display="grid" marginLeft="2.2rem" gap="1rem">
        {children}
    </Box>
    ) : null}
</>
)}

export default TextHolder