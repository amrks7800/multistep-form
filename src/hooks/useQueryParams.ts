import { useState, useEffect, useCallback } from "react"

/**
 * A custom React hook for managing URL query parameters.
 *
 * This hook provides access to the current URL query parameters as an object
 * and a function to update them.  It handles both adding, updating, and
 * removing parameters, and triggers a re-render whenever the query parameters
 * change.  It also supports an optional initial set of query parameters.
 *
 * @param {Record<string, string>} [props={}] - An optional object containing
 *   initial query parameters. These will be merged with the existing query
 *   parameters from the URL when the hook is initialized.
 *
 * @returns {[Record<string, string>, (newParams: Record<string, string> | string) => void]}
 *   An array containing:
 *     - An object representing the current query parameters.
 *     - A function to update the query parameters.
 */
function useQueryParams(
  props: Record<string, string> = {}
): [
  Record<string, string>,
  (newParams: Record<string, string> | string) => void
] {
  const [queryParams, setQueryParams] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    const paramsObj: Record<string, string> = {}
    for (const [key, value] of params.entries()) {
      paramsObj[key] = value
    }
    return { ...paramsObj, ...props }
  })

  const updateQueryParams = useCallback(
    (newParams: Record<string, string> | string) => {
      const newQueryString = new URLSearchParams()

      // Handle both object and string input for newParams
      if (typeof newParams === "object") {
        for (const key in newParams) {
          if (newParams.hasOwnProperty(key)) {
            newQueryString.set(key, newParams[key])
          }
        }
      } else if (typeof newParams === "string") {
        const searchParams = new URLSearchParams(newParams)
        for (const [key, value] of searchParams) {
          newQueryString.set(key, value)
        }
      } else {
        console.warn(
          "Invalid input type for updateQueryParams.  Expected object or string."
        )
        return
      }

      const newUrl = `${window.location.pathname}${
        newQueryString.toString() ? `?${newQueryString}` : ""
      }${window.location.hash}`
      window.history.pushState(null, "", newUrl)

      setQueryParams(prevParams => {
        const updatedParams = { ...prevParams }

        for (const [key, value] of newQueryString.entries()) {
          updatedParams[key] = value
        }
        for (const key in updatedParams) {
          if (!newQueryString.has(key)) {
            delete updatedParams[key]
          }
        }
        return updatedParams
      })
    },
    []
  )

  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search)
      const paramsObj: Record<string, string> = {}
      for (const [key, value] of params.entries()) {
        paramsObj[key] = value
      }
      setQueryParams(paramsObj)
    }

    handleUrlChange()

    window.addEventListener("popstate", handleUrlChange) // For browser navigation
    window.addEventListener("hashchange", handleUrlChange) // For hash changes

    return () => {
      window.removeEventListener("popstate", handleUrlChange)
      window.removeEventListener("hashchange", handleUrlChange)
    }
  }, [])

  return [queryParams, updateQueryParams]
}

export default useQueryParams
