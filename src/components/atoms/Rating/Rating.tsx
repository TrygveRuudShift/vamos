import { StarIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

interface RatingProps {
    size?: "small" | "medium" | "large";
    [key: string]: any;
    stars: number;
  }
  
  export const Rating: React.FC<RatingProps> = ({ size, stars, ...props }) => {
  
    let fontsize = undefined;
    let boxsize = undefined;
    if (size) {
      if (size === "small"){
        fontsize = 12;
        boxsize = 4;
        }
      if (size === "medium"){
        fontsize = 16;
        boxsize = 6;
        }
      if (size === "large"){
        fontsize = 20;
        boxsize = 8;
        }
    }
  
    return ( 
        <Box display='flex' alignItems='center' {...props}>
            <StarIcon boxSize={boxsize} color='yellow.300' />
            <Text fontSize={fontsize}> {stars + "/5"}</Text>
        </Box>
    );
  };
  