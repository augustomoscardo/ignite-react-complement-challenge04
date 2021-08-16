import { Heading, SimpleGrid } from "@chakra-ui/react";
import { City } from "./City";
import { ContinentProps } from "../../pages/continents/[slug]";

export function Cities({ continent }: ContinentProps) {
  return(
    <>
      <Heading color="black" fontSize={["2xl", "4xl"]} fontWeight="500" mb="10">
        Cidades +100
      </Heading>

        <SimpleGrid
          columns={[1, 2, 3, 4]}
          spacing={["20px", "45px"]}
          alignItems="center"
          justifyContent="center"
          px={["30px", "0"]}
        >
          {continent.main_cities.map(data => (
            <City 
              key={data.city}
              city={data.city}
              country={data.country}
              thumbnail={data.thumbnail}
              flag={data.flag}
            />
          ))}
          {/* <City />
          <City />
          <City />
          <City /> */}
        </SimpleGrid>
    </>
  )
}