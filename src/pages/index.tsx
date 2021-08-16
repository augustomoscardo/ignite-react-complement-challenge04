import { Box, Flex, Heading } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Slider } from '../components/Slider' 
import { Travel } from '../components/TravelTypes'
import { Banner } from '../components/Banner';

import { GetStaticProps } from 'next';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client'

SwiperCore.use([Pagination, Navigation]);

type Continent = {
  slug: string;
  id: string;
  title: string;
  summary: string;
  slider_image: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  // const { addContinents } = useContinents()

  // useEffect(() => {
  //   addContinents(continents)
  // },[])

  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Travel />

      <Box width={["60px", "90px"]} mx="auto" my={["8", "20"]} height="0.5" bg="#47585B" />

      <Heading fontWeight="500" fontSize={["lg", "3xl", "4xl"]} textAlign="center" color="black">
        Vamos nessa?<br /> Então escolha seu continente.
      </Heading>

      <Slider continents={continents} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'continents')
  ])

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      id: continent.id,
      title: continent.data.title,
      summary: continent.data.summary,
      slider_image: continent.data.slider_image.url
    }
  })

  return {
    props: {
      continents
    },
    revalidate: 60 * 30 // 30 minutes
  }
}