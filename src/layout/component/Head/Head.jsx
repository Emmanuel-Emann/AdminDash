import { ArrowBackIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Avatar, Box, Heading, Menu, MenuButton, MenuItem, MenuList, Text, WrapItem } from '@chakra-ui/react'
import {IoMdNotificationsOutline} from 'react-icons/io'

const Head = ({onClick, onClose, open}) => {
  return (
<>
<Heading width="100%" padding="1rem"  height="5rem">
    <Box display="flex" alignItems="center" justifyContent="space-between" >
        <WrapItem className='heading-center'>
        <Box display="flex" alignItems="center" gap=".5rem" className='heading-center'>
        <ArrowBackIcon cursor="pointer"/>
        {
          open ? <HamburgerIcon cursor="pointer"onClick={onClose}/> 
          : <HamburgerIcon cursor="pointer" onClick={onClick}/>
        }
        </Box>
        <Text fontSize="20px">DashBoard</Text>
        </WrapItem>
        <Box display="flex" alignItems="center" gap="2rem">
        <IoMdNotificationsOutline/>
          <Menu>
          <MenuButton>
            <WrapItem>
              <Avatar name='Dan Abrahmov' background="steelblue" cursor="pointer"/>
            </WrapItem>
        </MenuButton>
        <MenuList gap="1rem" display="flex" flexDirection="column">
            <MenuItem fontSize="14px" fontWeight="400">Profile</MenuItem>
            <MenuItem fontSize="14px" fontWeight="400">Create a Copy</MenuItem>
            <MenuItem fontSize="14px" fontWeight="400">Mark as Draft</MenuItem>
            <MenuItem fontSize="14px" fontWeight="400">Delete</MenuItem>
            <MenuItem fontSize="14px" fontWeight="400">Account Setting</MenuItem>
        </MenuList>
        </Menu>
        </Box>
    </Box>
</Heading>
</>
    
  )
}

export default Head