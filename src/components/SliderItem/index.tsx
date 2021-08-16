import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link'

export function SliderItem() {

  return (
    {continents.map(continent => (
      <Flex 
        width="100%" 
        height="100%" 
        align="center" 
        justify="center" 
        maxWidth="1240px" 
        bgImage={`url('${continent.slider_image}')`} 
        bgPosition="center"
        bgRepeat="no-repeat" 
        bgSize="cover"
        key={continent.id}
      >
        <Link href={`/continents/${continent.slug}`} passHref>
          <a>
            <Heading color="white" mt="80px" fontWeight="700" fontSize={["3xl", "4xl", "5xl"]} width="100%" textAlign="center">
              {continent.title}
            </Heading>
            
            <Text color="white" mt={["2", "4"]} mb="70px" fontWeight="700" fontSize={["0.8rem", "1xl", "2xl"]} textAlign="center">
              {continent.summary}
            </Text>
          </a>
        </Link>
      </Flex>
    ))}
  )
}