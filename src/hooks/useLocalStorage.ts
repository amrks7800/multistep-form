import { useState, useEffect } from "react"

function getStorageValue<T extends {}>(key: string, defaultValue: T) {
  // getting stored value
  const saved = localStorage.getItem(key) as string
  const initial = JSON.parse(saved)
  return initial || defaultValue
}

export const useLocalStorage = <T extends {}>(key: string, defaultValue: T) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
