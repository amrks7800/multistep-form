import { ComponentProps } from "react"
import { UseFormRegister } from "react-hook-form"
import "./index.css"

type FormGroupProps = {
  id: string
  label: string
  register: UseFormRegister<any>
  name: string
  error?: any
} & ComponentProps<"input">

const FormGroup = ({
  label,
  id,
  register,
  error,
  name,
  ...props
}: FormGroupProps) => {
  return (
    <div className={`form__group ${error && "error"}`}>
      <label htmlFor={id}>{label}</label>
      {error && <p className="error-message">{error.message}</p>}
      <input {...register(name)} {...props} id={id} />
    </div>
  )
}
export default FormGroup
