'use client'

import { Box, Spinner, Text } from '@chakra-ui/react'

type MLSpinnerProps = {
  text?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  align?: string
}

const MLSpinner = ({
  text,
  size = 'lg',
  align = 'center',
}: MLSpinnerProps) => {
  return (
    <Box
      p={2}
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      alignItems={align}
      justifyContent="center"
    >
      <Spinner mb={text ? 5 : 0} size={size} />
      {text && <Text textStyle="xs">{text}</Text>}
    </Box>
  )
}

export default MLSpinner
