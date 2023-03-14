import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
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

import "react-slideshow-image/dist/styles.css";
import {
  ContactUs,
  Logo,
  ProfileInformation,
  FavButton,
  TextArena,
} from "components/atoms";
import {
  ProjectPanel,
  DefaultHeader,
  SidebarButtons,
  ReviewCard,
  ImageSlider,
} from "components/molecules";
import { collection, limit, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BsHeart, BsStar } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
// firebase
import { auth, db } from "../../firebase/clientApp";

export default function Index() {
  // Logic to set user state
  const [user, setUser] = useState(auth.currentUser);

  const [fav, setFav] = useState(false);

  const router = useRouter();
  const { tripId } = router.query;

  console.log(tripId);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user?.email);
    });
  }, []);

  const slideImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

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
          selected="ratedtrips"
        />
        <ContactUs />
      </Flex>

      <Flex w="80%" flexWrap="wrap">
        <Flex mt="20px" flexDirection="column" gap="20px" w="full" pr="10px">
          <ImageSlider slideRef={useRef(null)} images={slideImages} />

          {/* Header, h1, add to favorite button, share button */}
          <Flex w="full" justifyContent="space-between" alignItems="center">
            <Text fontSize="4xl" fontWeight="bold">
              Backpacking in Spain with Guides!
            </Text>
            <Flex>
              <FavButton selected={fav} onClick={() => setFav(!fav)} />
              <Button
                colorScheme="teal"
                variant="link"
                size="sm"
                leftIcon={<Icon as={FaShareSquare} boxSize="25px" mb="2px" />}
                mx="10px"
              >
                Share
              </Button>
            </Flex>
          </Flex>

          {/* Locations, in button, white buttons with box shadow*/}
          <Flex w="full" gap="10px">
            <Button
              bg="white"
              size="md"
              width="130px"
              fontWeight="semibold"
              boxShadow="md"
              _hover={{ boxShadow: "lg" }}
            >
              Barcelona
            </Button>
            <Button
              bg="white"
              size="md"
              width="150px"
              fontWeight="semibold"
              boxShadow="md"
              _hover={{ boxShadow: "lg" }}
            >
              Madrid
            </Button>

            <Button
              bg="white"
              size="md"
              width="150px"
              fontWeight="semibold"
              boxShadow="md"
              _hover={{ boxShadow: "lg" }}
            >
              Granada
            </Button>
          </Flex>

          {/* Trip description, Price estimate, Duration and rating. Big numbers, but small label over the numbers */}
          <Flex w="full" alignItems="center" gap="40px" mt="20px">
            <Flex flexDirection="column">
              <Text fontSize="sm" mb="-2">
                Price estimate:
              </Text>
              <Text m="0" fontSize="4xl" fontWeight="bold">
                1000,- euros
              </Text>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize="sm" mb="-2">
                Duration:
              </Text>
              <Text m="0" fontSize="4xl" fontWeight="bold">
                10 days
              </Text>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize="sm" mb="-2">
                Rating (501 reviews):
              </Text>
              <Text m="0" fontSize="4xl" fontWeight="bold">
                4.5 / 5
              </Text>
            </Flex>
          </Flex>

          <TextArena
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
              et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget
              ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl
              sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl
              nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed
              tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
              et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget
              ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl
              sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl
              nisl aliquam nisl, et aliquam nisl nisl sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
              et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget
              ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl
              sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl
              nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed
              tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
              et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget
              ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl
              sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl
              nisl aliquam nisl, et aliquam nisl nisl sit amet..."
            length={520}
          />

          {/* STAR, "write a review" button */}

          <Button
            bg="teal.300"
            borderRadius="xl"
            color={"white"}
            w="220px"
            size="lg"
            mb="8px"
            leftIcon={<Icon as={BsStar} boxSize="30px" mr="5px" />}
          >
            Write a review
          </Button>

          <hr />

          {/* Reviews, 3 reviews, with a "..." and read more button */}
          <Text fontSize="2xl" fontWeight="bold">
            Reviews:
          </Text>

          <ReviewCard
            name="Ola Nordman"
            age="3 weeks ago"
            rating={4.6}
            length={520}
            avatar="https://bit.ly/dan-abramov"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet..."
          />
          <ReviewCard
            name="Ola Nordman"
            age="3 weeks ago"
            rating={4.6}
            avatar="https://bit.ly/dan-abramov"
          />
          <ReviewCard
            name="Ola Nordman"
            age="3 weeks ago"
            rating={4.6}
            length={520}
            avatar="https://bit.ly/dan-abramov"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, et aliquam nisl nisl sit amet..."
          />

          {user && (
            <ProjectPanel
              title="My Trips"
              tripQuery={query(
                collection(db, "trips"),
                where("userEmailAddress", "==", user?.email),
                limit(3)
              )}
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
