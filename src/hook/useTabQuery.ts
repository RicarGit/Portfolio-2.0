import { usePathname, useSearchParams, useRouter } from "next/navigation"

export const useTabQuery = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const tab = searchParams.get('tab')
  const current = new URLSearchParams(Array.from(searchParams.entries()))

  const setTab = (thumbName: string) => {
    current.set("tab", thumbName)

    const search = current.toString()
    router.push(`${pathname}?${search}`)
  }

  const removeTab = () => {
    current.delete("tab")
    const search = current.toString()
    router.push(`${pathname}?${search}`)
  }

  return {
    tab,
    removeTab,
    setTab,
    pathname
  }
}
