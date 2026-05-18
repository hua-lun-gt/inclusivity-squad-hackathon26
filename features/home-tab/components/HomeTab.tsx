import ActionItems from "./ActionItems"
import HomeCard, { CardButton } from "./HomeCard"

const hasPlans = true

export default function HomeTab() {
  return (
    <div className="space-y-4">
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

      {hasPlans ? (
        <ActionItems />
      ) : (
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
      )}
    </div>
  )
}
