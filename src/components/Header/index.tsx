import { Flex, Image, IconButton, Box } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { useRouter } from "next/router";
import Link from 'next/link'

export function Header() {
  const router = useRouter()
  const isNotHomePage = router.asPath !== "/"

  return (
    <Box bg="white">
      <Flex
        as="header"
        width="100%"
        maxWidth="1260px"
        height={["50px", "100px"]}
        bg="white"
        align="center"
        justify={isNotHomePage ? 'space-between' : 'center'}
        mx="auto"
        px="1rem"
      >
          { isNotHomePage && (
            <Link href="/">
              <Box>
                <IconButton 
                icon={ <RiArrowLeftSLine /> }
                fontSize={[20, 40]}
                color="black"
                variant="ghost"
                aria-label="Home"
              />
              </Box>
            </Link>
          ) }

        <Image 
          src="/Logo.svg" 
          alt="Worldtrip" 
          w={["81px", "184px"]} 
        />

        <div></div>
      </Flex>
    </Box>
  );
}