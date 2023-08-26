import { useState } from "react";

function Fahrenheit() {
  return (
    <div>
      <h1 className="text-2xl">Температура в Фаренгейты</h1>
      <input placeholder="Фаренгейты" className="border rounded-lg p-4" />
    </div>
  );
}

export default Fahrenheit;
