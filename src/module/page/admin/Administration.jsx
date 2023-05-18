import { Box, Input } from "@chakra-ui/react"
import BottomDash from "../../../layout/Dasboard/BottomDash"
import MainDash from "../../../layout/Dasboard/MainDash"
import MiddleDash from "../../../layout/Dasboard/MiddleDash"

const Administration = () => {
  return (
  <>
  <Box position="relative" left="100rem"> 
    <Input type="datetime-local" size="lg" width="15%"/>
  </Box>
  <MainDash/>
  <MiddleDash/>
  <BottomDash/>
  </>
  )
}

export default Administration