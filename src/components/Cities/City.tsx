import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function City({city, country, thumbnail, flag}) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={thumbnail} alt={`${city}, ${country}`} width="100%" height="170px" />
      <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow" borderTop="0">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {city}
          </Heading>
          <Text fontSize="md" fontWeigh="500" color="black" mt="3">
            {country}
          </Text>
        </Flex>
        <Image src={flag} alt={`${city}, ${country}`} width="30px" height="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
  )
}