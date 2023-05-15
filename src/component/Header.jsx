import { Box, Divider, Text, } from "@chakra-ui/react"
import { useState } from "react"
import Head from "./Head"
import TextHolder from "./TextHolder"
import { FaHome, FaStore } from 'react-icons/fa';
import { BsFillChatFill } from 'react-icons/bs';
import InnerText from "./InnerText";

const Main = ({children}) => {
  const [open, setOpen] = useState(false)
  return (
<Box display="flex">
<Box width={open ? "20%" : "0%"} height="100vh" className="fadein">
    {
      open ? (
      <>
      <Text padding="1rem 3rem" fontSize="24px" fontWeight="500" color="#fff">productWeb</Text>
        <Box padding=".5rem 0 0 3rem" display="flex" flexDirection="column"  gap=".6rem">
          <TextHolder textHolder="Home" icon={<FaHome size="20"/>}/>
          <TextHolder 
          textHolder="Message" 
          icon={<BsFillChatFill size="20"/>}
          >
            <InnerText text="Flagged"/>
            <InnerText text="User Conversation"/>
            <InnerText text="Support Requests"/>
            <InnerText text="Missed"/>
          </TextHolder>
          <TextHolder textHolder="WorkStore" icon={<FaStore size="20"/>}/>
        </Box>
      </>
      ) : ""
    }
  </Box>
  <Box width="100%">
    <Head onClick={() => setOpen(true)} onClose={() => setOpen(false)} open={open}/>
    <Divider mt="1rem"/>
    {children}
  </Box>
</Box>
  )
}

export default Main