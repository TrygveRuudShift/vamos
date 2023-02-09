import { Flex, SimpleGrid, Grid, Box, Text } from "@chakra-ui/react";

export default function Index() {
  return (
    <Flex>
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

        <Box bg="teal.100" borderRadius="lg" width="80%" height="40px" display="inline-block" />
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
