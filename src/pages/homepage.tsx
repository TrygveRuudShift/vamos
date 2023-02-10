import { Flex, SimpleGrid, Grid, Box, Text, Button, Card, CardBody, CardHeader, Icon, useColorModeValue } from "@chakra-ui/react";
import { title } from "process";

export default function Index() {
  const textColor = useColorModeValue("gray.700", "white");
  const description = "";
  return (
    <Flex bg="#F8F9FA">
      {/* SIDEPANEL */}
      <Box
        border="1px"
        borderRadius="xl"
        minH={"100vh"}
        w="15%"
        display="inline-block"
        flexDirection="column"
        textAlign="center"
        pt="30px"
      >
        <Text fontSize="xl">VAMOS</Text>
        <Box  borderBottom="1px" mx="25px" mb="20px"/>

        <Card p='16px' my='24px' display="inline-block">
      <CardHeader p='12px 5px' mb='12px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            tittel
          </Text>
          <Text fontSize='sm' color='gray.500' fontWeight='400'>
          A collection of projects
          </Text>
        </Flex>
      </CardHeader>
      <CardBody px='5px'>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
          templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
          gap='24px'>
          {/* <ProjectCard
            image={imageArchitect1}
            name={"Project #1"}
            category={"Modern"}
            description={
              "As Uber works through a huge amount of internal management turmoil."
            }
            avatars={[avatar2, avatar4, avatar6]}
          />
          <ProjectCard
            image={imageArchitect2}
            name={"Project #2"}
            category={"Scandinavian"}
            description={
              "Music is something that every person has his or her own specific opinion about."
            }
            avatars={[avatar4, avatar2, avatar6, avatar4]}
          />
          <ProjectCard
            image={imageArchitect3}
            name={"Project #3"}
            category={"Minimalist"}
            description={
              "Different people have different taste, especially various types of music."
            }
            avatars={[avatar2, avatar4, avatar6]}
          /> */}
          <Button
            p='0px'
            bg='transparent'
            color='gray.500'
            border='1px solid lightgray'
            borderRadius='15px'
            minHeight={{ sm: "200px", md: "100%" }}>
            <Flex direction='column' justifyContent='center' align='center'>
              {/* <Icon as={FaPlus} fontSize='lg' mb='12px' /> */}
              <Text fontSize='lg' fontWeight='bold'>
                Create a New Project
              </Text>
            </Flex>
          </Button>
        </Grid>
      </CardBody>
    </Card>
        <Box bg="teal.100" borderRadius="lg" width="80%" height="40px" display="inline-block" />
        <Box bg="teal.100" borderRadius="lg" width="80%" height="40px" display="inline-block" />

        
      </Box>

      <Flex w="85%" display="inline-block">
        {/* HEADER */}
        <Box h="200px" border="1px" borderRadius="xl" w="100%"></Box>

        {/* PROSJECT CARDS */}
        <Flex h="300px" border="1px" borderRadius="xl"></Flex>
      </Flex>
    </Flex>
  );
}
