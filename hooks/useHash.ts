import { useCallback, useEffect, useState } from "react"

export function useHash(): [string | null, (newHash: string) => void] {
  const [hash, setHash] = useState<string | null>(null)

  const hashChangeHandler = useCallback(() => {
    setHash(window.location.hash)
  }, [])

  useEffect(() => {
    if (!hash) hashChangeHandler()
    window.addEventListener("hashchange", hashChangeHandler)
    return () => {
      window.removeEventListener("hashchange", hashChangeHandler)
    }
  }, [hash, hashChangeHandler])

  const updateHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) window.location.hash = newHash
    },
    [hash]
  )

  return [hash, updateHash]
}
