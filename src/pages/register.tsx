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
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import { SignInButton, InputField, NavBar } from "components/atoms/";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { login, auth } from "../firebase/clientApp";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";

export default function Register() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");

  const provider = new GoogleAuthProvider();

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
      ></Box>
      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="85px"
        mb="0px"
      >
        <Text fontSize="4xl" color="white" fontWeight="bold">
          Welcome!
        </Text>
        <Text
          fontSize="md"
          color="white"
          fontWeight="normal"
          mt="10px"
          mb="26px"
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}
        >
          Use these awesome forms to login or create new account in your project
          for free.
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex
          direction="column"
          w="445px"
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Text
            fontSize="xl"
            color={textColor}
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            Register With
          </Text>
          <HStack spacing="15px" justify="center" mb="10px">
            <Flex
              onClick={login}
              justify="center"
              align="center"
              w="40vw"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}
            >
              <Icon
                as={FcGoogle}
                w="30px"
                h="30px"
                _hover={{ filter: "brightness(120%)" }}
                marginRight="10px"
              />
              Sign in with Google
            </Flex>
          </HStack>
          <Text
            fontSize="lg"
            color="gray.400"
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            or
          </Text>
          <FormControl>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Name
            </FormLabel>
            <InputField placeholder="Your full name" radius="medium" />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Email
            </FormLabel>
            <InputField placeholder="Your email address" radius="medium" />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Password
            </FormLabel>
            <InputField
              placeholder="Your password"
              radius="medium"
              type="password"
            />
            <FormControl display="flex" alignItems="center" mb="24px">
              <Switch id="remember-login" colorScheme="teal" me="10px" />
              <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                Remember me
              </FormLabel>
            </FormControl>
            <SignInButton> SIGN UP </SignInButton>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColor} fontWeight="medium">
              Already have an account?
              <Link color={titleColor} ms="5px" href="/login" fontWeight="bold">
                Sign In
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
