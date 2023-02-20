import { SettingsIcon } from "@chakra-ui/icons";
import {
  Flex,
  SimpleGrid,
  Grid,
  Box,
  Text,
  Image,
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
import {
  ProjectPanel,
  DefaultHeader,
  SidebarButtons,
} from "components/molecules";
import { useState } from "react";
import logo from "assets/img/logo2.png";
// firebase
import { auth } from "../firebase/clientApp";

export default function Index() {
  // Logic to set user state
  const [user, setUser] = useState(auth.currentUser);
  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

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
        <Box mx="25px" pb="15px" mb="5px" w="80%" borderBottom="1px" borderColor="blackAlpha.200" >
        <Image src={logo.src} alt="sign in image" h="40px" display="block" m="auto" />
        </Box>
        <SidebarButtons
          size={"medium"}
          gapSize={"10px"}
          width={"100%"}
          type={user ? "logged_in" : "logged_out"}
          selected="profile"
        />
        <ContactUs />
      </Flex>

      <Flex w="80%" flexWrap="wrap">
        <DefaultHeader
          type="profile"
          img_src={`url(${BgSignUp.src})`}
          title={user ? `Hello ${user.displayName}` : "You are logged out"}
        />

        <Flex mt="70px" w="full" justifyContent="space-between">
          <Card width="32%" minH="250px" borderRadius="2xl">
            <CardHeader>
              <Flex justifyContent="space-between">
                <Text>Profile Information</Text>
                <Button size="sm" colorScheme="teal" variant="outline">
                  Edit
                </Button>
              </Flex>
            </CardHeader>
          </Card>

          <Card width="32%" borderRadius="2xl">
            <CardHeader>
              <Flex justifyContent="space-between">
                <Text>Favorite trips</Text>
              </Flex>
            </CardHeader>
          </Card>

          <Card width="32%" borderRadius="2xl">
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
