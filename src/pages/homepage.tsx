import { SettingsIcon } from "@chakra-ui/icons";
import {
  Flex,
  SimpleGrid,
  Grid,
  Box,
  Text,
  Button,
  Image,
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
import { SidebarButtons } from "components/molecules";
import logo from "assets/img/logo2.png";

// firebase
import { auth } from "../firebase/clientApp";

export default function Index() {
  // Logic to set user state
  const [user, setUser] = useState(auth.currentUser);
  auth.onAuthStateChanged((user: any) => {
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
        />
        <ContactUs />
      </Flex>

      <Flex w="80%" flexWrap="wrap">
        <DefaultHeader
          profilePic={user ? user.photoURL : undefined}
          img_src={`url(${BgSignUp.src})`}
          title={user ? `Hello ${user.displayName}` : "You are logged out"}
        />

        {/* PROJECT PANELS */}
        <Flex mt="70px" flexDirection="column" gap="20px" w="full">
          <ProjectPanel />

          <ProjectPanel />
        </Flex>
      </Flex>
    </Flex>
  );
}
