import { SettingsIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import BgSignUp from "assets/img/BgSignUp.png";

import { ContactUs, Logo } from "components/atoms";
import {
  ProjectPanel,
  DefaultHeader,
  SidebarButtons,
  ProjectCard,
} from "components/molecules";
import NewYork from "assets/img/NewYork.jpeg";

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
        />
        <ContactUs />
      </Flex>

      <Flex w="80%" flexWrap="wrap">
        <DefaultHeader
          profilePic={user ? user.photoURL : undefined}
          img_src={`url(${BgSignUp.src})`}
          title={user ? `Hello ${user.displayName}` : "You are not logged in"}
        />

        {/* PROJECT PANELS */}
        <Flex mt="70px" flexDirection="column" gap="20px" w="full">
          <ProjectPanel>

          </ProjectPanel>

          <ProjectPanel />
        </Flex>
      </Flex>
    </Flex>
  );
}
