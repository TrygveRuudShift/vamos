import { Button, Icon } from "@chakra-ui/react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
interface FavButtonProps {
  selected: boolean;
  [key: string]: any;
}

export const FavButton: React.FC<FavButtonProps> = ({ selected, ...props }) => {
  return (
    <Button
      colorScheme="teal"
      variant="outline"
      size="sm"
      mr="10px"
      leftIcon={<Icon as={selected ? BsHeartFill : BsHeart} boxSize="20px" />}
      {...props}
    >
      {selected ? "Marked as favorite" : "Add to favorites"}
    </Button>
  );
};
