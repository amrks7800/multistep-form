import { z } from "zod"

const egyptianPhoneNumberRegex = /^\+201[0-9]{9}$/

export const step1Schema = z.object({
  email: z.string().email("email is invalid"),
  name: z.string().min(5, "must be at least 5"),
  phone: z.string().regex(egyptianPhoneNumberRegex, {
    message: "invalid number",
  }),
})

export const step2Schema = z.object({
  plan: z
    .string({
      message: "please select a plan",
    })
    .max(1, "please select a plan"),
})
