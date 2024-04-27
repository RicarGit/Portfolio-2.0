import { PageDetail } from "../PageDetail/PageDetail"

export const PageDetails = () => {
  return (
    <>
      <PageDetail color='blue' position="top-left" rotate />
      <PageDetail color='green' position="top-right" rotate />
      <PageDetail color='green' position="bottom-left" />
      <PageDetail color='blue' position="bottom-right" />
    </>
  )
}