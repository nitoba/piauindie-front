import { Flex } from '@chakra-ui/react'
import { Hero } from '@components/Layouts/Hero'
export default function HomePage() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      css={{ height: 'calc(100vh - 230px)' }}
    >
      <Hero />
    </Flex>
  )
}
