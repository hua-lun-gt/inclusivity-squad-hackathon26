import { create } from "zustand"
import { QuestionResponse } from "../components/QuestionCard"

export interface FormState {
  response: QuestionResponse | null
  setResponse: (response: QuestionResponse | null) => void
  responses: QuestionResponse[] | null
  setResponses: (responses: QuestionResponse[]) => void
}

export const useFormStore = create<FormState>()((set) => ({
  response: null,
  setResponse: (response) => set({ response }),
  responses: null,
  setResponses: (responses) => set({ responses }),
}))
