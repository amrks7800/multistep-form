import "./index.css"
import iconThankYou from "/images/icon-thank-you.svg"

const ThankYou = () => {
  return (
    <div className="thank-you">
      <img src={iconThankYou} alt="" width={80} height={80} />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  )
}
export default ThankYou
