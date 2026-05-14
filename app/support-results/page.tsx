import SupportResultsView from "@/features/question-form/components/SupportResultsView"

export default function Page() {
  return (
    <div className="">
      <SupportResultsView
        isDuring={true}
        isAfter={true}
        isGrant={true}
        isScheme={true}
      />
    </div>
  )
}
