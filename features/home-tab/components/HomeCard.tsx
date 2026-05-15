import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MoveUpRight } from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link"

export type CardButton = { name: string; href: string }

interface HomeCardProps {
  title: string
  subtitle: string
  content: string
  hasButtons: boolean
  leftBtn?: CardButton
  rightBtn?: CardButton
}

export default function HomeCard(props: HomeCardProps) {
  return (
    <Card className="w-full bg-accent">
      <CardHeader>
        <CardTitle>{props.subtitle}</CardTitle>
        <CardDescription className="text-xl font-bold text-foreground">
          {props.title}
        </CardDescription>
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent className="text-lg/6">
        <p>{props.content}</p>
      </CardContent>
      {props.hasButtons && (
        <CardFooter className="flex gap-4 bg-accent">
          <Button type="submit" size="lg" className="w-full flex-1">
            {props.leftBtn?.name}
          </Button>

          <Drawer>
            <DrawerTrigger className="h-9 w-full flex-1 rounded-lg bg-[#00703c] text-primary-foreground [a]:hover:bg-[#00703c]/80">
              {/* <Button variant="submission" className="w-full"> */}
              {props.rightBtn?.name}
              {/* </Button> */}
            </DrawerTrigger>
            <DrawerContent className="h-full">
              <DrawerHeader className="space-y-2">
                <div className="mx-auto object-center p-8">
                  <Image
                    className=""
                    src="/assets/baby_illustration.png"
                    alt={"illustration of a baby bottle"}
                    width="150"
                    height="150"
                  />
                </div>
                <DrawerTitle className="text-3xl font-bold">
                  Find financial support for your children
                </DrawerTitle>
                <DrawerDescription className="text-base/6">
                  Check what financial help you could get if you are trying for
                  a baby, pregnant, or a new parent.
                </DrawerDescription>
                <DrawerDescription className="text-base/6">
                  Your answers are saved as you go, so you can leave the page
                  and come back later.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button
                  asChild
                  variant="submission"
                  size="lg"
                  className="w-full p-6 text-lg font-semibold"
                >
                  <Link href="/questionnaire">
                    Check eligibility <MoveUpRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  size="lg"
                  className="w-full p-6 text-lg font-semibold"
                >
                  <Link href="/questionnaire">
                    All support available <MoveUpRight />
                  </Link>
                </Button>
                <DrawerClose>Cancel</DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </CardFooter>
      )}
    </Card>
  )
}
