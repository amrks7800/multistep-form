import "./index.css"
import { useEffect, useState } from "react"
import Sidebar from "../sidebar"
import useQueryParams from "@/hooks/useQueryParams"
import { STEPS_FRONTMATTER } from "@/constants"
import Form from "@/components/form"

const MultiStepForm = () => {
  const [params, setParams] = useQueryParams()
  const [step, setStep] = useState(() => Number(params.step) || 1)
  const [planType, setPlanType] = useState<"yearly" | "monthly">(
    (params.planType as "monthly" | "yearly") || "monthly"
  )

  useEffect(() => {
    setParams({ ...params, step: String(step), planType })
  }, [step, planType])

  return (
    <div className="form__outer-wrapper">
      <div className="form__inner-wrapper">
        <Sidebar step={step} setStep={setStep} />
        <div className="steps__wrapper">
          {STEPS_FRONTMATTER[step - 1] && (
            <>
              <h1>{STEPS_FRONTMATTER[step - 1].title}</h1>
              <p>{STEPS_FRONTMATTER[step - 1].desc}</p>
            </>
          )}

          <Form
            step={step}
            setStep={setStep}
            planType={planType}
            setPlanType={setPlanType}
          />
        </div>
      </div>
    </div>
  )
}
export default MultiStepForm
