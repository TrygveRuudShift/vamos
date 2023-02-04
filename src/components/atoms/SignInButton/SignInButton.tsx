import { Button } from "@chakra-ui/react";
import colors from "../../../styles/colors";


interface ButtonProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const SignInButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
      <Button
        fontSize="10px"
        type="submit"
        bg={colors.teal[300]}
        w="100%"
        h="45"
        mb="20px"
        color="white"
        mt="20px"
        border={0}
        borderRadius="5px"
        _hover={{
          bg: colors.teal[200],
        }}
        _active={{
          bg: colors.teal[400]
        }}
      >
        {children}
      </Button>
  );
};
