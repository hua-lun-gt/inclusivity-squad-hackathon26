"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover"
import { Calendar } from "lucide-react"
import { useState } from "react"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
export type QuestionType = "DateField" | "Amount" | "MCQ" | "MultiSelect"
export type OptionDef = { header: string; subheader: string }

interface QuestionCardProps {
  title: string
  subtitle: string
  type: QuestionType
  options?: OptionDef[]
}

export default function QuestionCard(props: QuestionCardProps) {
  const [selected, setSelected] = useState<Date>(new Date())
  const questionField = () => {
    const qType = props.type
    if (qType == "DateField") {
      return (
        <Popover>
          <PopoverTrigger asChild className="w-full rounded-sm p-6">
            <Button variant="outline" className="border-primary">
              {selected?.toDateString()}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="center">
            <DayPicker
              required={true}
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </PopoverContent>
        </Popover>
      )
    } else if (qType == "MCQ") {
      return (
        <Card>
          <RadioGroup defaultValue="option-1">
            {props.options?.map((option, index) => (
              <CardContent key={index} className="p-6">
                <div className="flex justify-between gap-3">
                  <Label htmlFor={`option-${index}`}>{option.header}</Label>
                  <RadioGroupItem
                    value={`option-${index}`}
                    id={`option-${index}`}
                  />
                </div>
              </CardContent>
            ))}
          </RadioGroup>
        </Card>
      )
    }
  }
  return (
    <Card className="w-full bg-accent p-0 ring-0">
      <CardHeader>
        <CardTitle>{props.subtitle}</CardTitle>
        <CardDescription className="text-xl font-bold text-foreground">
          {props.title}
        </CardDescription>
        <CardContent className="p-0 text-lg group-data-[size=sm]/card:px-0">
          {questionField()}
        </CardContent>
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
    </Card>
  )
}
