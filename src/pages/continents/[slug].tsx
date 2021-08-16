import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";

import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentContent } from "../../components/ContinentContent";
import { Cities } from "../../components/Cities";

import Prismic from '@prismicio/client'
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom"

export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    banner_image: string;
    countries: number;
    languages: number;
    cities: number;
    cities_list: string;
    main_cities: {
      city: string;
      country: string;
      thumbnail: string;
      flag: string;
    }[]
  }
}

export default function Continent({ continent }: ContinentProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner continent={continent} /> 
      
      <Flex direction="column" maxWidth="1160px" width="100%" mx="auto" mb={10} px="1rem">
        <ContinentContent continent={continent} />


        <Cities continent={continent} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient()

  const continents = await prismic.query([
    Prismic.Predicates.at('document.type', 'continents')
  ])

  const paths = continents.results.map(continent => ({
    params: { slug: continent.uid }
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const prismic = getPrismicClient()

  const continentsResponse = await prismic.getByUID('continents', String(slug), {})

  const continent = {
      slug: continentsResponse.uid,
      title: continentsResponse.data.title,
      description: RichText.asText(continentsResponse.data.description),
      banner_image: continentsResponse.data.banner_image.url,
      countries: continentsResponse.data.countries,
      languages: continentsResponse.data.languages,
      cities: continentsResponse.data.cities,
      cities_list: continentsResponse.data.cities_list,
      main_cities: continentsResponse.data.main_cities.map(item => {
        return {
          city: item.city,
          country: item.country,
          thumbnail: item.thumbnail.url,
          flag: item.flag.url
        }
      })
    }

  return {
    props: {
      continent,
    },
    revalidate: 60 * 30 // 30 minutes
  }
}