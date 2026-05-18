"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { usePlanStore } from "../store/plan-store"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronRight, Play } from "lucide-react"

interface PlanViewProps {
  planName: string
}

export default function PlanView() {
  const { planName } = usePlanStore()
  return (
    <>
      <header className="bg-[#D7689D] px-4 pt-10 pb-4">
        <div className="flex justify-between">
          <Button asChild variant="link" size="lg">
            <Link className="text-xl text-white" href="/">
              {"< Back"}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link className="text-xl" href="#">
              {"Edit Plan"}
            </Link>
          </Button>
        </div>
        <h1 className="mt-3 mb-3 text-start text-4xl font-bold text-white">
          {planName}
        </h1>
      </header>
      <div className="flex flex-col p-4 pb-18">
        <div className="flex flex-col">
          <div className="space-y-2">
            <p className="text-xl font-bold">Your financial support</p>
            <p>Based on information you have provided</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="mt-2 space-y-2">
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
        </div>
        <div className="mt-4 flex flex-col">
          <div className="space-y-2">
            <p className="text-xl font-bold">Recommended videos</p>
            <p>Based on your preferences</p>
          </div>
        </div>
        <Carousel className="mt-1 w-full">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                <Card className="gap-0 border-none bg-transparent p-0 ring-0">
                  <Image
                    className="h-48 rounded-2xl object-cover"
                    src={`/assets/video${index + 1}.jpg`}
                    alt={`video ${index + 1}`}
                    width="150"
                    height="150"
                  />

                  {/* <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90">
                      <Play className="h-6 w-6 fill-black text-black" />
                    </div>
                  </div> */}
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-4 flex flex-col">
          <div className="space-y-2">
            <p className="text-xl font-bold">External content</p>
            <p>Based on your preferences</p>
          </div>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Card className="mt-4 flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Ask GOV.UK Chat about your plan
            </CardTitle>
            <CardDescription className="text-lg text-black">
              An experimental AI tool for finding quick answers
            </CardDescription>
            <CardAction className="h-48 p-0">
              <Image
                className="rounded-2xl object-cover"
                src={`/assets/circles.svg`}
                alt={"circles"}
                width="150"
                height="150"
              />
            </CardAction>
          </CardHeader>

          <CardFooter className="border-t bg-white">
            <Button variant={"link"} className="w-full justify-between text-lg">
              Ask a Question
              <ChevronRight />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
