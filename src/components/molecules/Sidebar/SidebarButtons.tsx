import { SidepanelButton } from "../../atoms/SidepanelButton/SidepanelButton";
import { Box, Flex, Text } from "@chakra-ui/react";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { MdBackpack } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { GoSignIn } from "react-icons/go";
import { IoRocketSharp } from "react-icons/io5";

interface ButtonsProps {
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  [key: string]: any;
  gapSize?: string;
  height?: string;
  width?: string;
}

export const SidebarButtons: React.FC<ButtonsProps> = ({onClick, children, ...props}) => {
  
  onClick = () => {

  }
  return (
    <Box 
      w={props.width} textAlign="center">
      <Flex
        direction="column"
        gap={props.gapSize}
        alignItems={"center"}
        mb="20px"
      >
        <SidepanelButton icon={AiFillHome} selected={true} size={props.size} href="">Home</SidepanelButton>
        <SidepanelButton icon={MdBackpack} selected={false} size={props.size} href="">My Trips</SidepanelButton>
        <SidepanelButton icon={AiFillStar} selected={false} size={props.size} href="">Rated Trips</SidepanelButton>
      </Flex>
      <Text fontSize="xl" mb="20px">Account Pages</Text>
      <Flex
        direction="column"
        gap={props.gapSize}
        alignItems={"center"}
      >
          <SidepanelButton icon={BsFillPersonFill} selected={false} size={props.size} href="">Profile</SidepanelButton>
          <SidepanelButton icon={GoSignIn} selected={false} size={props.size} href="">Sign In</SidepanelButton>
          <SidepanelButton icon={IoRocketSharp} selected={false} size={props.size} href="">Sign Up</SidepanelButton>
      </Flex>
    </Box>
  );
};