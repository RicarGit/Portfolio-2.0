import { useEffect, useState } from "react"

export const useUserHeight = () => {
  const [userHeight, setUserHeight] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', () =>
      setUserHeight(document.documentElement.clientHeight))
    setUserHeight(document.documentElement.clientHeight)
  }, [])

  return userHeight
}
