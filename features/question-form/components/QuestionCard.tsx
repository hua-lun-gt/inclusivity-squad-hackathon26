"use client"
import { PoundSterling } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover"
import { useState } from "react"
import { ButtonGroup } from "@/components/ui/button-group"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"

import { Input } from "@/components/ui/input"
import {
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldDescription,
  FieldLabel,
  Field,
  FieldContent,
  FieldTitle,
} from "@/components/ui/field"

export type QuestionType = "DateField" | "Amount" | "MCQ" | "MultiSelect"
export type OptionDef = { header: string; subheader: string }
export type QuestionResponse = {
  category: string
  isCompleted: boolean
  type: QuestionType
  question: string
  answer: string
}
interface QuestionCardProps {
  title: string
  subtitle: string
  type: QuestionType
  body?: string
  options?: OptionDef[]
}
import { useFormStore } from "../store/form-store"
export default function QuestionCard(props: QuestionCardProps) {
  const { setResponse } = useFormStore()
  const [selected, setSelected] = useState<Date>(new Date())
  const [amount, setAmount] = useState("")
  const [choice, setChoice] = useState("")

  const handleDateFieldRes = (date: Date) => {
    const newResponse = {
      category: props.subtitle,
      isCompleted: true,
      type: "DateField" as QuestionType,
      question: props.title,
      answer: date.toDateString(),
    } as QuestionResponse
    setResponse(newResponse)
  }

  const handleAmountRes = (value: string) => {
    const newResponse = {
      category: props.subtitle,
      isCompleted: !!value,
      type: "Amount" as QuestionType,
      question: props.title,
      answer: value,
    } as QuestionResponse
    setResponse(newResponse)
  }

  const handleMCQRes = (value: string) => {
    const newResponse = {
      category: props.subtitle,
      isCompleted: true,
      type: "MCQ" as QuestionType,
      question: props.title,
      answer: value,
    } as QuestionResponse
    setResponse(newResponse)
  }
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
              onSelect={(date) => {
                if (date) {
                  setSelected(date)
                  handleDateFieldRes(date)
                }
              }}
            />
          </PopoverContent>
        </Popover>
      )
    } else if (qType == "Amount") {
      return (
        <div>
          <div className="pb-2 text-base/5">{props.body}</div>
          <ButtonGroup className="w-full">
            <Button
              variant="outline"
              disabled
              className="h-10 rounded-md border-primary"
            >
              <PoundSterling />
            </Button>
            <Input
              className="h-10 bg-background"
              id="input-button"
              placeholder="3,115"
              value={amount}
              onChange={(e) => {
                const value = e.target.value
                setAmount(value)
                handleAmountRes(value)
              }}
            />
          </ButtonGroup>
        </div>
      )
    } else if (qType == "MCQ") {
      return (
        <Card className="p-0">
          <RadioGroup
            className="gap-0"
            onValueChange={(value) => {
              setChoice(value)
              handleMCQRes(value)
            }}
          >
            {props.options?.map((option, index) => (
              <FieldLabel
                className="min-h-[92px] border-none flex items-center"
                key={index}
                htmlFor={`option-${index}`}
              >
                <Field orientation="horizontal" className="w-full justify-between items-center">
                  <FieldContent>
                    <FieldTitle>{option.header}</FieldTitle>
                    <FieldDescription>{option.subheader}</FieldDescription>
                  </FieldContent>

                  <RadioGroupItem
                    value={`option-${index}`}
                    id={`option-${index}`}
                  />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </Card>
      )
    } else if (qType == "MultiSelect") {
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
