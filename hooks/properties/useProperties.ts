'use client'

import { PropertyService } from '@/services/properties/property.service'
import { useQuery } from '@tanstack/react-query'

const useProperties = () => {
  const getProperties = () =>
    useQuery({
      queryKey: ['properties'],
      queryFn: PropertyService.getAll,
    })

  return {
    getProperties,
  }
}

export default useProperties
