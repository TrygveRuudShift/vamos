import { SettingsIcon } from "@chakra-ui/icons";
import {
  Flex,
  SimpleGrid,
  Grid,
  Box,
  Text,
  Button,
  Card,
  CardBody,
  CardHeader,
  Icon,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";

interface HeaderProps {
  img_src: any;
}

export const DefaultHeader: React.FC<HeaderProps> = ({img_src, ...props}) => {  

  console.log(img_src)

  return (
    <Box
    h="200px"
    borderRadius="2xl"
    w="100%"
    bgImage={img_src}
    bgSize="cover"
    px="0px"
    flexDirection="column"
  >
    <Flex h="10px" px="20px" pt="15px" justifyContent="space-between">
      <Box>
        <Text color="white"> Pages / Backpack Trips</Text>
        <Text color="white" fontWeight="bold">
          {" "}
          Backpack Trips
        </Text>
      </Box>
      <Flex color="white" alignItems="center" mt="20px">
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          color="white"
          size="md"
          mr="10px"
          showBorder={true}
        />
        <Text fontWeight="bold" mr="10px">
          Hi, Full Name!{" "}
        </Text>
        <SettingsIcon boxSize="20px" />
      </Flex>
    </Flex>
    {/* BLURR */}
    <Box backdropFilter="blur(8px)" w="98%" mt="140px">
      <Flex
        h="80px"
        borderRadius="2xl"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
        bg="rgba(255, 255, 255, 0.7)"
        align="center"
        justify="space-between"
      >
        <Text ml="20px" fontSize="5xl" fontWeight="bold">
          Backpack trips
        </Text>
        <Flex mr="10px" gap="10px">
          <Button
            borderRadius="2xl"
            fontSize="2xs"
            width="100px"
            backgroundColor="white"
            boxShadow="base"
          >
            ADD A TRIP
          </Button>
          <Button
            borderRadius="2xl"
            fontSize="2xs"
            width="100px"
            backgroundColor="white"
            boxShadow="base"
          >
            LIST VIEW
          </Button>
          <Button
            borderRadius="2xl"
            fontSize="2xs"
            bg="transparent"
            _hover={{ bg: "whiteAlpha.800" }}
          >
            SEARCH
          </Button>
        </Flex>
      </Flex>
    </Box>
  </Box>
  );
    
};