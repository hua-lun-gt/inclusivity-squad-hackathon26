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
  {
    title: "When is your expected due date?",
    subtitle: "You and your baby",
    type: "DateField",
  },
  {
    title: "Do you live with a partner?",
    subtitle: "Your home",
    type: "MCQ",
    options: [
      {
        header: "Yes",
      },
      {
        header: "No",
      },
    ],
  },
  {
    title: "What is your employment status?",
    subtitle: "Your work and earnings",
    type: "MCQ",
    options: [
      {
        header: "Employed",
      },
      {
        header: "Self-employed",
      },
      {
        header: "Unemployed",
      },
    ],
  },
  {
    title: "What is your total monthly household income",
    subtitle: "Your work and earnings",
    type: "Amount",
    body: "This is the total monthly amount you and your partner earn before tax.",
  },
  {
    title: "Is anyone in your household already receiving support?",
    subtitle: "Your current benefits",
    type: "MCQ",
    options: [
      {
        header: "Universal Credit",
        subheader: "You and/or someone in your household",
      },
      {
        header: "Child Tax Credit",
        subheader: "You and/or someone in your household",
      },
      {
        header: "None of the above",
      },
    ],
  },
]
const total = questions.length
export default function QuestionView() {
  const { response, responses, setResponse, setResponses } = useFormStore()
  const [questionNumber, setQuestionNumber] = useState<number>(0)
  const [completion, setCompletion] = useState<number>(0)

  const changeQuestion = () => {
    // Get the current response from the store
    const currentResponse = useFormStore.getState().response
    const currentResponses = useFormStore.getState().responses || []

    // Create a new array with the current response added
    let newResponses = [...currentResponses]

    if (currentResponse) {
      // Add the completed response
      newResponses.push(currentResponse)
    } else {
      // Add an incomplete response if user skipped
      const newResponse = {
        category: questions[questionNumber].subtitle,
        isCompleted: false,
        type: questions[questionNumber].type,
        question: questions[questionNumber].title,
        answer: "",
      } as QuestionResponse
      newResponses.push(newResponse)
    }

    // Update the store with new responses array and clear current response
    setResponses(newResponses)
    setResponse(null)

    console.log("Stored responses:", newResponses)

    // Move to next question
    if (questionNumber < total - 1) {
      setQuestionNumber((prevNumber) => prevNumber + 1)
      setCompletion(((questionNumber + 1) / total) * 100)
    }
  }
  return (
    <div className="flex h-dvh flex-col p-4">
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
          body={questions[questionNumber]?.body}
        />
      </div>
      <div className="fixed bottom-0 left-0 w-full p-4 pb-8">
        <Button
          type="submit"
          variant="submission"
          className="w-full p-6 text-lg font-semibold"
          onClick={() => changeQuestion()}
          disabled={questionNumber >= total}
        >
          Save and Continue
        </Button>
      </div>
    </div>
  )
}
