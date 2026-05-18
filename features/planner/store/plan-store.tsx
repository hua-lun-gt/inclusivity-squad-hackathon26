import { create } from "zustand"

export interface PlanState {
  planName: string | null
  setPlanName: (planName: string | null) => void
}

export const usePlanStore = create<PlanState>()((set) => ({
  planName: "Getting Ready for baby Anna",
  setPlanName: (planName) => set({ planName }),
}))
