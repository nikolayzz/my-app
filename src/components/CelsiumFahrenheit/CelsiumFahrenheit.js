import { useState } from "react";

function CelsiumFahrenheit() {
  const [temp, setTemp] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const celsiumToFahrenheit = (temp) => {
    setTemp(Number(temp) * 1.8 + 32);
  };

  const FahrenheitToCelsium = (temp, setValue) => {
    setTemp((Number(temp) - 32) * (5 / 9));
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl">Температура в Цельсии</h1>
        <input
          value={temp}
          onChange={(event) => setTemp(event.target.value)}
          onBlur={(temp) => celsiumToFahrenheit(temp)}
          placeholder="Цельсии"
          className="border rounded-lg p-4"
        />
      </div>
      <div>
        <h1 className="text-2xl">Температура в Фаренгейты</h1>
        <input
          value={temp}
          onChange={(event) => setTemp(event.target.value)}
          onBlur={(temp) => FahrenheitToCelsium(temp)}
          placeholder="Фаренгейты"
          className="border rounded-lg p-4"
        />
      </div>
    </div>
  );
}

export default CelsiumFahrenheit;
