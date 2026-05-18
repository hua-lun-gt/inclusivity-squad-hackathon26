"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { usePlanStore } from "../store/plan-store"

interface PlanViewProps {
  planName: string
}

export default function PlanView() {
  const { planName } = usePlanStore()
  return (
    <>
      <header className="bg-[#D7689D] px-4 pt-10 pb-4">
        <div className="flex justify-between">
          <Button asChild variant="link" size="lg">
            <Link className="text-xl text-white" href="/">
              {"< Back"}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link className="text-xl" href="#">
              {"Edit"}
            </Link>
          </Button>
        </div>
        <h1 className="mt-3 mb-3 text-start text-4xl font-bold text-white">
          {planName}
        </h1>
      </header>
      <div className="flex flex-col p-4 pb-18">
        <div className="flex flex-col">
          <div className="space-y-2">
            <p className="text-xl font-bold">Your financial support</p>
            <p>Based on information you have provided</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="mt-2 space-y-2">
            <Card className="p-4">
              <div className="space-y-2">
                <p className="font-bold">Statutory Maternity Pay (SMP)</p>
                <p>
                  Paid up to 39 weeks from when you take your maternity leave
                </p>
                <div className="flex gap-2">
                  <Button
                    type="submit"
                    variant="ghost"
                    size="lg"
                    className="w-full flex-1"
                  >
                    Eligible in 8 months
                  </Button>
                  <Button
                    type="submit"
                    variant="submission"
                    size="lg"
                    className="w-full flex-1"
                  >
                    Calculate
                  </Button>
                </div>
              </div>

              <Separator className="my-1" />

              <div className="space-y-2">
                <p className="font-bold">
                  Free NHS Prescriptions and dental care
                </p>
                <p>You're entitled to a maternity exemption certificate</p>
                <div className="flex gap-2">
                  <Button
                    type="submit"
                    size="lg"
                    variant={"secondary"}
                    className="w-full flex-1"
                  >
                    Remind me
                  </Button>
                  <Button
                    type="submit"
                    size="lg"
                    variant="submission"
                    className="w-full flex-1"
                  >
                    Apply on NHS
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <div className="space-y-2">
            <p className="text-xl font-bold">Recommended videos</p>
            <p>Based on your preferences</p>
          </div>
        </div>
      </div>
    </>
  )
}
