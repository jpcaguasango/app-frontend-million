import { useColorMode } from '@/components/chakra-snippets/color-mode'
import { useToken } from '@chakra-ui/react'

const useColor = () => {
  const [primaryColor] = useToken('colors', [
    `${process.env.NEXT_PUBLIC_COLOR_PALETTE}.solid`,
  ])

  const { colorMode } = useColorMode()

  return {
    bg: { base: 'white', _dark: 'black' },
    content: { base: 'bg.subtle', _dark: 'gray.900' },
    borderColor: { base: 'gray.200', _dark: 'gray.700' },
    colorPalette: process.env.NEXT_PUBLIC_COLOR_PALETTE,
    isDarkMode: colorMode === 'dark',
    primaryColor,
  }
}

export default useColor
