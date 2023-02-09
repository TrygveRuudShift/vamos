//create component navbar

import { Box } from '@chakra-ui/react'
interface BoxProps {
    title: string;
    [key: string]: any;
}
export const NavBar = ({ title, ...props }: BoxProps) => {
    return (
        <Box borderWidth='1px' borderRadius='lg' display='flex' alignItems='baseline' {...props}>
            {title}
            <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
                DASHBOARD</Box>
            <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
                PROFILE</Box>
            <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
                SIGN UP</Box>
            <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
                SIGN IN</Box>
            <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
                ALT BUTTON</Box>
            </Box>
    )
}

