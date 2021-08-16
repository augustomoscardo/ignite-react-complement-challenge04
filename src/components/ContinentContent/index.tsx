import { SimpleGrid, Text } from "@chakra-ui/react";
import { ContinentProps } from "../../pages/continents/[slug]";
import { ContinentInfo } from "./ContinentInfo";

export function ContinentContent({ continent }: ContinentProps) {

  return (
    <SimpleGrid 
      columns={[1, 1, 2]}
      spacing={[5, 10, 16, 20]}
      my={["8", "20"]} 
    >
      <Text 
        color="black" 
        fontWeight="400" 
        fontSize={["lg", "xl", "xl", "2xl"]} 
        textAlign="justify" 
      >
        {continent.description}
      </Text>

      <ContinentInfo continent={continent}/>
    </SimpleGrid>
  )
}