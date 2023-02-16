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
  HStack,
  Icon,
} from "@chakra-ui/react";
import signInImage from "assets/img/signInImage.png";
import { SignInButton, InputField, NavBar } from "components/atoms/";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

export default function Login() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");

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
            <Heading color={titleColor} fontSize="28px" mb="5px" mt="120px">
              Welcome Back
            </Heading>
            <Text
              mb="15px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              LOGIN WITH
            </Text>

            <HStack spacing='15px' justify='center' mb='22px'>
            <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='15px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link href='#'>
                <Icon
                  as={FaGoogle}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
          </HStack>
          <Text
            fontSize='lg'
            color='gray.400'
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            or
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
