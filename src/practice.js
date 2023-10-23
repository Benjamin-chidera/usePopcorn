import React, { useEffect, useState } from "react";

export const Practice = () => {
  const [inputs, setInputs] = useState(1);
  const [cur1, setCur1] = useState("EUR");
  const [cur2, setCur2] = useState("USD");
  // const output = inputs * ((setCur1 / setCur2) / 2 / 100)
  const [converted, setConverted] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function () {
    try {
      async function convert() {
        setIsLoading(true)
        const res = await fetch(
          ` https://api.frankfurter.app/latest?amount=${inputs}&from=${cur1}&to=${cur2}`
        );
        // console.log(res);
        const data = await res.json();
        setConverted(data.rates[cur2]);
        
        setIsLoading(false)
        if (cur1 === cur2) {
          return setConverted(inputs)
        }
      }
      convert()
    } catch (error) {
      console.log(error);
    }

  }, [inputs, cur1, cur2]);
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={inputs}
        onChange={(e) => setInputs(Number(e.target.value))}
        // disabled={isLoading}
      />
      <select
        name=""
        id=""
        value={cur1}
        onChange={(e) => setCur1(e.target.value)}
        // disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        name=""
        id=""
        value={cur2}
        onChange={(e) => setCur2(e.target.value)}
        // disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {" "}
        {converted} {cur2}
      </p>
    </div>
  );
};
