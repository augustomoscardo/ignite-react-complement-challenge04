import { Flex, Heading } from "@chakra-ui/react";
import { ContinentProps } from "../../pages/continents/[slug]";

export function ContinentBanner({ continent }: ContinentProps) {
  return (
    <Flex 
      width="100%" 
      height={["150px", "300px", "500px" ]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage={`url('${continent.banner_image}')`}
      bgPosition="center" 
      bgRepeat="no-repeat" 
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      
      <Heading 
        color="white" 
        fontWeight="600" 
        fontSize={["1.75rem", "5xl"]} 
        textAlign={["center", "left"]}
      >
        {continent.title}
      </Heading>
    </Flex>
  )
}