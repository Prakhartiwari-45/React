<select
  value={selectCurrency}
  onChange={(e) => onCurrencyChange(e.target.value)}
>
  {currencyOptions.map((currency) => (
    <option key={currency} value={currency}>
      {currency}
    </option>
  ))}
</select>