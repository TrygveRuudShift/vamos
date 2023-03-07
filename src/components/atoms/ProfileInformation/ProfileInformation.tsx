import { Text, Box, Button, Card} from "@chakra-ui/react";

interface ProfileInformation {
   firstName?: string; 
   lastName?: string;
   email?: string;
   location?: string;
   socialMedia?: string;
  [key: string]: any;
}

export const ProfileInformation: React.FC<ProfileInformation> = ({ ...props }) => {
    let textColor = "#868e98";
  return (
    <Card width="32%" 
        minH="250px"
        borderRadius="2xl"
        pt="20px"
        pl="10px"
        pr="10px">
        <Box borderBottom="1px"
          borderColor="blackAlpha.200">
            <Button float="right"
                bg="white"
                textColor="#4FD1C5"
                border="1px solid #4FD1C5"
                borderRadius="10px"
                w="27%"
                height="27px"
                fontSize="12"
                mr="3%">
                Edit
            </Button>
            <Text fontWeight={"bold"}
                mb="10px">
                Profile Information
            </Text>
            <Text color={textColor}
                fontSize="12"
                mt="5px"
                mb="10px">
                Lorem ipsum ,deodedkoedokeko
                oswlswo swolofjrg wkdowkdo
            </Text>
        </Box>
        <Box>
            <Box display={"flex"} mt="10px">
                <Text fontWeight="bold"
                    color={textColor}
                    mr="5px"
                    mt="5px"
                    fontSize="12">
                    First Name: </Text>
                <Text display="flex"
                    color={textColor}
                    fontSize="12">{props.firstName}</Text>
            </Box>
            <Box display={"flex"}>
                <Text fontWeight={"bold"}
                    color={textColor}
                    mr="5px"
                    mt="5px"
                    fontSize="12">
                    Last Name: </Text>
                <Text
                    color={textColor}
                    fontSize="12">{props.lastName}</Text>
            </Box>
            <Box display={"flex"}>
                <Text fontWeight={"bold"}
                    color={textColor}
                    mr="5px"
                    mt="5px"
                    fontSize="12">
                    Email: </Text>
                <Text
                    color={textColor}
                    fontSize="12">{props.email}</Text>
            </Box>
            <Box display={"flex"}>
                <Text fontWeight={"bold"}
                    color={textColor}
                    mr="5px"
                    mt="5px"
                    fontSize="12">
                    Location: 
                    </Text>
                <Text
                    color={textColor}
                    fontSize="12">{props.location}</Text>
            </Box>
            <Box display={"flex"}>
                <Text fontWeight={"bold"}
                    color={textColor}
                    mr="5px"
                    mt="5px"
                    fontSize="12">
                    Social Media:
                </Text>
                <Text
                    color={textColor}
                    fontSize="12">{props.socialMedia}</Text>
            </Box>
        </Box>
    </Card>
  );
};