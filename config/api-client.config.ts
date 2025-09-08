'use client'

import { toaster } from '@/components/chakra-snippets/toaster'
// import { HIDDEN_TOAST_URLS } from '@/config/urls.config'
import {
  ERROR_MESSAGES,
  getErrorMessage,
  MessageConfig,
  NETWORK_ERROR,
  SUCCESS_MESSAGES,
  UNKOWN_ERROR,
} from '@/utils/error.util'
// import { getAuthToken, removeAuthToken } from '@/utils/network.util'
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios'

const API_URL: string = process.env.NEXT_PUBLIC_API_URL || ''

const apiClientConfig: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClientConfig.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // const token = getAuthToken()

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }

    if (!config.url?.startsWith('/api/')) {
      config.baseURL = API_URL
    }

    return config
  },
  (error) => Promise.reject(error)
)

apiClientConfig.interceptors.response.use(
  (response) => {
    const {
      config,
      status,
      data: { message },
    } = response
    const successConfig = SUCCESS_MESSAGES[status]
    const successMessage = message || successConfig.description

    // @ts-ignore
    if (
      successConfig &&
      ['post', 'put', 'delete'].includes(config?.method || '')
      // && !HIDDEN_TOAST_URLS.includes(config?.url || '')
    ) {
      toaster.create({
        ...successConfig,
        description: successMessage,
      })
    }

    return response.data
  },
  (error: AxiosError) => {
    if (!error.response) {
      toaster.create({ ...NETWORK_ERROR })
    }

    if (error.response) {
      const { status, data = {}, config } = error.response

      if (status === 401 && config.url !== '/api/auth/login') {
        // removeAuthToken()

        // redirect to log in
        window.location.href = '/auth/login'

        return
      }

      // @ts-ignore
      const { errors } = data
      const errorMessage = errors && getErrorMessage(errors)

      const errorConfig: MessageConfig = {
        ...ERROR_MESSAGES[status],
        description:
          errorMessage ||
          // @ts-ignore
          data.message ||
          ERROR_MESSAGES[status].description,
      }

      if (errorConfig) {
        toaster.create({ ...errorConfig })
      } else {
        toaster.create({ ...UNKOWN_ERROR })
      }
    }

    return Promise.reject(error)
  }
)

export default apiClientConfig
