import { Image, Flex, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { Rating } from "../../atoms";

interface Cardprops {
  title: string;
  price: string;
duration?: number;
  description?: string;
  img_url: any;
  rating: number;
}

export const ProjectCard: React.FC<Cardprops> = ({
  title,
  price,
  duration,
  img_url,
  description,
  rating,
}) => {
  const bakgrunn = "";
  return (
    <Flex w="260px" h="230px" borderRadius="2xl" overflow="hidden">
      <Grid
        h="100%"
        w="100%"
        templateColumns="1fr 1fr 1fr 1fr 1fr"
        templateRows="1fr 1fr 1fr 1fr"
        gap="5px"
        borderRadius="2xl"
        borderColor={bakgrunn}
        borderWidth="1px"
      >
        <GridItem
          colSpan={5}
          rowSpan={1}
          bg="teal.500"
          w="260px"
          h="120px"
          borderRadius="2xl"
        >
          <Image
            src={img_url}
            alt="Your Image"
            boxSize="100%"
            borderRadius="2xl"
            borderBottomRadius="0px"
            objectFit="cover"
          />
        </GridItem>
        <GridItem
          colSpan={3}
          rowSpan={1}
          bg={bakgrunn}
          fontWeight="bold"
          lineHeight="tight"
          noOfLines={1}
          position="relative"
          pt="5px"
        >
          <Text ml="13px">{title}</Text>
        </GridItem>
        <GridItem
          colSpan={2}
          rowSpan={1}
          bg={bakgrunn}
          w="100%"
          h="100%"
          lineHeight="tight"
          pt="0px"
          ml="40px"
        >
        <Rating stars={rating} size="small" mt="5px" fontWeight="semibold" lineHeight="tight" textalign="end"/>
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
            w="85%"
            h="80%"
            variant="outline"
            colorScheme="teal"
            p="3px"
            borderRadius="15"
            fontSize="9px"
            alignItems={"center"}
            ml="8px"
            onClick={() => console.log("clicked")}
          >
            VIEW TRIP
          </Button>
        </GridItem>
        
        <GridItem
          colSpan={1}
          rowSpan={2}
          bg={bakgrunn}
          w="100%"
          h="100%"
          p="2px"
          fontSize={12}
        >
          <Text 
            textAlign="center" 
            mt="3px" 
            ml="4px"
            fontWeight="bold"
            lineHeight="tight"
          >
            {duration?.toString() + " days"}
          </Text>
        </GridItem>
        <GridItem
          colSpan={2}
          rowSpan={1}
          bg={bakgrunn}
          w="100%"
          h="100%"
          p="2px"
          >
          <Text
          fontWeight="bold"
          lineHeight="tight"
          textAlign="center"
          mt="3px"
          fontSize={12}          
          >
            {price}
          </Text>
        </GridItem>
      </Grid>
    </Flex>
  );
};
