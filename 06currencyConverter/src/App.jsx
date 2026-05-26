import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = currencyInfo ? Object.keys(currencyInfo) : []

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    const rate = currencyInfo[to]
    if (!rate) return

    setConvertedAmount(amount * rate)
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://tse3.mm.bing.net/th/id/OIP.VAOWKFBSIzIgDjBorimwbgHaEK?pid=Api&P=0&h=180')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>

            {/* FROM */}
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />

            {/* SWAP */}
            <div className="relative w-full h-0.5 my-3">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* TO */}
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={!currencyInfo[to]}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-3 disabled:bg-gray-400"
            >
              Convert {from} to {to}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default App