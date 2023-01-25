import { useEffect, useState } from "react"

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const getSize = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }

    const handleSize = () => {
      setWindowSize(getSize())
    }
    window.addEventListener("resize", handleSize)
    return () => window.removeEventListener("resize", handleSize)
  }, [])

  return windowSize
}
