import { Button } from "@chakra-ui/react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { MdBackpack } from "react-icons/md";
interface SidepanelProps {
    selected: boolean,
    [key: string]: any;
    href: string;
    iconString: "AiFillHome" | "MdBackPack";
    size?: "small" | "medium" | "large";
}

export const SidepanelButton: React.FC<SidepanelProps> = ({ children, ...props }) => {
    let colorActive = "lightgray"
    let borderStyle = "none"
    let inverseColor = "white"
    let size = 15;
    if (props.selected) {
      colorActive = "white"
      borderStyle = "outset"
      inverseColor = "#80CBC4"
    }
    if (props.size === "medium") size = 20;
    if (props.size === "large") size = 25; 
    const icon = () => {
      if (props.iconString == "AiFillHome") {
        if (props.selected) {
          return <AiFillHome size={size} color={"white"}></AiFillHome>;
        }
        return <AiFillHome size={size} color={"#80CBC4"}></AiFillHome>;
      }
      if (props.iconString == "MdBackPack") {
        if (props.selected) {
          return <MdBackpack size={size} color={"white"}></MdBackpack>;
        }
        return <MdBackpack size={size} color={"#80CBC4"}></MdBackpack>;
      }
    }
  return (
    <div>
      <a href={props.href}>
        <Button
          fontSize="12px"
          type="submit"
          bg={colorActive}
          w="100%"
          h="45"
          mb="20px"
          color="black"
          mt="20px"
          border = {borderStyle}
          border-radius="10px"
          _hover={{
            bg: "teal.200"
          }}
          _active={{
            bg: "teal.400"
          }}
        > 
          <div
            style={{background: inverseColor,
              width: "40px",
              height: "25px",
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              left: "5%",
              borderRadius: "10px"}}
          >
            {icon()}
          </div>  
          {children}
        </Button>
      </a>
    </div>
  );
};
