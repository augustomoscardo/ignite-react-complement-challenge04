import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link'


import { Swiper, SwiperSlide } from 'swiper/react'

interface SliderProps {
  continents: {
    slug: string;
    id: string;
    title: string;
    summary: string;
    slider_image: string;
  }[];
}

export function Slider({ continents }: SliderProps) {
  // const { continents } = useContinents()
  
  // useEffect(() => {
  //   console.log(continents.map(continent => {
  //     return continent.id
  //   }));
  // },[continents])  

  return (
    <Flex width="100%" height={["250px", "250px", "450px"]} mt={["5", "14" ]} maxW="1240px" mx="auto" mb={["5", "10"]}>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{clickable: true}}
          initialSlide={0}
          autoplay={{delay: 4000}}
          style={{width: '100%', flex: '1'}}
        >
          {continents.map(continent => (
            <SwiperSlide key={continent.id}>
              <Flex
                width="100%" 
                height="100%" 
                align="center" 
                justify="center" 
                direction="column"
                bgImage={`url('${continent.slider_image}')`} 
                bgPosition="center"
                bgRepeat="no-repeat" 
                bgSize="cover"
                textAlign="center"
              >
                <Link href={`/continents/${continent.slug}`} passHref>
                  <a>
                    <Heading color="white" fontWeight="700" fontSize={["3xl", "4xl", "5xl"]} >
                      {continent.title}
                    </Heading>
                    
                    <Text color="white" mt={["2", "4"]} fontWeight="700" fontSize={["0.8rem", "1xl", "2xl"]}>
                      {continent.summary}
                    </Text>
                  </a>
                </Link>
              </Flex>
          </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
  )
}