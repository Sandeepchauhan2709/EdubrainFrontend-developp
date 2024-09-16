/**
 * Retrieves the value from the local storage based on the provided key.
 * If the value is not found, returns the default value.
 * If the value is a valid JSON string, parses and returns the parsed value.
 * If the value is not a valid JSON string, returns the original value.
 */
export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  const value = localStorage.getItem(key)
  if (value === undefined || value === null) return defaultValue
  try {
    return JSON.parse(value) as T
  } catch (e) {
    return value as T
  }
}

/**
 * Sets a value in the local storage with the specified key.
 * If the value is a string, it is stored directly. If it is an object or array, it is stored as a JSON string.
 */
export const setLocalStorage = <T>(key: string, value: T): void => {
  if (key === undefined || key === null) {
    throw new Error('key is required')
  }
  if (value === undefined || value === null) {
    throw new Error('value is required')
  }
  if (typeof value === 'string') {
    localStorage.setItem(key, value)
  } else {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
