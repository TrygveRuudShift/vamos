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
} from "@chakra-ui/react";
import BgSignUp from "assets/img/BgSignUp.png";

export default function Index() {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Flex pt="20px">
      {/* SIDEPANEL */}
      <Box
        minH={"100vh"}
        w="20%"
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
          width="80%"
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
          <Flex h="10px" px="20px" pt="15px">
            <Box>
              <Text color="white"> Pages / Backpack Trips</Text>
              <Text color="white" fontWeight="bold">
                {" "}
                Backpack Trips
              </Text>
            </Box>
            <Box></Box>
          </Flex>
          {/* BLURR */}
          <Box backdropFilter="blur(8px)">
          <Flex
            mt="140px"
            h="80px"
            w="98%"
            borderRadius="2xl"
            bottom="-30px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
            bg="white"
            opacity="0.7"
            align="center"
          >
            <Text ml="20px" fontSize="5xl" fontWeight="bold">
              Backpack trips
            </Text>
          </Flex>
          </Box>
        </Box>

        {/* PROSJECT panel */}
        <Flex mt="50px">
          <Card p="16px" my="24px" display="inline-block">
            <CardHeader p="12px">
              <Flex direction="column">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  tittel
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
                      +
                    </Text>
                    <Text fontSize="lg" fontWeight="bold">
                      Create a New Project
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
