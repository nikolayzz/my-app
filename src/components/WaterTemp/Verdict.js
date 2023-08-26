function Verdict({ temp }) {
  let result;

  if (temp > 0 && temp < 100) {
    result = "Вода в жидком состоянии";
  }

  if (temp <= 0) {
    result = "Вода в твердом состоянии";
  }

  if (temp >= 100) {
    result = "Вода в газообразном состоянии";
  }

  return (
    <div>
      Результат:
      {result}
    </div>
  );
}

export default Verdict;
