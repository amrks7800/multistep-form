import { formatPrice } from "@/utils"
import { ComponentProps } from "react"
import { UseFormRegister } from "react-hook-form"
import "./index.css"
import { Plan } from "@/types"

type PlanRadioProps = {
  plan: Plan
  register: UseFormRegister<any>
} & ComponentProps<"input">

const PlanRadio = ({ plan, register, ...props }: PlanRadioProps) => {
  return (
    <label className="radio-group" htmlFor={props.id}>
      <input type="radio" {...props} {...register("plan")} value={plan.id} />
      <img src={plan.icon} alt="" />
      <div className="content flow">
        <h2>{plan.name}</h2>
        <p>{formatPrice(plan.price, plan.type)}</p>
        {plan.type === "yearly" && (
          <span className="promotion">2 Months free</span>
        )}
      </div>
    </label>
  )
}
export default PlanRadio
