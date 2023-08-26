import { useState } from "react";
import TempInp from "./TempInp";
import Verdict from "./Verdict";

function WaterTemp() {
  const [temp, setTemp] = useState(0);

  return (
    <div>
      <TempInp temp={temp} setTemp={setTemp} />
      <Verdict temp={temp} />
    </div>
  );
}

export default WaterTemp;
