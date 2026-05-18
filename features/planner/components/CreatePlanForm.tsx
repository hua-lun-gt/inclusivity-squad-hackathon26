"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import {
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldDescription,
  Field,
  FieldLabel,
  FieldSeparator,
  FieldContent,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { HdIcon } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CreatePlanForm() {
  const router = useRouter()
  return (
    <div className="flex h-dvh flex-col p-4 pb-36">
      <div className="flex justify-end">
        <Button asChild variant="link" onClick={() => router.back()} size="lg">
          <Link className="text-xl" href="#">
            {"Cancel"}
          </Link>
        </Button>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="space-y-2">
          <p className="text-4xl font-bold">Create a Plan</p>
        </div>

        <div className="w-full max-w-md">
          <form>
            <FieldGroup>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel
                      className="text-lg font-bold"
                      htmlFor="form-name"
                    >
                      Name
                    </FieldLabel>
                    <Input
                      className="border-ring/50"
                      id="form-name"
                      defaultValue={"Getting Ready for Baby Anna"}
                      required
                    />
                  </Field>

                  <Field>
                    <FieldLabel
                      className="text-lg font-bold"
                      htmlFor="form-topic"
                    >
                      Topic Type
                    </FieldLabel>
                    <Select defaultValue="">
                      <SelectTrigger id="form-topic">
                        <SelectValue placeholder="Select a Topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="01">
                            Parenting and Guardianship
                          </SelectItem>
                          <SelectItem value="02">Home and Living</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field>
                    <FieldLabel
                      className="text-lg font-bold"
                      htmlFor="form-tags"
                    >
                      Content tags
                    </FieldLabel>
                    <Input
                      id="form-tags"
                      defaultValue={"Baby, Child, Health"}
                      required
                      disabled
                    />
                  </Field>
                  <Field>
                    <FieldLabel
                      className="text-lg font-bold"
                      htmlFor="form-personalise"
                    >
                      Personalise
                    </FieldLabel>
                    <Input
                      id="form-personalise"
                      defaultValue={"pink"}
                      required
                      disabled
                    />
                  </Field>
                  <Field>
                    <FieldLabel
                      className="text-lg font-bold"
                      htmlFor="form-tags"
                    >
                      External Content
                    </FieldLabel>
                    <FieldDescription className="text-md text-black">
                      We'll show links to relevant content outside of GOV.UK
                    </FieldDescription>
                  </Field>
                  <Field orientation="horizontal">
                    <Avatar size="lg" className="bg-[#005EB8]">
                      <AvatarImage
                        className="object-contain"
                        src="/assets/nhs_logo.png"
                      />
                      <AvatarFallback>nhs_logo</AvatarFallback>
                    </Avatar>

                    <FieldContent>
                      <FieldLabel className="text-md" htmlFor="form-tags">
                        NHS
                      </FieldLabel>
                      <FieldDescription className="text-base text-black">
                        nhs.uk
                      </FieldDescription>
                    </FieldContent>
                    <Switch id="switch-notifications" defaultChecked />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </FieldGroup>
          </form>
        </div>
      </div>

      <nav className="fixed right-0 bottom-0 left-0 z-50 flex h-20 flex-col items-center gap-2 border-t border-gray-200 bg-white p-4">
        <Button
          type="submit"
          variant="submission"
          className="w-full p-6 text-lg font-semibold"
          onClick={() => router.push("/plan")}
        >
          Save
        </Button>
      </nav>
    </div>
  )
}
