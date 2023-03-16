import { Image, Flex, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { Rating } from "../../atoms";
import Link from "next/link";
import { useRouter } from "next/router";
import { TripTemplate } from "templates/tripTemplate";
import { json } from "stream/consumers";

interface Cardprops {
  reviewCount?: number;
  rating: number;
  trip : TripTemplate;
}

export const ProjectCard: React.FC<Cardprops> = ({
  reviewCount,
  rating,
  trip,
}) => {
  const bakgrunn = "";

  const router = useRouter();

  return (
    <Flex w="260px" h="290px" borderRadius="2xl" overflow="hidden" bg="hovComp">
      <Grid
        h="100%"
        w="100%"
        templateColumns="1fr 1fr 1fr 1fr 1fr"
        templateRows="1fr 1fr 1fr 1fr"
        gap="5px"
        borderRadius="2xl"
      >
        <GridItem
          colSpan={5}
          rowSpan={1}
          bg="teal.500"
          w="260px"
          h="175px"
          borderRadius="2xl"
        >
          <Image
            src={trip?.pictures ? trip.pictures[0] : "gs://vamos-pu.appspot.com/images/spain3.webp"}
            alt="Your Image"
            boxSize="100%"
            borderRadius="2xl"
            objectFit="cover"
          />
        </GridItem>
        <GridItem
          colSpan={5}
          rowSpan={1}
          bg={bakgrunn}
          fontWeight="semibold"
          lineHeight="tight"
          noOfLines={1}
          position="relative"
          pt="5px"
        >
          <Text ml="13px">{trip?.title ? trip.title: "Trip title"}</Text>
          <Text
            mr="13px"
            textAlign="end"
            fontWeight="bold"
            fontSize="sm"
            position="absolute"
            right="0px"
            top="6px"
          >
            €{trip?.cost ? trip.cost: 0}
          </Text>
        </GridItem>
        <GridItem
          colSpan={5}
          rowSpan={1}
          bg={bakgrunn}
          w="100%"
          h="100%"
          fontSize={8}
        >
          <Text ml="13px" textColor="gray.400">
            {trip?.description ? trip.description: "Undefined description"}
          </Text>
        </GridItem>
        <GridItem colSpan={2} rowSpan={1} w="100%" h="100%" textAlign="center">
          <Button
            w="95%"
            h="100%"
            variant="outline"
            colorScheme="teal"
            p="5px"
            borderRadius="md"
            fontSize="10px"
            alignItems={"center"}
            ml="13px"
            onClick={() => {
              router.push({
                pathname: "/trip/" + trip.id,
                query: { tripJSON: JSON.stringify(trip) },
              })
            }}
          >
            VIEW TRIP
          </Button>
        </GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          bg={bakgrunn}
          w="100%"
          h="100%"
          fontWeight="semibold"
          ml="13px"
        >
          <Rating stars={rating} size="small" mt="5px" />
        </GridItem>
        <GridItem
          colSpan={2}
          rowSpan={2}
          bg={bakgrunn}
          w="100%"
          h="100%"
          p="2px"
          fontSize={12}
        >
          <Text textAlign="end" mt="3px" mr="13px">
            {reviewCount?.toString() + " reviews"}
          </Text>
        </GridItem>
      </Grid>
    </Flex>
  );
};
