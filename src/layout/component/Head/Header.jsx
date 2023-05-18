import { Box, Divider, Input, Text, } from "@chakra-ui/react"
import { useState } from "react"
import Head from "./Head"
import { FaHome, FaStore } from 'react-icons/fa';
import { BsFillChatFill } from 'react-icons/bs';
import TextHolder from "../../../common/TextHolder";
import InnerText from "../../../common/InnerText";

const Main = (props) => {
  const {children} = props
  const [open, setOpen] = useState(false)
  return (
<Box display="flex">
<Box width={open ? "20%" : "0%"}  className="fadein">
    {
      open ? (
      <>
      <Text padding="1rem 3rem" fontSize="24px" fontWeight="500" color="#fff">teraWork</Text>
        <Box padding=".5rem 0 0 3rem" display="flex" flexDirection="column"  gap=".6rem">
          <TextHolder textHolder="Dashboard" icon={<FaHome size="20"/>}>
            <InnerText text="Home"/>
            <InnerText text="Account"/>
            <InnerText text="Users"/>
            <InnerText text="Orders"/>
          </TextHolder>
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