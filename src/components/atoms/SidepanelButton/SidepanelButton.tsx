import { Button, Link } from "@chakra-ui/react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
interface SidepanelProps {
    selected: boolean,
    [key: string]: any;
    href: string;
    icon: string | "AiFillHome" | "AiOutlineHome";
}

export const SidepanelButton: React.FC<SidepanelProps> = ({ children, ...props }) => {
    let colorActive = "gray"
    let borderStyle = "none";
    if (props.selected) {
      colorActive = "white"
      borderStyle = "outset"
    }
  return (
      <Button
        as={Link}
        href={props.href}
        fontSize="12px"
        type="submit"
        bg={colorActive}
        w="100%"
        h="45"
        mb="20px"
        color="black"
        mt="20px"
        box-shadow="0 30px 40px rgba(0,0,0,.1)"
        border = {borderStyle}
        borderRadius="10px"
        _hover={{
          bg: "teal.200"
        }}
        _active={{
          bg: "teal.400"
        }}
      >
        {children}
      </Button>
  );
};
