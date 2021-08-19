import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypesProps {
  icon: string;
  text: string;
}

export function TravelTypes({ icon, text }: TravelTypesProps ) {
  const isMobileVersion = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobileVersion ? 
        <Image src={`/${icon}.svg`} width="85px" height="85px" mb="6" />
        : 
        <Text as="span" color="yellow" fontWeight="600" fontSize="4xl" mr="2" >&middot;</Text>
      }
      
      <Text color="black" fontWeight="600" fontSize={["md", "xl", "2xl"]} lineHeight="none">{text}</Text>
    </Flex>
  );
}