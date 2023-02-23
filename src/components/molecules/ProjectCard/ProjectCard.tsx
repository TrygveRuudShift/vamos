import { Image, Flex, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { Rating } from "../../atoms";

interface Cardprops {
  title: string;
  price: string;
  reviewCount?: number;
  description?: string;
  img_url: any;
  rating: number;
}

export const ProjectCard: React.FC<Cardprops> = ({
  title,
  price,
  reviewCount,
  img_url,
  description,
  rating,
}) => {
  const bakgrunn = "";
  return (
    <Flex w="260px" h="290px" borderRadius="2xl" overflow="hidden">
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
            src={img_url}
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
          <Text ml="13px">{title}</Text>
          <Text
            mr="13px"
            textAlign="end"
            fontWeight="bold"
            fontSize="sm"
            position="absolute"
            right="0px"
            top="6px"
          >
            {price}
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
            {description}
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
            onClick={() => console.log("clicked")}
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
