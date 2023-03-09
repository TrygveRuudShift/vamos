import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import { SignInButton, InputField, NavBar } from "components/atoms/";
import { auth } from "../firebase/clientApp";
import { useEffect, useState } from "react";

export default function ContactUs() {
  const textColor = useColorModeValue("gray.600", "white");
  const bgColor = useColorModeValue("white", "gray.700");

  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user?.email);
    });
  }, []);

  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
    >
      <NavBar
        backgroundtype="clear"
        login={user ? "logged_in" : "logged_out"}
      />
      <Box
        position="absolute"
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={`url(${BgSignUp.src})`}
        bgSize="cover"
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
      />
      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="200px"
        mb="0px"
      ></Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex
          direction="column"
          w="445px"
          background="transparent"
          borderRadius="15px"
          p="40px"
          pt="20px"
          minH="400px"
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Text fontSize="3xl" color={textColor} textAlign="center" mb="22px">
            Contact Us
          </Text>

          {/* TODO: Setup icons and text */}
        </Flex>
      </Flex>
    </Flex>
  );
}
