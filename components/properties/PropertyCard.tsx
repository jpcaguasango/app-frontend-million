'use client'

import {
  Card,
  FormatNumber,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Owner } from '@/types/owners/owner.type'
import useColor from '@/hooks/useColor'
import { useModalContext } from '@/context/ModalContext'
import PropertyDetail from '@/components/properties/PropertyDetail'

type CardPropertyProps = {
  name: string
  price: number
  address: string
  year: number
  codeInternal: string
  image: string
  owner: Owner
}

const PropertyCard = (props: CardPropertyProps) => {
  const {
    image = '/images/not-found.png',
    name,
    price,
    address,
    year,
    codeInternal,
    owner,
  } = props

  const { openModal } = useModalContext()

  const { bg } = useColor()

  const openDetailModal = () => {
    openModal({
      title: 'Details',
      size: 'xl',
      content: <PropertyDetail {...props} />,
    })
  }

  return (
    <Card.Root
      cursor="pointer"
      bg={bg}
      maxW="xl"
      overflow="hidden"
      onClick={openDetailModal}
    >
      <Image height="300px" src={image} alt={name} />
      <Card.Body gap="2">
        <Card.Title>
          <HStack justifyContent="space-between" align="center">
            {name}
            <Text
              textStyle="lg"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
            >
              <FormatNumber value={price} style="currency" currency="COP" />
            </Text>
          </HStack>
        </Card.Title>

        <Card.Description>
          <VStack align="start" gap={5}>
            {address}

            <HStack w="full" justifyContent="space-between">
              <HStack>
                <Tag.Root size="sm">
                  <Tag.Label>COD: {codeInternal}</Tag.Label>
                </Tag.Root>

                <Tag.Root size="sm">
                  <Tag.Label>{year}</Tag.Label>
                </Tag.Root>
              </HStack>

              <HStack gap={5}>
                {owner.name}

                <Image
                  width="30px"
                  height="30px"
                  src={owner.photo}
                  borderRadius="full"
                  shadow="lg"
                  alt="logo"
                />
              </HStack>
            </HStack>
          </VStack>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  )
}

export default PropertyCard
