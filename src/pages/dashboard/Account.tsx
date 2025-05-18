import AccountDetails from "../../components/account/AccountDetails"
import PaymentSummaries from "../../components/account/PaymentSummaries"

const Account = () => {
  return (
    <div className="w-full flex gap-4 mt-4">
      <div className="w-3/5">
        <AccountDetails />
      </div>
      <div className="w-full">
        <PaymentSummaries />
      </div>
    </div>
  )
}

export default Account