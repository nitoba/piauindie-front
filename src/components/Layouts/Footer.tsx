import { Box, Text, Flex, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import LinkNext from 'next/link'

export function Footer() {
  return (
    <Box
      bg={useColorModeValue('brand.50', 'brand.900')}
      color={useColorModeValue('brand.700', 'brand.200')}
    >
      {/* <Container as={Stack} maxW={'6xl'} pt="10">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'#'}>Overview</Link>
          </Stack>
        </SimpleGrid>
      </Container> */}
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <LinkNext href="/">
            <Box pos="relative" w="40px" h="40px">
              <Image src={'/logo.jpg'} alt="logo" fill />
            </Box>
          </LinkNext>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © {new Date().getFullYear()} Piauindie. All rights reserved
        </Text>
      </Box>
    </Box>
  )
}
