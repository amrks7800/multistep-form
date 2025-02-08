import { useForm } from "react-hook-form"
import "./index.css"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import Step1 from "../step-1"
import Button from "../button"
import Step2 from "../step-2"
import Step3 from "../step-3"
import { Dispatch, SetStateAction, useEffect } from "react"
import Step4 from "../step-4"
import ThankYou from "../thank-you"
import { step1Schema, step2Schema } from "@/schemas"

type FormProps = {
  step: number
  setStep: (step: number | ((prev: number) => number)) => void
  planType: "monthly" | "yearly"
  setPlanType: Dispatch<SetStateAction<"monthly" | "yearly">>
}

const Form = ({ step, setStep, planType, setPlanType }: FormProps) => {
  const [formData, setFormData] = useLocalStorage("form_data", {})

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  })

  useEffect(() => {
    setFormData((prev: {}) => ({ ...prev, plan: null, addon: null }))
  }, [planType])

  function onSubmit(data: any) {
    console.log(data)

    if (step === 3) {
      if (data.addon)
        setFormData((prev: {}) => ({ ...prev, addon: data.addon }))
      setStep(4)
    }

    if (step === 4) setStep(5)

    if (step === 1) {
      const { name, email, phone } = data

      const step1Data = { name, email, phone }

      const resultData = step1Schema.safeParse(step1Data)

      if (!resultData.success) {
        console.log(resultData.error.errors)

        resultData.error.errors.forEach(e => {
          setError(e.path[0] as string, {
            message: e.message,
          })
        })
      } else {
        setFormData((prev: {}) => ({ ...prev, ...resultData.data }))
        setStep(2)
      }
    } else if (step === 2) {
      const { plan } = data

      const step2Data = { plan }

      const resultData = step2Schema.safeParse(step2Data)

      if (!resultData.success) {
        console.log(resultData.error.errors)

        resultData.error.errors.forEach(e => {
          setError(e.path[0] as string, {
            message: e.message,
          })
        })
      } else {
        setFormData((prev: {}) => ({ ...prev, ...resultData.data }))
        setStep(3)
      }
    }
  }

  function confirmSubmission() {
    setStep(5)
  }

  function handlePrevious() {
    setStep((prev: number) => prev - 1)
  }
  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 errors={errors} register={register} />
      case 2:
        return (
          <Step2
            planType={planType}
            setPlanType={setPlanType}
            setValue={setValue}
            errors={errors}
            register={register}
          />
        )
      case 3:
        return (
          <Step3
            planType={planType}
            setPlanType={setPlanType}
            errors={errors}
            register={register}
          />
        )
      case 4:
        return (
          <Step4
            planType={planType}
            addons={formData.addon || ["1", "5", "6"]}
            plan={formData.plan || "1"}
            setStep={setStep}
          />
        )
      case 5:
        return <ThankYou />
      default:
        return <Step1 errors={errors} register={register} />
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderStep()}

      <div className="btn-group" hidden={step === 5}>
        {step > 1 && (
          <Button
            variant="ghost"
            className="first"
            onClick={handlePrevious}
            type="button"
          >
            Go Back
          </Button>
        )}
        {step < 4 && (
          <Button variant="primary" className="second">
            Continue
          </Button>
        )}
        {step === 4 && (
          <Button
            variant="secondary"
            className="second"
            onClick={confirmSubmission}
          >
            Confirm
          </Button>
        )}
      </div>
    </form>
  )
}
export default Form
