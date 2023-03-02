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
  Image,
  Avatar,
  Textarea,
} from "@chakra-ui/react";
import BgSignUp from "assets/img/BgSignUp.png";
import { ContactUs, Logo } from "components/atoms";
import {
  ProjectPanel,
  DefaultHeader,
  SidebarButtons,
} from "components/molecules";
import { useState } from "react";

// firebase
import { auth } from "../firebase/clientApp";

// templates
import { TripTemplate } from "templates/tripTemplate";
import React from "react";

export default function Index() {
  // Logic to set user state
  const [user, setUser] = useState(auth.currentUser);

  // add useeffect of onAuthStateChanged
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const trips = [
    "Spain",
    "France",
    "Italy",
    "Germany",
    "...",
    "Add destination",
  ];

  const images = [
    "", // Spain
    "", // France
  ];

  const [localTripTemplate, setLocalTripTemplate] = useState<TripTemplate>();
  // add trip to database
  const addTrip = () => {
    console.log(localTripTemplate);
  };

  return (
    <Flex pt="5px">
      {/* SIDEPANEL */}
      <Flex
        minH={"100vh"}
        w="270px"
        flexDirection="column"
        pt="30px"
        alignItems="center"
        gap="20px"
      >
        <Flex
          mx="25px"
          pb="15px"
          mb="5px"
          w="80%"
          borderBottom="1px"
          borderColor="blackAlpha.200"
          justifyContent="center"
        >
          <Logo h="40px" />
        </Flex>
        <SidebarButtons
          size={"medium"}
          gapSize={"10px"}
          width={"100%"}
          type={user ? "logged_in" : "logged_out"}
          selected="addtrips"
        />
        <ContactUs />
      </Flex>

      <Flex w="80%" flexDirection="column">
        <DefaultHeader
          profilePic={user ? user.photoURL : undefined}
          img_src={`url(${BgSignUp.src})`}
          title={user ? `Hello ${user.displayName}` : "You are logged out"}
          type="newTrip"
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
              <Text fontSize="md">Title</Text>
              <Input
                placeholder="Enter title"
                size="md"
                mt="3px"
                borderRadius="lg"
                onChange={(e) => {
                  console.log(e.target.value);
                  setLocalTripTemplate({
                    title: e.target.value,
                    ...localTripTemplate,
                  });
                }}
              />
            </Box>

            <Box>
              <Text fontSize="md">Estimated costs</Text>
              <Input
                placeholder="Enter estimated costs"
                size="md"
                mt="3px"
                borderRadius="lg"
                onChange={(e) => {
                  setLocalTripTemplate({
                    cost: Number(e.target.value),
                    ...localTripTemplate,
                  });
                }}
              />
            </Box>

            <Box>
              <Text fontSize="md">Duration</Text>
              <Input
                placeholder="Enter duration"
                size="md"
                mt="3px"
                borderRadius="lg"
                onChange={(e) => {
                  setLocalTripTemplate({
                    duration: Number(e.target.value),
                    ...localTripTemplate,
                  });
                }}
              />
            </Box>
          </SimpleGrid>

          <Flex flexWrap="wrap" gap="10px">
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

          <Flex flexWrap="wrap" gap="10px">
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
                    color: "gray.500",
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
            <Text fontSize="md">Description</Text>
            <Textarea
              placeholder="Write here"
              size="md"
              mt="3px"
              borderRadius="lg"
              h="300px"
            />
          </Box>

          {/* Add cancel and upload button */}
          <Flex justifyContent="flex-end" gap="10px">
            <Button
              variant="outline"
              colorScheme="teal"
              borderRadius="lg"
              onClick={() => {
                window.location.href = "/homepage";
              }}
            >
              Cancel
            </Button>
            <Button
              variant="solid"
              colorScheme="teal"
              borderRadius="lg"
              w="150px"
              onClick={addTrip}
            >
              Upload
            </Button>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
