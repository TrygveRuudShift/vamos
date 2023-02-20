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
import { SidebarButtons } from "components/molecules"

// firebase
import { auth } from "../firebase/clientApp";

export default function Index() {
  const textColor = useColorModeValue("gray.700", "white");

  // Logic to set user state
  const [user, setUser] = useState(auth.currentUser);
  auth.onAuthStateChanged((user: any) => {
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
        <Box borderBottom="1px" mx="25px" mb="20px" w="80%" textAlign="center" >
          <Text fontSize="xl">VAMOS</Text>
        </Box>
        <SidebarButtons size={"medium"} gapSize={"3px"} width={"100%"}></SidebarButtons>
        <ContactUs />
      </Flex>


      <Flex w="80%" flexWrap="wrap">
        <DefaultHeader img_src={`url(${BgSignUp.src})`} title={user ? `Hello ${user.displayName}` : "You are logged out"} />

        {/* PROJECT PANELS */}
        <Flex mt="70px" flexDirection="column" gap="20px">
          <ProjectPanel />

          <ProjectPanel />
        </Flex>
      </Flex>
    </Flex>
  );
}
