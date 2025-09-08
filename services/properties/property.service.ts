import apiClientConfig from '@/config/api-client.config'

export const PropertyService = {
  getAll: async () => {
    return await apiClientConfig.get('/properties')
  },
}
