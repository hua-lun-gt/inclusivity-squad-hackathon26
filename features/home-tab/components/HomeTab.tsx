import HomeCard, { CardButton } from "./HomeCard"

export default function HomeTab() {
  return (
    <>
      <HomeCard
        title={"Find Support For Your Child"}
        subtitle={"Recommended"}
        content={
          "Based off your search, you may be entitled to benefits and financial support during pregnancy and after the birth of your baby."
        }
        hasButtons={true}
        leftBtn={{ name: "Watch video", href: "" } as CardButton}
        rightBtn={{ name: "Discover", href: "" } as CardButton}
      />
    </>
  )
}
