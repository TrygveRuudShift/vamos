import { SidepanelButton } from "../../atoms/SidepanelButton/SidepanelButton";
import { Flex } from "@chakra-ui/react";

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
      <SidepanelButton selected={false} href={""} iconString={"AiFillHome"} size={props.size}>Home</SidepanelButton>
      <SidepanelButton selected={true} href={""} iconString={"MdBackPack"} size={props.size}>Backpack</SidepanelButton>
      <SidepanelButton selected={false} href={""} iconString={"AiFillStar"} size={props.size}>Rated</SidepanelButton>
    </Flex>
  );
    
};