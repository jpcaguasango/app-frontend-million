import { Owner } from '@/types/owners/owner.type'
import { PropertyImage } from '@/types/properties/property-image.type'
import { PropertyTrace } from '@/types/properties/property-trace.type'

export type Property = {
  name: string
  address: string
  price: number
  codeInternal: string
  year: number
  owner: Owner
  propertyImages: PropertyImage[]
  propertyTraces: PropertyTrace[]
}
