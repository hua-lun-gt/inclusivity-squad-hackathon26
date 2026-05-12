import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function QuestionView() {
  return (
    <div className="flex">
      <div className="flex justify-between">
        <Button asChild variant="link" size="lg">
          <Link className="text-xl" href="/">
            {"< Back"}
          </Link>
        </Button>
        <Button asChild variant="link" size="lg">
          <Link className="text-xl" href="/">
            {"Save & Exit"}
          </Link>
        </Button>
      </div>
    </div>
  )
}
