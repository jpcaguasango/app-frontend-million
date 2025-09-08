const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

export const filterBySearch = <T extends Record<string, any>>(
  data: T[],
  search: string,
  keys: string[] = []
): T[] => {
  const lowerSearch = search.toLowerCase()

  return data.filter((item) => {
    const searchKeys = keys.length > 0 ? keys : Object.keys(item)

    return searchKeys.some((key) => {
      const value = getNestedValue(item, key)

      return value && String(value).toLowerCase().includes(lowerSearch)
    })
  })
}