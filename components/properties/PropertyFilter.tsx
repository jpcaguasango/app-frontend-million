'use client'

import {
  Button,
  Field,
  Flex,
  FormatNumber,
  HStack,
  Input,
  Slider,
} from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { PiArrowsClockwiseBold } from 'react-icons/pi'

type FilterPropertyProps = {
  search: string
  setSearch: (_value: string) => void
  range: number[]
  setRange: (_value: number[]) => void
  onClearFilter?: () => void
  onRefetch: () => void
}

const PropertyFilter = ({
  search = '',
  setSearch,
  range = [0, 5000000],
  setRange,
  onClearFilter,
  onRefetch,
}: FilterPropertyProps) => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} gap={10}>
      <Field.Root w={{ md: '33%' }}>
        <Field.Label>Search</Field.Label>
        <Input
          placeholder="enter the name or address"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </Field.Root>

      <Field.Root w={{ md: '33%' }}>
        <Slider.Root
          w={{ base: '280px', md: '400px' }}
          max={5000000}
          minStepsBetweenThumbs={100000}
          defaultValue={[0, 5000000]}
          value={range}
          onValueChange={(e) => setRange(e.value)}
        >
          <HStack mb={3} justify="space-between">
            <Slider.Label>Price</Slider.Label>

            <HStack gap={5}>
              <FormatNumber value={range[0]} style="currency" currency="COP" />
              <span>-</span>
              <FormatNumber value={range[1]} style="currency" currency="COP" />
            </HStack>
          </HStack>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumbs />
          </Slider.Control>
        </Slider.Root>
      </Field.Root>

      <Flex
        w={{ md: '33%' }}
        justify={{ base: 'center', md: 'end' }}
        mt={5}
        gap={5}
      >
        <Button variant="outline" onClick={onRefetch}>
          <PiArrowsClockwiseBold />
        </Button>
        <Button variant="outline" onClick={onClearFilter}>
          Clear filters
        </Button>
      </Flex>
    </Flex>
  )
}

export default PropertyFilter
