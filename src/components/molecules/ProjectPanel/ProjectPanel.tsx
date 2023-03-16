import {
  Card,
  CardHeader,
  Flex,
  CardBody,
  Grid,
  Button,
  Box,
  Text,
  useColorModeValue,
  useFocusEffect,
} from "@chakra-ui/react";
import { ProjectCard } from "../";
import NewYork from "../../../assets/img/NewYork.jpeg";

// firebase
import {
  getDocs,
  collection,
  Query,
  DocumentData,
  CollectionReference,
} from "firebase/firestore";
import { db } from "../../../firebase/clientApp";
import { TripTemplate } from "templates/tripTemplate";
import { useEffect, useState } from "react";

interface ProjectCardsProps {
  trips: TripTemplate[];
  descriptionWordLimit?: number;
  cardLimit?: number;
}
interface ProjectPanelProps {
  title: string;
  tripQuery: Query<DocumentData> | CollectionReference<DocumentData>;
  cardLimit?: number;
  onClick?: () => void;
  [key: string]: any;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  trips,
  descriptionWordLimit = 200,
  cardLimit = 3,
}) => {
  return (
    <>
      {trips.map((trip, index) => (
        index < cardLimit ? <ProjectCard
          reviewCount={0}
          rating={0}
          trip={trip}
        /> : <></>
      ))}
    </>
  );
};

export const ProjectPanel: React.FC<ProjectPanelProps> = ({
  title,
  tripQuery,
  cardLimit,
  onClick,
  children,
  ...props
}) => {
  const textColor = useColorModeValue("gray.700", "white");

  const [tripsArray, setTripsArray] = useState([] as TripTemplate[]);

  useEffect(() => {
    if (!tripQuery) {
      return;
    }
    getDocs(tripQuery).then((querySnapshot) => {
      const tempArray: TripTemplate[] = [];
      querySnapshot.forEach((doc) => {
        tempArray.push(doc.data());
        tempArray[tempArray.length - 1].id = doc.id;
      });
      setTripsArray(tempArray);
      console.log(tempArray);
    });
  }, []);

  return (
    <Card p="16px" borderRadius="2xl" w="full" bg="hovComp">
      <CardHeader p="12px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.500" fontWeight="400">
            A collection of projects
          </Text>
        </Flex>
      </CardHeader>
      <CardBody px="5px" py="0px">
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            xl: "repeat(4, 1fr)",
          }}
          templateRows={{
            sm: "1fr 1fr 1fr auto",
            md: "1fr 1fr",
            xl: "1fr",
          }}
          gap="24px"
        >
          {/* Project Card */}
          {children ? (
            children
          ) : (
            <ProjectCards trips={tripsArray} cardLimit={cardLimit} />
          )}
          <Button
            p="0px"
            bg="transparent"
            color="gray.500"
            border="1px solid lightgray"
            borderRadius="15px"
            minHeight="100px"
            h="100%"
          >
            <Flex direction="column" justifyContent="center" align="center">
              <Text fontSize="lg" mb="12px">
                ...
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                More trips
              </Text>
            </Flex>
          </Button>
        </Grid>
      </CardBody>
    </Card>
  );
};
