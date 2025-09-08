export interface MessageConfig {
  title: string
  description: string
  type: 'success' | 'error' | 'warning' | 'info'
}

export const ERROR_MESSAGES: Record<number, MessageConfig> = {
  400: {
    title: 'Solicitud incorrecta',
    description: 'Hubo un error con la solicitud enviada.',
    type: 'warning',
  },
  401: {
    title: 'No autorizado',
    description: 'Por favor, inicia sesión nuevamente.',
    type: 'error',
  },
  403: {
    title: 'Acceso denegado',
    description: 'No tienes permisos para esta acción.',
    type: 'warning',
  },
  404: {
    title: 'Recurso no encontrado',
    description: 'El recurso solicitado no existe.',
    type: 'error',
  },
  422: {
    title: 'Datos inválidos',
    description: 'Por favor, verifica los datos ingresados.',
    type: 'warning',
  },
  500: {
    title: 'Error en el servidor',
    description: 'Hubo un problema, intenta más tarde.',
    type: 'error',
  },
}

export const SUCCESS_MESSAGES: Record<number, MessageConfig> = {
  200: {
    title: 'Operación exitosa',
    description: 'La operación se realizó con éxito.',
    type: 'success',
  },
}

export const UNKOWN_ERROR: MessageConfig = {
  title: 'Error desconocido',
  description: 'Hubo un error desconocido.',
  type: 'error',
}

export const NETWORK_ERROR: MessageConfig = {
  title: 'Error de conexión',
  description: 'No se pudo conectar con el servidor.',
  type: 'error',
}

export const getErrorMessage = (errors: string[]) => {
  const keys = Object.keys(errors)
  const firstKey = keys[0]
  // @ts-ignore
  return errors[firstKey as string][0]
}
