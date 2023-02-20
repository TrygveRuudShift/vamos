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


      <Flex w="80%" flexWrap="wrap">
        <DefaultHeader type="profile" img_src={`url(${BgSignUp.src})`} title={user ? `Hello ${user.displayName}` : "You are logged out"} />


        <Flex mt="70px" w="full" justifyContent="space-between">
        <Card width="32%" minH="250px">
            <CardHeader>
              <Flex justifyContent="space-between">
                <Text>Profile Information</Text>
                <Button size="sm" colorScheme="teal" variant='outline'>
                  Edit
                </Button>
              </Flex>
            </CardHeader>
          </Card>

          <Card width="32%">
            <CardHeader>
              <Flex justifyContent="space-between">
                <Text>Favorite trips</Text>
              </Flex>
            </CardHeader>
          </Card>

          <Card width="32%">
            <CardHeader>
              <Flex justifyContent="space-between">
                <Text>Reviews</Text>
              </Flex>
            </CardHeader>
          </Card>
        </Flex>


        <Flex mt="20px" flexDirection="column" gap="20px" w="full">
          <ProjectPanel />
        </Flex>
      </Flex>
    </Flex>
  );
}
