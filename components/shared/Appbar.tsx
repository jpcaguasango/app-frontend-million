'use client'

import { Box, Heading, HStack, Image } from '@chakra-ui/react'
import { ColorModeButton } from '@/components/chakra-snippets/color-mode'
import useColor from '@/hooks/useColor'

const Appbar = () => {
  const { bg } = useColor()

  return (
    <Box bg={bg} w="full" py={4} px={8} shadow="md">
      <HStack>
        <Box w="full">
          <HStack gap={5}>
            <Image height="50px" src="logo.png" alt="logo" />
            <Heading>Million Properties</Heading>
          </HStack>
        </Box>

        <ColorModeButton />
      </HStack>
    </Box>
  )
}

export default Appbar
