import { Button } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface SidepanelProps {
    selected: boolean,
    [key: string]: any;
    href: string;
    icon: IconType;
    size?: "small" | "medium" | "large";
    onClick?: () => void;
}

export const SidepanelButton: React.FC<SidepanelProps> = ({ onClick,children, size, ...props }) => {
    let colorActive = "#ededed"
    let borderStyle = "none"
    let inverseColor = "white"
    let textColor = "#868e98"
    
    if (props.selected) {
      colorActive = "white"
      borderStyle = "1px 3px 8px 0px rgba(0,0,0,0.10)"
      inverseColor = "#79d2c9"
      textColor = "black"
    }
    
    let widthDiv: string = "30px";
    let heightDiv: string = "25px";
    let iconSize: number;
    if (size) {
      if (size === "small") iconSize = 15, widthDiv = "30px", heightDiv = "25px";
      if (size === "medium") iconSize = 20, widthDiv = "40px", heightDiv = "30px";
      if (size === "large") iconSize = 25, widthDiv = "50px", heightDiv = "35px"; 
    }
    
    const icon = () => {
      const iconColor = props.selected ? "white" : "#79d2c9";
      return <props.icon size={iconSize} color={iconColor}></props.icon>;
    }

    const handleClick = () => {
      props.selected = props.selected ? false : true;
      console.log("clicked")
    }
  return (
    <div
      //onClick={handleClick()}
    >
      <a href={props.href}
        style={{height: "100%",
          display: "flex"}}
      >
        <Button
          fontSize="12px"
          type="submit"
          bg={colorActive}
          w="100%"
          h="45"
          //mb="20px"
          color={textColor}
          //mt="20px"
          boxShadow = {borderStyle}
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
              display: "flex",
              width: widthDiv,
              height: heightDiv,
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
