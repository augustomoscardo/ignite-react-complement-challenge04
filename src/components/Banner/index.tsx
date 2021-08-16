import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex 
      width="100%" 
      height={["163px", "335px"]} 
      bgImage="url('/Background.jpg')" 
      bgPosition="center" 
      bgRepeat="no-repeat"
      bgSize="cover"
    >
        
      <Flex 
        align="center" 
        justify={["center", "space-between"]} 
        width="100%" 
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Box>
          <Heading 
            color="white"
            fontWeight="600" 
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          >
            5 Continentes,<br />infinitas possibilidades.
          </Heading>
          <Text color="white" mt="5" fontSize={["0.8rem", "xl"]} maxWidth={["100%", "100%", "100%", "550px"]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        
        <Image 
          src="/Airplane.svg" 
          alt="Airplane" 
          width={["300px", "300px", "300px", "430px"]} 
          ml="8"
          transform="translateY(48px)"  //descer a imagem em relação ao banner
          display={["none", "none", "block"]}
        />
        
      </Flex>
    </Flex>
  )
}