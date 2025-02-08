import "./index.css"
import { STEPS } from "@/constants"

type SidebarProps = {
  step: number
  setStep: (step: number) => void
}

const Sidebar = ({ setStep, step }: SidebarProps) => {
  return (
    <aside className="form__sidebar">
      <ul className="steps" role="list">
        {STEPS.map((item, idx) => (
          <Step
            key={idx}
            idx={idx + 1}
            isActive={step === idx + 1}
            setStep={setStep}
            step={item}
          />
        ))}
      </ul>
    </aside>
  )
}
export default Sidebar

const Step = ({
  idx,
  isActive,
  setStep,
  step,
}: {
  idx: number
  isActive: boolean
  setStep: (step: number) => void
  step: {
    label: string
    title: string
  }
}) => {
  return (
    <li className={`step ${isActive ? "active" : ""}`}>
      <button type="button" onClick={() => setStep(idx)}>
        {idx}
      </button>
      <div className="content">
        <p>{step.label}</p>
        <h2>{step.title}</h2>
      </div>
    </li>
  )
}
