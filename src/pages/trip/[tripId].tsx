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
  FavoritesButton,
  TextArena,
} from "components/atoms";
import {
  ProjectPanel,
  DefaultHeader,
  SidebarButtons,
  ReviewCard,
  ImageSlider,
} from "components/molecules";
import {
  collection,
  doc,
  getDoc,
  limit,
  query,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BsHeart, BsStar } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";

// firebase
import { auth, db } from "../../firebase/clientApp";
import { TripTemplate } from "templates/tripTemplate";

export default function Index() {
  // Logic to set user state
  const [user, setUser] = useState(auth.currentUser);

  const [fav, setFav] = useState(false);

  const defaultImage =
    "https://i.natgeofe.com/k/e800ca90-2b5b-4dad-b4d7-b67a48c96c91/spain-madrid.jpg?w=636&h=358";
  const [slideImages, setSlideImages] = useState<string[]>([defaultImage]);

  const router = useRouter();
  const { tripId, tripJSON } = router.query;
  const trip: TripTemplate = JSON.parse(tripJSON ? (tripJSON as string) : "{}");

  const [favorite, setFavorite] = useState(false);

  console.log("tripId: ", tripId);
  console.log("tripJSON: ", tripJSON);
  console.log("trip: ", trip);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user?.email);
    });
  }, []);

  const [haveShared, setHaveShared] = useState(false);

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
          <ImageSlider
            slideRef={useRef(null)}
            images={
              trip?.pictures || [defaultImage, defaultImage, defaultImage]
            }
          />

          {/* Header, h1, add to favorite button, share button */}
          <Flex w="full" justifyContent="space-between" alignItems="center">
            <Text fontSize="4xl" fontWeight="bold">
              {trip?.title || "Trip to Backpacking in Spain with Guides!"}
            </Text>
            <Flex alignItems={"center"}>
              <FavButton
                favorites={trip?.favorites || []}
                tripID={tripId as string}
              />

              <Button
                colorScheme="teal"
                variant="link"
                size="sm"
                leftIcon={<Icon as={FaShareSquare} boxSize="25px" mb="2px" />}
                mx="10px"
                px="10px"
                _active={{ bg: "teal.100" }}
                onClick={() => {
                  navigator.clipboard.writeText(
                    // `https://pu.alfnes.dev/trip/${tripId}`
                    // `http://localhost:3000/trip/${tripId}`
                    `${window.location.href}`
                  );
                  setHaveShared(true);
                }}
              >
                {haveShared ? "Copied!" : "Share"}
              </Button>
            </Flex>
          </Flex>

          {/* Locations, in button, white buttons with box shadow*/}
          <Flex w="full" gap="10px">
            {[...(trip?.destinations || ["Madrid", "Barcelona", "Paris"])].map(
              (destination) => (
                <Button
                  bg="hovComp"
                  size="md"
                  width="130px"
                  fontWeight="semibold"
                  boxShadow="md"
                  _hover={{ boxShadow: "lg" }}
                >
                  {destination}
                </Button>
              )
            )}
          </Flex>

          {/* Trip description, Price estimate, Duration and rating. Big numbers, but small label over the numbers */}
          <Flex w="full" alignItems="center" gap="40px" mt="20px">
            <Flex flexDirection="column">
              <Text fontSize="sm" mb="-2">
                Price estimate:
              </Text>
              <Text m="0" fontSize="4xl" fontWeight="bold">
                €{trip?.cost ? trip.cost : 1539}
              </Text>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize="sm" mb="-2">
                Duration:
              </Text>
              <Text m="0" fontSize="4xl" fontWeight="bold">
                {trip?.duration ? trip.duration : 5} days
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

          <TextArena text={trip?.description || ""} length={520} />

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
