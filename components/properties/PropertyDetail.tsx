'use client'

import {
  FormatNumber,
  Heading,
  HStack,
  Image,
  Stat,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Owner } from '@/types/owners/owner.type'

type PropertyDetailProps = {
  image: string
  name: string
  price: number
  address: string
  year: number
  codeInternal: string
  owner: Owner
}

const PropertyDetail = ({
  image = '/images/not-found.png',
  name,
  price,
  address,
  year,
  codeInternal,
  owner,
}: PropertyDetailProps) => {
  return (
    <VStack align="start" gap={4}>
      <Image
        width="full"
        height={250}
        borderRadius="lg"
        src={image}
        alt={name}
      />

      <VStack w="full" gap={10}>
        <HStack w="full" justify="space-between">
          <VStack align="start">
            <Heading size="xl">{name}</Heading>

            <HStack>
              <Tag.Root size="sm">
                <Tag.Label>COD: {codeInternal}</Tag.Label>
              </Tag.Root>

              <Tag.Root size="sm">
                <Tag.Label>{year}</Tag.Label>
              </Tag.Root>

              <Tag.Root size="sm">
                <Tag.Label>{address}</Tag.Label>
              </Tag.Root>
            </HStack>
          </VStack>
        </HStack>

        <VStack w="full">
          <Text>Price</Text>

          <Stat.Root>
            <Stat.ValueText>
              <FormatNumber value={price} style="currency" currency="COP" />
            </Stat.ValueText>
          </Stat.Root>
        </VStack>

        <VStack w="full" align="center">
          <Heading>For more information contact us</Heading>

          <Image
            width="100px"
            height="100px"
            src={owner.photo}
            borderRadius="full"
            shadow="lg"
            alt="logo"
          />

          <Text>{owner.name}</Text>
        </VStack>
      </VStack>
    </VStack>
  )
}

export default PropertyDetail
