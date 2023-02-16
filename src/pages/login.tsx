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
import { SignInButton, InputField, NavBar } from "components/atoms/";

export default function Login() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");

  return (
    <Flex position="relative" mb="0px">
      <NavBar 
        backgroundtype="blur"
      />
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
          mt="90px"
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
            <Heading color={titleColor} fontSize="28px" mb="5px">
              Welcome Back
            </Heading>
            <Text
              mb="15px"
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
              <InputField placeholder="Your email address" radius="medium"/>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <InputField placeholder="Your password" radius="medium" type="password"/>
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
