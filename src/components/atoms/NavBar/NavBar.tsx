//create component navbar

import { Box } from '@chakra-ui/react'
import { FaKey, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";
interface BoxProps {
    title: string;
    backgroundtype?: "clear" | "blur";
    [key: string]: any;
}
export const NavBar: React.FC<BoxProps> = ({ title, backgroundtype, ...props }: BoxProps) => {

    let backdropfilter = undefined;
    let bordercolor = undefined;
    let borderwidth = undefined;
    let fontcolor = undefined;
    let fontcolor2 = undefined;
    let backgroundimage = undefined;
    if (backgroundtype) {
        if (backgroundtype === "clear") backdropfilter="none", bordercolor = "none", borderwidth="0", fontcolor="white", fontcolor2="black", backgroundimage="linear-gradient(white, white)";
        if (backgroundtype === "blur") backdropfilter="blur(5px)", bordercolor = "white", borderwidth="1px", fontcolor="black", fontcolor2="white", backgroundimage="linear-gradient(to right, darkblue, black)";
    }
    
    let style0 = {position:"relative", left:"0", width:"31%", marginTop:"0px", height:"100%"};
    let style1 = {position:"relative", left:"0", width:"23%", marginTop:"0px", height:"100%"};
    let style2 = {bottom:'0', alignItems: "center", display: "flex", justifyContent: "center"};

    return (
        <Box backdropFilter={backdropfilter} borderColor={bordercolor} borderWidth={borderwidth} borderRadius='12px' display='flex' alignItems='baseline' h='50px' {...props}>
            <Box as='button' style={{position:"sticky", marginLeft:"10px", width:"120px", height:"30px", marginTop:"10px"}} borderRadius='md' color={fontcolor} >
                {title}</Box>
            <Box style={{position:"relative", marginLeft:"auto", marginRight:"auto", width:"500px", marginTop:"10px", height:"30px"}}>
                <Box as='button' style={style0} borderRadius='md' color={fontcolor} px={4} h={8}>
                    <Box style={style2}><SiHackthebox/>&nbsp;DASHBOARD</Box></Box>
                <Box as='button' style={style1} borderRadius='md' color={fontcolor} px={4} h={8}>
                    <Box style={style2}><FaUserAlt/>&nbsp;PROFILE</Box></Box>
                <Box as='button' style={style1} borderRadius='md' color={fontcolor} px={4} h={8}>
                    <Box style={style2}><FaUserCircle/>&nbsp;SIGN UP</Box></Box>
                <Box as='button' style={style1} borderRadius='md' color={fontcolor} px={4} h={8}>
                    <Box style={style2}><FaKey/>&nbsp;SIGN IN</Box></Box>
            </Box>
            <Box as='button' style={{position:'sticky', marginRight:"10px", width:"130px", marginTop:"10px", height:"30px"}} borderRadius='20px' color={fontcolor2} backgroundImage={backgroundimage} px={4} h={8}>
                ALT BUTTON</Box>
            </Box>
    )
}

