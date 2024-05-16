import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  currencyOptions = [],
  amountDisable = false,
  currencyDisable = false,
}) => {
  const id = useId();
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label htmlFor="id" className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="text"
          id="id"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency)=>(
            <option value={currency} key={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;