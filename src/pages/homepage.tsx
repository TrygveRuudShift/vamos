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
import { DefaultHeader} from "components/molecules"

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
        <DefaultHeader img_src={BgSignUp.src} />

        {/* PROJECT PANELS */}
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
