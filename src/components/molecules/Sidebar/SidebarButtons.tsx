import { SidepanelButton } from "../../atoms/SidepanelButton/SidepanelButton";
import { Flex } from "@chakra-ui/react";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { MdBackpack } from "react-icons/md";

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
    <Flex
      direction="column"
      gap={props.gapSize}
      h={props.height}
      w={props.width}>
      <SidepanelButton selected={false} href={""} icon={AiFillHome} size={props.size}>Home</SidepanelButton>
      <SidepanelButton selected={true} href={""} icon={AiFillStar} size={props.size}>Rated</SidepanelButton>
      <SidepanelButton selected={false} href={""} icon={MdBackpack} size={props.size}>Backpack</SidepanelButton>
    </Flex>
  );
    
};