import { FieldErrors, UseFormRegister } from "react-hook-form"
import FormGroup from "../form-group"
import "./index.css"

type Step1Props = {
  register: UseFormRegister<any>
  errors: FieldErrors<any>
}

const Step1 = ({ register, errors }: Step1Props) => {
  return (
    <div className="form__step">
      <FormGroup
        name="name"
        register={register}
        error={errors["name"]}
        id="name"
        label="Name"
        placeholder="Eg. Stephen king"
      />
      <FormGroup
        name="email"
        register={register}
        error={errors["email"]}
        id="email"
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
      />
      <FormGroup
        name="phone"
        register={register}
        error={errors["phone"]}
        id="phone"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
      />
    </div>
  )
}
export default Step1
