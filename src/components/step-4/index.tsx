import { formatPrice } from "@/utils"
import Button from "../button"
import "./index.css"
import { PLANS, ADD_ONS } from "@/constants"
import { Dispatch, SetStateAction } from "react"

type Step4Props = {
  plan?: string
  addons?: string[]
  planType: "monthly" | "yearly"
  setStep: Dispatch<SetStateAction<number>>
}

const Step4 = ({ planType, addons, plan, setStep }: Step4Props) => {
  const selectedPlan = plan ? PLANS[planType].find(p => p.id === +plan) : null
  const selectedAddons = addons
    ? ADD_ONS.filter(a => addons.includes(String(a.id)))
    : null

  const totalPrice =
    selectedAddons && selectedPlan
      ? selectedAddons?.reduce((a, b) => a + b.price, 0) + selectedPlan?.price
      : 0

  return (
    <div className="form__step">
      <div className="payment-details">
        {selectedPlan && (
          <div className="plan-details">
            <div className="">
              <h2>
                {selectedPlan.name}({planType.toUpperCase()})
              </h2>
              <Button
                variant="ghost"
                style={{
                  textDecoration: "underline",
                  padding: 0,
                }}
                onClick={() => setStep(2)}
              >
                Change
              </Button>
            </div>
            <span className="price">
              {formatPrice(selectedPlan.price, selectedPlan.type)}
            </span>
          </div>
        )}
        <hr />

        <ul role="list" className="flow">
          {selectedAddons?.map(addon => (
            <li key={addon.id}>
              <h3>{addon.title}</h3>
              <span className="price">
                {formatPrice(addon.price, addon.type)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="total">
        <h3>Total ({planType})</h3>
        <span className="price">
          {formatPrice(totalPrice, selectedPlan?.type || "monthly")}
        </span>
      </div>
    </div>
  )
}
export default Step4
