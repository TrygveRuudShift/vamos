
import { 
    Box,
    VStack,
    HStack,
    Card,
    CardHeader,
    CardBody,
    Text,
    Center,
    Spacer,
    Heading,
    Image
} from '@chakra-ui/react';
import { Rating } from '../../atoms/Rating/Rating';

interface ProfileReviewsProps {
    userNames: Array<String>,
    reviews: Array<number>,
    description: Array<String>,
    profileURL: any,
}

export const ProfileReviews: React.FC<ProfileReviewsProps> = ({ userNames, profileURL, reviews, description, ...props }) => {
  return (
    <Card borderRadius='2xl' width="32%">
        <CardHeader>
            <Heading size='md'>Reviews</Heading>
        </CardHeader>
        <CardBody>
        <VStack align={'strech'} >
            <HStack align={'center'} h='72px' bg='teal.100' borderRadius='2xl' spacing='24px'>
                <Image src={profileURL} boxSize={50} ml='10px' borderRadius='2xl'/>
                <VStack spacing={1} align={'flex-start'}>
                    <Heading size='sm'>{userNames[0]}</Heading>
                    <Text size='xs'>{description[0]}</Text>
                </VStack>
                <Spacer/>
                <Center width={'xs'}>
                    <Rating stars={reviews[0]} size='small'></Rating>
                </Center>
            </HStack>

            <HStack align={'center'} h='72px' bg='teal.100' borderRadius='2xl' spacing='24px'>
                <Image src={profileURL} boxSize={50} ml='10px' borderRadius='2xl'/>
                <VStack spacing={1} align={'flex-start'}>
                    <Heading size='sm'>{userNames[1]}</Heading>
                    <Text size='xs'>{description[1]}</Text>
                </VStack>
                <Spacer/>
                <Center width={'xs'}>
                    <Rating stars={reviews[1]} size='small'></Rating>
                </Center>
            </HStack>

            <HStack align={'center'} h='72px' bg='teal.100' borderRadius='2xl' spacing='24px'>
                <Image src={profileURL} boxSize={50} ml='10px' borderRadius='2xl'/>
                <VStack spacing={1} align={'flex-start'}>
                    <Heading size='sm'>{userNames[2]}</Heading>
                    <Text size='xs'>{description[2]}</Text>
                </VStack>
                <Spacer/>
                <Center width={'xs'}>
                    <Rating stars={reviews[2]} size='small'></Rating>
                </Center>
            </HStack>

            <HStack align={'center'} h='72px' bg='teal.100' borderRadius='2xl' spacing='24px'>
                <Image src={profileURL} boxSize={50} ml='10px' borderRadius='2xl'/>
                <VStack spacing={1} align={'flex-start'}>
                    <Heading size='sm'>{userNames[3]}</Heading>
                    <Text size='xs'>{description[3]}</Text>
                </VStack>
                <Spacer/>
                <Center width={'xs'}>
                    <Rating stars={reviews[3]} size='small'></Rating>
                </Center>
            </HStack>

        </VStack>
        </CardBody>
    </Card>
  );
};