"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import QuestionCard, {
  OptionDef,
  QuestionResponse,
  QuestionType,
} from "./QuestionCard"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { useFormStore } from "../store/form-store"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface SupportResultsViewProps {
  isDuring: boolean
  isAfter: boolean
  isGrant: boolean
  isScheme: boolean
}

export default function SupportResultsView(props: SupportResultsViewProps) {
  return (
    <div className="flex flex-col p-4 pb-36">
      <div className="flex justify-between">
        <Button asChild variant="link" size="lg">
          <Link className="text-xl" href="/">
            {"< Back to form"}
          </Link>
        </Button>
      </div>
      <div className="flex flex-col">
        <div className="space-y-2 p-4">
          <p className="text-2xl font-bold">Support available to you</p>
          <p>Based off your information</p>
        </div>
      </div>
      <div className="space-y-2">
        {props.isDuring && (
          <div className="space-y-2 px-4">
            <p className="text-xl font-bold">During the pregnancy</p>
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
        )}
        {props.isAfter && (
          <div className="space-y-2 px-4">
            <p className="text-xl font-bold">After the birth</p>
            <Card className="p-4">
              <div className="space-y-2">
                <p className="font-bold">Child Benefit</p>
                <p>
                  A tax-free monthly payment to help with the cost of raising
                  children
                </p>
                <div className="flex gap-2">
                  <Button
                    type="submit"
                    variant="ghost"
                    size="lg"
                    className="w-full flex-1"
                  >
                    Eligible in 10 months
                  </Button>
                  <Button
                    type="submit"
                    variant="submission"
                    size="lg"
                    className="w-full flex-1"
                  >
                    Remind me
                  </Button>
                </div>
              </div>

              <Separator className="my-1" />

              <div className="space-y-2">
                <p className="font-bold">Tax-Free Childcare</p>
                <p>
                  Set up a childcare account, which both you and the government
                  will pay into. You can then use this oney to pay your
                  childcare provider.
                </p>
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
                    Set up account
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
        {props.isDuring && (
          <div className="space-y-2 px-4">
            <p className="text-xl font-bold">You are likely not entitled to</p>
            <Card className="bg-[#EFF3F8] p-4">
              <div className="space-y-2">
                <p className="font-bold">Sure Start Maternity Grant</p>

                <ul className="list-disc space-y-2 pl-5 text-destructive">
                  <li>
                    You or your partner currently don't receive any benefits
                  </li>
                </ul>
              </div>

              <Separator className="my-1" />

              <div className="space-y-2">
                <p className="font-bold">Healthy Start Scheme</p>
                <ul className="list-disc space-y-2 pl-5 text-destructive">
                  <li>Your household income is above the eligible criteria</li>
                  <li>You are not on Universal Credit</li>
                </ul>
              </div>
            </Card>
          </div>
        )}
      </div>
      {/* <nav className="fixed right-0 bottom-0 left-0 z-50 flex h-64 items-stretch justify-around border-t border-gray-200 bg-white">
        <div className="w-full flex-1 p-4">
          <Button
            type="submit"
            variant="submission"
            className="w-full p-6 text-lg font-semibold"
          >
            Create a Plan
          </Button>
        </div>
        <div className="w-full flex-1 p-4">
          <Button
            type="submit"
            variant="link"
            className="font-semibol h-full w-full p-6 text-lg"
          >
            Save and Exit
          </Button>
        </div>
      </nav> */}
      <nav className="fixed right-0 bottom-0 left-0 z-50 flex h-32 flex-col items-center gap-2 border-t border-gray-200 bg-white p-4">
        <Button
          type="submit"
          variant="submission"
          className="w-full p-6 text-lg font-semibold"
        >
          Create a Plan
        </Button>
        <Button
          type="submit"
          variant="link"
          className="w-full p-6 text-lg font-semibold"
        >
          Save and Exit
        </Button>
      </nav>
    </div>
  )
}
