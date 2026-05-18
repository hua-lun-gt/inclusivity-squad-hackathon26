import { Separator } from "@/components/ui/separator"
import { ChevronRight } from "lucide-react"
import { Card } from "../../../components/ui/card"
import React from "react"
import { List } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const rows = [
  {
    name: "Getting ready for baby Anna",
    colour: "pink",
    url: "/plan",
  },
  {
    name: "Moving house",
    colour: "pink",
    url: "/#",
  },
]

export default function ActionItems() {
  return (
    <div className="w-full space-y-2">
      <p className="text-xl font-bold">Your Plans</p>
      <Card className="w-full p-4">
        {rows.map((row, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-row items-center gap-4 space-y-2">
              <div
                className={`flex items-center justify-center rounded-full bg-pink-200 p-3`}
              >
                <List className="h-5 w-5 text-white" />
              </div>
              <Button asChild variant="link" size="lg">
                <Link href={row.url}>
                  <p className="text-lg font-medium">{row.name}</p>
                </Link>
              </Button>
            </div>
            <Separator className="my-1" />
          </React.Fragment>
        ))}

        <div className="flex flex-row items-center justify-between gap-4 space-y-2">
          <p className="text-lg font-medium">Create a Plan</p>
          <Button variant={"link"} size={"icon-lg"}>
            <ChevronRight />
          </Button>
        </div>
      </Card>
    </div>
  )
}
