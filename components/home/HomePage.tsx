'use client'

import {
  Box,
  Center,
  Container,
  GridItem,
  Heading,
  Image,
  Show,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import useColor from '@/hooks/useColor'
import PropertyCard from '@/components/properties/PropertyCard'
import useProperties from '@/hooks/properties/useProperties'
import { Property } from '@/types/properties/property.type'
import PropertyFilter from '@/components/properties/PropertyFilter'
import { useMemo, useState } from 'react'
import { filterBySearch } from '@/utils/filter.util'
import MLSpinner from '@/components/shared/MLSpinner'
import MLEmptyState from '@/components/shared/MLEmptyState'

const Home = () => {
  // Queries
  const { getProperties } = useProperties()
  const { data: properties = [], refetch, isFetching } = getProperties()

  // Hooks
  const { bg } = useColor()

  // States
  const [search, setSearch] = useState<string>('')
  const [range, setRange] = useState<number[]>([0, 5000000])

  // Filter
  const propertiesFiltered = useMemo(() => {
    const propertiesData = properties as Property[]

    const findSearchProperties = search
      ? filterBySearch(propertiesData, search, ['name', 'address'])
      : propertiesData

    return findSearchProperties.filter(
      (property: Property) =>
        property.price >= range[0] && property.price <= range[1]
    )
  }, [properties, search, range])

  const onClearFilter = () => {
    setSearch('')
    setRange([0, 5000000])
  }

  return (
    <>
      <Container py={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <GridItem>
            <Heading size={{ base: '4xl', md: '6xl' }}>
              Find a place you <br /> Will call home
            </Heading>
          </GridItem>
          <GridItem>
            <Center>
              <Text w={{ md: '380px' }} mt="5" color="fg.muted">
                With us you will find not just accommodation, but a place where
                your new life begins, full of cosiness and possibilities.
              </Text>
            </Center>
          </GridItem>
        </SimpleGrid>
      </Container>

      <Image
        width="full"
        height="450px"
        src="/images/home-background.jpg"
        shadow="lg"
        alt="logo"
        fit="fill"
      />

      <Container py={{ base: 10, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <GridItem>
            <Heading size={{ base: '3xl', md: '4xl' }}>
              We help you find the <br />
              home that will be yours
            </Heading>
          </GridItem>
          <GridItem>
            <Center>
              <Text w={{ md: '380px' }} mt="5" color="fg.muted">
                Our projects are about harmony, style and care that everyone
                lives in what is really important to them
              </Text>
            </Center>
          </GridItem>
        </SimpleGrid>
      </Container>

      <Container
        py={10}
        bg={bg}
        borderRadius={{ md: 'lg' }}
        shadow={{ md: 'lg' }}
      >
        <PropertyFilter
          search={search}
          range={range}
          setSearch={setSearch}
          setRange={setRange}
          onClearFilter={onClearFilter}
          onRefetch={refetch}
        />

        <Heading mt={10}>Properties ({propertiesFiltered.length})</Heading>
      </Container>

      <Container py={10}>
        <Show when={isFetching}>
          <Box w="full">
            <MLSpinner text="Loading..." />
          </Box>
        </Show>

        <Show when={!isFetching && propertiesFiltered.length}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
            {(propertiesFiltered as Property[]).map(
              (property: Property, index: number) => (
                <GridItem key={index}>
                  <PropertyCard
                    {...property}
                    image={property?.propertyImages?.[0]?.file}
                  />
                </GridItem>
              )
            )}
          </SimpleGrid>
        </Show>

        <Show when={!isFetching && !propertiesFiltered.length}>
          <MLEmptyState />
        </Show>
      </Container>
    </>
  )
}

export default Home
