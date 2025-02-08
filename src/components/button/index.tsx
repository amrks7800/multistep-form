import { ComponentProps } from "react"
import "./index.css"

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost"
} & ComponentProps<"button">

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`btn ${props.className} ${variant}`}>
      {children}
    </button>
  )
}
export default Button
