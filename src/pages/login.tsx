import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Badge,
  Heading,
  Image,
  Link,
  Switch,
  Text,
  useColorModeValue,
  HStack,
  Icon,
} from "@chakra-ui/react";
import signInImage from "assets/img/signInImage2.png";
import { SignInButton, InputField, NavBar, Logo } from "components/atoms/";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, login } from "../firebase/clientApp";

export default function Login() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");

  // redirect to home page when user is logged in
  auth.onAuthStateChanged((user) => {
    if (user) {
      // TODO: add this line when login page is done
      // window.location.href = "/homepage";
    }
  });

  return (
    <Flex position="relative" mb="0px">
      <NavBar backgroundtype="blur" />
      <Flex
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
          h="650px"
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
              mb="26px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              LOGIN WITH
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
              mb="5px"
            >
              or
            </Text>

            <FormControl>
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
          <Flex
            backgroundImage={`url(${signInImage.src})`}
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius="20px"
            color="white"
            fontWeight="bold"
          >
            {/* center text */}
            <Logo h="80px" margin="auto" mt="55%" />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
