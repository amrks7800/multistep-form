import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form"
import "./index.css"
import Switch from "@/components/switch"
import { PLANS } from "@/constants"
import PlanRadio from "../plan-radio"
import { Dispatch, SetStateAction } from "react"

type Step2Props = {
  register: UseFormRegister<any>
  setValue: UseFormSetValue<any>
  errors: FieldErrors<any>
  planType: "monthly" | "yearly"
  setPlanType: Dispatch<SetStateAction<"monthly" | "yearly">>
}

const Step2 = ({
  register,
  errors,
  planType,
  setPlanType,
  setValue,
}: Step2Props) => {
  return (
    <div className="form__step">
      <div className={`plan__wrapper ${errors["plan"] && "error"}`}>
        {PLANS[planType].map(plan => (
          <PlanRadio plan={plan} register={register} key={plan.id} />
        ))}
      </div>
      <div className="plan__switcher">
        <p className={`${planType === "monthly" && "active"}`}>Monthly</p>
        <Switch
          id="plan-switch"
          onCheckChange={isChecked => {
            setPlanType(isChecked ? "yearly" : "monthly")
            setValue("plan", null)
            setValue("addon", null)
          }}
          checked={planType === "yearly"}
        />
        <p className={`${planType === "yearly" && "active"}`}>Yearly</p>
      </div>
      <p className="error-message">{errors["plan"]?.message?.toString()}</p>
    </div>
  )
}
export default Step2
