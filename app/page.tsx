import { Button } from "@/components/ui/button"
import HomeTab from "@/features/home-tab/components/HomeTab"

export default function Page() {
  return (
    <div className="flex p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <HomeTab />
        </div>
      </div>
    </div>
  )
}
