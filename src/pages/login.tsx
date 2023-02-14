import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Badge,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import signInImage from "assets/img/signInImage.png";
import { SignInButton } from "components/atoms/SignInButton/SignInButton";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/clientApp";

export default function Login() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");

  // firebase auth
  const provider = new GoogleAuthProvider();
  
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log({ credential, token, user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  // redirect to home page when user is logged in
  auth.onAuthStateChanged((user) => {
    if (user) {
      window.location.href = "/test_sign_in";
    }
  });

  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: "150px", lg: "80px" }}
          >
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Welcome Back
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              Enter your email and password to sign in
            </Text>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="24px"
                fontSize="sm"
                type="text"
                placeholder="Your email address"
                size="lg"
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                borderRadius="15px"
                mb="36px"
                fontSize="sm"
                type="password"
                placeholder="Your password"
                size="lg"
              />
              <FormControl display="flex" alignItems="center">
                <Switch id="remember-login" colorScheme="teal" me="10px" />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  ms="1"
                  fontWeight="normal"
                >
                  Remember me
                </FormLabel>
              </FormControl>
              <SignInButton>SIGN IN</SignInButton>
              <SignInButton onClick={login}>SIGN IN WITH GOOGLE</SignInButton>
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Don't have an account?
                <Link
                  color={titleColor}
                  ms="5px"
                  fontWeight="bold"
                  href="/register"
                >
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w="40vw"
          position="absolute"
          right="0px"
        >
          <Box
            backgroundImage={`url(${signInImage.src})`}
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius="20px"
          ></Box>
        </Box>
      </Flex>
    </Flex>
  );
}
