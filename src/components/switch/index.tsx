import { ComponentProps, useEffect, useState } from "react"
import "./index.css"

type SwitchProps = {
  onCheckChange: (
    isChecked: boolean,
    setIsChecked: React.Dispatch<boolean>
  ) => void
  checked?: boolean
  id: string
} & ComponentProps<"input">
const Switch = ({
  onCheckChange,
  checked = false,
  id = "switch",
  ...props
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked)
  const [isRendered, setIsRendered] = useState(false)

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    if (onCheckChange && isRendered) onCheckChange(isChecked, setIsChecked)
  }, [isChecked])

  useEffect(() => {
    setIsRendered(true)
  }, [])

  return (
    <div className="switch">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleToggle}
        {...props}
      />
      <label htmlFor={id}>
        <span className={`slider ${isChecked ? "slider--active" : ""}`} />
      </label>
    </div>
  )
}

export default Switch
