import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
import HomeTab from "@/features/home-tab/components/HomeTab"

export default function Page() {
  return (
    <>
      <Header />
      <div className="flex p-6">
        <HomeTab />
      </div>
      <TabBar />
    </>
  )
}
