import { SettingsIcon } from "@chakra-ui/icons";
import {
  Flex,
  SimpleGrid,
  Grid,
  Box,
  Text,
  Button,
  Card,
  CardBody,
  CardHeader,
  Icon,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import BgSignUp from "assets/img/BgSignUp.png";

export default function Index() {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Flex pt="20px">
      {/* SIDEPANEL */}
      <Box
        minH={"100vh"}
        w="270px"
        display="inline-block"
        flexDirection="column"
        textAlign="center"
        pt="30px"
      >
        <Text fontSize="xl">VAMOS</Text>
        <Box borderBottom="1px" mx="25px" mb="20px" />

        <Box
          bg="teal.100"
          borderRadius="lg"
          height="40px"
          display="inline-block"
        />
        <Box
          bg="teal.100"
          borderRadius="lg"
          width="80%"
          height="40px"
          display="inline-block"
        />
      </Box>

      <Flex w="80%" display="inline-block">
        {/* HEADER */}
        <Box
          h="200px"
          borderRadius="2xl"
          w="100%"
          bgImage={`url(${BgSignUp.src})`}
          bgSize="cover"
          px="0px"
          flexDirection="column"
        >
          <Flex h="10px" px="20px" pt="15px" justifyContent="space-between">
            <Box>
              <Text color="white"> Pages / Backpack Trips</Text>
              <Text color="white" fontWeight="bold">
                {" "}
                Backpack Trips
              </Text>
            </Box>
            <Flex color="white" alignItems="center" mt="20px">
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                color="white"
                size="md"
                mr="10px"
                showBorder={true}
              />
              <Text fontWeight="bold" mr="10px">
                Hi, Full Name!{" "}
              </Text>
              <SettingsIcon boxSize="20px" />
            </Flex>
          </Flex>
          {/* BLURR */}
          <Box backdropFilter="blur(8px)" w="98%" mt="140px">
            <Flex
              h="80px"
              borderRadius="2xl"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
              bg="rgba(255, 255, 255, 0.7)"
              align="center"
              justify="space-between"
            >
              <Text ml="20px" fontSize="5xl" fontWeight="bold">
                Backpack trips
              </Text>
              <Flex mr="10px" gap="10px">
                <Button
                  borderRadius="2xl"
                  fontSize="2xs"
                  width="100px"
                  backgroundColor="white"
                  boxShadow="base"
                >
                  ADD A TRIP
                </Button>
                <Button
                  borderRadius="2xl"
                  fontSize="2xs"
                  width="100px"
                  backgroundColor="white"
                  boxShadow="base"
                >
                  LIST VIEW
                </Button>
                <Button
                  borderRadius="2xl"
                  fontSize="2xs"
                  bg="transparent"
                  _hover={{ bg: "whiteAlpha.800" }}
                >
                  SEARCH
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>

        {/* PROSJECT panels */}
        <Flex mt="70px" flexDirection="column" gap="20px">
          <Card p="16px" display="inline-block" borderRadius="2xl">
            <CardHeader p="12px">
              <Flex direction="column">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  EUROPE
                </Text>
                <Text fontSize="sm" color="gray.500" fontWeight="400">
                  A collection of projects
                </Text>
              </Flex>
            </CardHeader>
            <CardBody px="5px" py="0px">
              <Grid
                templateColumns={{
                  sm: "1fr",
                  md: "1fr 1fr",
                  xl: "repeat(4, 1fr)",
                }}
                templateRows={{
                  sm: "1fr 1fr 1fr auto",
                  md: "1fr 1fr",
                  xl: "1fr",
                }}
                gap="24px"
              >
                {/* Project Card */}
                <Box
                  bg="teal.200"
                  w="260px"
                  h="300px"
                  m="0"
                  borderRadius="2xl"
                ></Box>
                <Box
                  bg="teal.200"
                  w="260px"
                  h="300px"
                  m="0"
                  borderRadius="2xl"
                ></Box>
                <Box
                  bg="teal.200"
                  w="260px"
                  h="300px"
                  m="0"
                  borderRadius="2xl"
                ></Box>

                <Button
                  p="0px"
                  bg="transparent"
                  color="gray.500"
                  border="1px solid lightgray"
                  borderRadius="15px"
                  minHeight={{ sm: "200px", md: "100%" }}
                >
                  <Flex
                    direction="column"
                    justifyContent="center"
                    align="center"
                  >
                    <Text fontSize="lg" mb="12px">
                      ...
                    </Text>
                    <Text fontSize="lg" fontWeight="bold">
                      View more trips
                    </Text>
                  </Flex>
                </Button>
              </Grid>
            </CardBody>
          </Card>
          
          <Card p="16px" display="inline-block" borderRadius="2xl">
            <CardHeader p="12px">
              <Flex direction="column">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  EUROPE
                </Text>
                <Text fontSize="sm" color="gray.500" fontWeight="400">
                  A collection of projects
                </Text>
              </Flex>
            </CardHeader>
            <CardBody px="5px" py="0px">
              <Grid
                templateColumns={{
                  sm: "1fr",
                  md: "1fr 1fr",
                  xl: "repeat(4, 1fr)",
                }}
                templateRows={{
                  sm: "1fr 1fr 1fr auto",
                  md: "1fr 1fr",
                  xl: "1fr",
                }}
                gap="24px"
              >
                {/* Project Card */}
                <Box
                  bg="teal.200"
                  w="260px"
                  h="300px"
                  m="0"
                  borderRadius="2xl"
                ></Box>
                <Box
                  bg="teal.200"
                  w="260px"
                  h="300px"
                  m="0"
                  borderRadius="2xl"
                ></Box>
                <Box
                  bg="teal.200"
                  w="260px"
                  h="300px"
                  m="0"
                  borderRadius="2xl"
                ></Box>

                <Button
                  p="0px"
                  bg="transparent"
                  color="gray.500"
                  border="1px solid lightgray"
                  borderRadius="15px"
                  minHeight={{ sm: "200px", md: "100%" }}
                >
                  <Flex
                    direction="column"
                    justifyContent="center"
                    align="center"
                  >
                    <Text fontSize="lg" mb="12px">
                      ...
                    </Text>
                    <Text fontSize="lg" fontWeight="bold">
                      View more trips
                    </Text>
                  </Flex>
                </Button>
              </Grid>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}
