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
} from "@chakra-ui/react";

interface ProjectPanelProps {
  onClick?: () => void;
  [key: string]: any;
}

export const ProjectPanel: React.FC<ProjectPanelProps> = ({
  onClick,
  children,
  ...props
}) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p="16px" borderRadius="2xl" w="full">
      <CardHeader p="12px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            EUROPE
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
          <Box bg="teal.200" w="260px" h="300px" m="0" borderRadius="2xl"></Box>
          <Box bg="teal.200" w="260px" h="300px" m="0" borderRadius="2xl"></Box>
          <Box bg="teal.200" w="260px" h="300px" m="0" borderRadius="2xl"></Box>

          <Button
            p="0px"
            bg="transparent"
            color="gray.500"
            border="1px solid lightgray"
            borderRadius="15px"
            minHeight={{ sm: "200px", md: "100%" }}
          >
            <Flex direction="column" justifyContent="center" align="center">
              <Text fontSize="lg" mb="12px">
                ...
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                View more trips
              </Text>
            </Flex>
          </Button>
        </Grid>
      </CardBody>
    </Card>
  );
};
