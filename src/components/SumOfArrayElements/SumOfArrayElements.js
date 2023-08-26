import { useState } from "react";

function SumOfArrayElements() {
  const [value, setValue] = useState(0);

  const result = Array.from(value)
    .map((el) => Number(el))
    .reduce((acc, el) => acc + el, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold">Найти сумму элементов массива</h1>
      <p>{`Сумма элементов введенного числа равна: ${result}`}</p>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
    </div>
  );
}

export default SumOfArrayElements;
