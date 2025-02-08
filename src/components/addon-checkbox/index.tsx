import { formatPrice } from "@/utils"
import { ComponentProps } from "react"
import { UseFormRegister } from "react-hook-form"
import "./index.css"
import { Addon } from "@/types"

type AddonCheckboxProps = {
  addon: Addon
  register: UseFormRegister<any>
  planType: "monthly" | "yearly"
} & ComponentProps<"input">

const AddonCheckbox = ({
  addon,
  register,
  planType,
  ...props
}: AddonCheckboxProps) => {
  return (
    <label className="checkbox-group" htmlFor={props.id}>
      <input
        type="checkbox"
        {...props}
        {...register("addon")}
        value={addon.id}
        multiple
      />
      <div className="content flow">
        <h2>{addon.title}</h2>
        <p>{addon.desc}</p>
      </div>
      <p>{formatPrice(addon.price, addon.type)}</p>
    </label>
  )
}
export default AddonCheckbox
