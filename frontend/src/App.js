import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    const response = await fetch("https://vitamin10-znr0.onrender.com/quote");
    const data = await response.json();
    setQuote(data.quote);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Quote of the Day</h1>
      <button onClick={getQuote}>Get Quote</button>
      <p style={{ marginTop: "20px", fontSize: "24px" }}>{quote}</p>
    </div>
  );
}

export default App;
