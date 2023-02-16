//create component navbar

import { Box } from '@chakra-ui/react'
import { FaKey, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";
interface BoxProps {
    backgroundtype?: "clear" | "blur";
    [key: string]: any;
}
export const NavBar: React.FC<BoxProps> = ({backgroundtype, ...props }: BoxProps) => {

    let backdropfilter = undefined;
    let bordercolor = undefined;
    let borderwidth = undefined;
    let fontcolor = undefined;
    let fontcolor2 = undefined;
    let backgroundimage = undefined;
    let backgroundcolor = undefined;
    let shadowvalue = undefined;
    if (backgroundtype) {
        if (backgroundtype === "clear") {
            backdropfilter="none"
            bordercolor = "none"
            borderwidth="0"
            fontcolor="white"
            fontcolor2="black"
            backgroundimage="linear-gradient(white, white)"
            backgroundcolor="none"
            shadowvalue="none"
        }
        if (backgroundtype === "blur") {
            backdropfilter="blur(5px)"
            bordercolor = "white"
            borderwidth="1px"
            fontcolor="black"
            fontcolor2="white"
            backgroundimage="linear-gradient(to right, darkblue, black)"
            backgroundcolor="rgba(255, 255, 255, 0.5)"
            shadowvalue="7px 7px 12px 7px rgba(0, 0, 0, 0.05)"
        }
    }
    
    let style0 = {position:"relative", left:"0", width:"31%", marginTop:"0px", height:"100%", fontSize:"14px"};
    let style1 = {position:"relative", left:"0", width:"23%", marginTop:"0px", height:"100%", fontSize:"14px"};
    let style2 = {bottom:'0', alignItems: "center", display: "flex", justifyContent: "center"};

    return (
        <Box position="absolute" w="80vw" mt="50px" left="50%" transform="translate(-50%, -50%)" zIndex="1000" shadow={shadowvalue} backgroundColor={backgroundcolor} backdropFilter={backdropfilter} borderColor={bordercolor} borderWidth={borderwidth} borderRadius='12px' display='flex' alignItems='baseline' h='50px' {...props}>
            <Box as='button' style={{position:"sticky", marginLeft:"10px", width:"120px", height:"30px", marginTop:"10px"}} borderRadius='md' color={fontcolor} >
                VAMOS</Box>
            <Box style={{position:"relative", marginLeft:"auto", marginRight:"auto", width:"450px", marginTop:"10px", height:"30px"}}>
                <Box as='button' style={Object.assign(style0)} borderRadius='md' color={fontcolor} px={2} h={8}>
                    <Box style={style2}><SiHackthebox/>&nbsp;DASHBOARD</Box></Box>
                <Box as='button' style={Object.assign(style1)} borderRadius='md' color={fontcolor} px={2} h={8}>
                    <Box style={style2}><FaUserAlt/>&nbsp;PROFILE</Box></Box>
                <Box as='button' style={Object.assign(style1)} borderRadius='md' color={fontcolor} px={2} h={8}>
                    <Box style={style2}><FaUserCircle/>&nbsp;SIGN UP</Box></Box>
                <Box as='button' style={Object.assign(style1)} borderRadius='md' color={fontcolor} px={2} h={8}>
                    <Box style={style2}><FaKey/>&nbsp;SIGN IN</Box></Box>
            </Box>
            <Box as='button' style={{position:'relative', marginRight:"10px", width:"130px", height:"30px", bottom:"2.5px"}} borderRadius='20px' color={fontcolor2} backgroundImage={backgroundimage}>
                ALT BUTTON</Box>
            </Box>
    )
}

