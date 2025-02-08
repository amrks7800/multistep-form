import { FieldErrors, UseFormRegister } from "react-hook-form"
import "./index.css"
import { Dispatch, SetStateAction, useCallback } from "react"
import { Addon } from "@/types"
import { ADD_ONS } from "@/constants"
import AddonCheckbox from "../addon-checkbox"

type Step3Props = {
  register: UseFormRegister<any>
  errors: FieldErrors<any>
  planType: "monthly" | "yearly"
  setPlanType: Dispatch<SetStateAction<"monthly" | "yearly">>
}

const Step3 = ({ register, errors, planType }: Step3Props) => {
  const filterAddons = useCallback(
    (addon: Addon) => addon.type === planType,
    []
  )

  return (
    <div className="form__step">
      {ADD_ONS.filter(filterAddons).map(addon => (
        <AddonCheckbox
          addon={addon}
          planType={planType}
          register={register}
          key={addon.id}
        />
      ))}
      <p className="error-message">{errors["addon"]?.message?.toString()}</p>
    </div>
  )
}
export default Step3
