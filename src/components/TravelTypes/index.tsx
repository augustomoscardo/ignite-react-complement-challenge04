import { Grid, GridItem } from '@chakra-ui/react'
import { TravelTypes } from './TravelTypes'

export function Travel() {
  return (
    <Grid
    templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]} 
    w="100%" 
    justifyContent="space-between" 
    align="center" 
    mt={["10", "32"]}
    mx="auto"
    maxWidth="1160px"
    gap={[1, 5]}
    >
    <GridItem>
      <TravelTypes icon="cocktail" text="vida noturna" />
    </GridItem>
    <GridItem>
      <TravelTypes icon="surf" text="praia" />
    </GridItem>
    <GridItem>
      <TravelTypes  icon="building" text="moderno" />
    </GridItem>
    <GridItem>
      <TravelTypes icon="museum" text="clássico" />
    </GridItem>
    <GridItem colSpan={[2, 2, 2, 1]}>
      <TravelTypes icon="earth" text="e mais..." />
    </GridItem>
    </Grid>
  )
}


// <Flex justify="center" align="center">
//   <Stack 
//     direction={["column", "row"]} 
//     spacing={[7, 32]} 
//     width="100%" 
//     maxWidth="1160px"
//     px={35} 
//     mx="auto" 
//     mt={[9, 20]} 
//     alignItems="center"
//     justifyContent="center"
//   >
//     <TravelTypes icon="cocktail" text="vida noturna" />
//     <TravelTypes icon="surf" text="praia" />
//     <TravelTypes icon="building" text="moderno" />
//     <TravelTypes icon="museum" text="clássico" />
//     <TravelTypes icon="earth" text="e mais..." />
//   </Stack>
// </Flex>
