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
  Input,
  Avatar,
  Textarea
} from "@chakra-ui/react";
import BgSignUp from "assets/img/BgSignUp.png";
import { ContactUs } from "components/atoms";
import { ProjectPanel, DefaultHeader } from "components/molecules";
import { useState } from "react";

// firebase
import { auth } from "../firebase/clientApp";

export default function Index() {
  const textColor = useColorModeValue("gray.700", "white");

  // Logic to set user state
  const [user, setUser] = useState(auth.currentUser);
  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  const trips = [
    "Spain",
    "France",
    "Italy",
    "Germany",
    "...",
    "Add destination"
  ]

  const images = [
    "", // Spain
    "", // France
  ]

  return (
    <Flex pt="20px">
      {/* SIDEPANEL */}
      <Flex
        minH={"100vh"}
        w="270px"
        flexDirection="column"
        pt="30px"
        alignItems="center"
        gap="20px"
      >
        <Text fontSize="xl">VAMOS</Text>

        <Box bg="teal.100" borderRadius="lg" width="80%" height="40px" />

        <ContactUs />
      </Flex>

      <Flex w="80%" flexDirection="column">
        <DefaultHeader
          type="newTrip"
          img_src={`url(${BgSignUp.src})`}
          title={user ? `Hello ${user.displayName}` : "You are logged out"}
        />

        <Card
          display="flex"
          flexDirection="column"
          w="100%"
          p="20px"
          gap="30px"
          bgColor="white"
          minH="500px"
          borderRadius="md"
          mt="30px"
        >
          <Text fontSize="xl" fontWeight="bold">
            New Trip
          </Text>

          <SimpleGrid columns={4} spacing={8}>
            <Box>
              <Text fontSize="md">
                Title
              </Text>
              <Input
                placeholder="Enter title"
                size="md"
                mt="3px"
                borderRadius="lg"
              />
            </Box>

            <Box>
              <Text fontSize="md">
                Estimated costs
              </Text>
              <Input
                placeholder="Enter estimated costs"
                size="md"
                mt="3px"
                borderRadius="lg"
              />
            </Box>

            <Box>
              <Text fontSize="md">
                Duration
              </Text>
              <Input
                placeholder="Enter duration"
                size="md"
                mt="3px"
                borderRadius="lg"
              />
            </Box>
          </SimpleGrid>

          <Flex flexWrap="wrap" gap="10px" >
            {trips.map((trip, index) => (
              <Button
                key={index}
                variant="outline"
                colorScheme="teal"
                borderRadius="lg"
                size="md"
                w="150px"
                h="50px"
                textAlign="center"
              >
                {trip}
                
              </Button>
            ))}
          </Flex>

          <Flex flexWrap="wrap" gap="10px" >
            {images.map((image, index) => (
              <Box
                key={index}
                w="350px"
                h="200px"
                borderRadius="lg"
                bg="gray.100"
                position="relative"
              >
                {/* X, text */}
                <Text
                  position="absolute"
                  top="10px"
                  right="20px"
                  color="white"
                  fontWeight="bold"
                  // hover
                  cursor="pointer"
                  
                  _hover={{
                    color: "gray.500"
                  }}

                >
                  X
                </Text>
                </Box>
            ))}

            <Button
              variant="outline"
              colorScheme="teal"
              borderRadius="lg"
              size="md"
              w="350px"
              h="200px"
              textAlign="center"
            >
              + ADD IMAGE
            </Button>
          </Flex>

          {/* Big add Description field saying "Write here" */}
          
          <Box>
          <Text fontSize="md">
            Description
          </Text>
          <Textarea
            placeholder="Write here"
            size="md"
            mt="3px"
            borderRadius="lg"
            h="300px"
          />

          </Box>

        </Card>
      </Flex>
    </Flex>
  );
}
