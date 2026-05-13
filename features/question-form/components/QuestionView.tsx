"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import QuestionCard, { OptionDef, QuestionType } from "./QuestionCard"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"

const questions = [
  {
    title: "What is your date of birth?",
    subtitle: "You and your baby",
    type: "DateField",
  },
  {
    title: "Where are you in your journey",
    subtitle: "You and your baby",
    type: "MCQ",
    options: [
      {
        header: "I'm expecting a baby",
        subheader: "You or your partner are pregnant",
      },
      {
        header: "I have recently had a baby",
        subheader: "You or your partner have had a child in the last year",
      },
      {
        header: "I'm adopting or having a baby through surrogacy",
        subheader:
          "You are actively in process of adoption or your surrogate is pregnant",
      },
      {
        header: "I'm planning or trying for a baby",
        subheader: "You, your partner or surrogate are yet to conceive",
      },
    ],
  },
]
const total = questions.length
export default function QuestionView() {
  const [questionNumber, setQuestionNumber] = useState<number>(0)
  const [completion, setCompletion] = useState<number>(0)
  const changeQuestion = () => {
    if (questionNumber < total - 1) {
      setQuestionNumber(questionNumber + 1)
      setCompletion((questionNumber / total) * 100)
    }
  }
  return (
    <div className="flex flex-col">
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
      <div className="flex flex-col">
        <div className="p-4">
          <Progress value={completion} className="h-2 rounded-md" />
        </div>
        <QuestionCard
          title={questions[questionNumber].title}
          subtitle={questions[questionNumber].subtitle}
          type={questions[questionNumber].type as QuestionType}
          options={questions[questionNumber]?.options as OptionDef[]}
        />
      </div>
      <footer className="pt-130">
        <Button
          type="submit"
          variant="submission"
          className="w-full p-6 text-lg"
          onClick={changeQuestion}
          disabled={questionNumber >= total}
        >
          Save and Continue
        </Button>
      </footer>
    </div>
  )
}
