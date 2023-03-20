import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Flex, Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BgSignUp from "assets/img/BgSignUp.png";

import { ContactUs, Logo } from "components/atoms";
import {
  ProjectPanel,
  DefaultHeader,
  SidebarButtons,
  ProjectCard,
} from "components/molecules";
import NewYork from "assets/img/NewYork.jpeg";
import { queryFilter } from "utils/queryFilter";

// firebase
import { auth, db } from "../firebase/clientApp";
import { collection, limit, orderBy, query, where } from "firebase/firestore";
import { GoSettings } from "react-icons/go";

export default function Index() {
  // Logic to set user state
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user?.email);
    });
  }, []);

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
        <Flex w="80%" mx="25px" bg="sideBarBorderBottom">
          <Flex
            pb="15px"
            mb="1px"
            w="100%"
            justifyContent="center"
            bg="sideBar"
          >
            <Logo h="40px" />
          </Flex>
        </Flex>
        <SidebarButtons
          size={"medium"}
          gapSize={"10px"}
          width={"100%"}
          type={user ? "logged_in" : "logged_out"}
          selected="mytrips"
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
        <Flex mt="60px" flexDirection="column" gap="20px" w="full">
          {/* Box for filter */}
          <Flex
            w="100%"
            bg="hovComp"
            borderRadius="lg"
            boxShadow="md"
            p="20px"
            flexDirection="column"
            gap="15px"
          >
            <Flex gap="15px">
              <Select placeholder="Filter by;" w="180px">
                <option value="option1" selected>
                  Filter by: A-Z
                </option>
                <option value="option2">Filter by: Price</option>
                <option value="option3">Filter by: Rating</option>
              </Select>
              <Select placeholder="Select Price" w="180px">
                <option value="option1" selected>
                  Any price
                </option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Select placeholder="Select distance" w="180px">
                <option value="option1" selected>
                  World wide
                </option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Flex
                w="80px"
                h="40px"
                bg="hovComp"
                borderRadius="lg"
                alignItems="center"
                gap="5px"
                cursor="pointer"
                p="5px"
                _hover={{ boxShadow: "md" }}
              >
                <GoSettings size={20} />
                More
              </Flex>
            </Flex>

            <Input placeholder="Search for trips" />
          </Flex>

          <ProjectPanel
            title="USA"
            viewAll={true}
            tripQuery={query(
              collection(db, "trips"),
              where(
                "destinationsLowercase",
                "array-contains-any",
                queryFilter.USA
              ),
              limit(100)
            )}
          />
          {/* <ProjectPanel title="Most popular" tripQuery={query(collection(db, "trips"), orderBy("rating", "desc"), limit(3))} /> */}
        </Flex>
      </Flex>
    </Flex>
  );
}
