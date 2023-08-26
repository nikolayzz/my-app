function TempInp({ temp, setTemp }) {
  return (
    <div>
      <input value={temp} onChange={(event) => setTemp(event.target.value)} />
    </div>
  );
}

export default TempInp;
