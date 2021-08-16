import { 
  Flex, 
  Heading, 
  Icon, 
  Popover, 
  PopoverArrow, 
  PopoverBody, 
  PopoverCloseButton, 
  PopoverContent, 
  PopoverHeader, 
  PopoverTrigger, 
  Text 
  } from "@chakra-ui/react";

import { RiInformationLine } from "react-icons/ri";
import { ContinentProps } from "../../pages/continents/[slug]";

export function ContinentInfo({ continent }: ContinentProps) {

  return(
    <Flex align="center" justify="space-between">
      <Flex direction="column" align={["flex-start", "flex-start", "center"]} justify="center">
        <Heading color="yellow" fontSize={["2xl", "5xl"]} fontWeight="600">{continent.countries}</Heading>
        <Text color="black" fontSize={["md", "xl"]} fontWeight="600">países</Text>
      </Flex>

      <Flex Flex direction="column" align={["flex-start", "flex-start", "center"]} justify="center">
        <Heading color="yellow" fontSize={["2xl", "5xl"]} fontWeight="600">{continent.languages}</Heading>
        <Text color="black" fontSize={["md", "xl"]} fontWeight="600">línguas</Text>
      </Flex>

      <Flex Flex direction="column" align={["flex-start", "flex-start", "center"]} justify="center">
        <Heading color="yellow" fontSize={["2xl", "5xl"]} fontWeight="600">{continent.cities}</Heading>
        <Text color="black" fontSize={["md", "xl"]} fontWeight="600">
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="black" width={["10px", "16px"]} height={["10px", "16px"]} />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="black" color="yellow">
              <PopoverArrow bg="black" />
              <PopoverCloseButton />
              <PopoverHeader>As mais visitadas</PopoverHeader>
              <PopoverBody>{continent.cities_list}</PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  )
}