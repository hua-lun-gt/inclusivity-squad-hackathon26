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

interface SupportResultsViewProps {
  isDuring: boolean
  isAfter: boolean
  isGrant: boolean
  isScheme: boolean
}

export default function SupportResultsView(props: SupportResultsViewProps) {
  return (
    <div className="flex h-dvh flex-col p-4">
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
      {props.isDuring && (
        <div>
          <Card></Card>
        </div>
      )}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-8">
        <Button
          type="submit"
          variant="submission"
          className="w-full p-6 text-lg font-semibold"
        >
          Create a Plan
        </Button>
      </div>
    </div>
  )
}
