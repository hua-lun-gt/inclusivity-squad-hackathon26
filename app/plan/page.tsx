import TabBar from "@/components/TabBar"
import PlanView from "@/features/planner/components/PlanView"

export default function Page() {
  return (
    <>
      <div className="bg-[#F4D7E5]">
        <PlanView />
      </div>
      <TabBar />
    </>
  )
}
