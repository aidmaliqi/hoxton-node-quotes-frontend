import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type Quote = {
  id: number;
  quote: string;
  author: string;
  age : number
};

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/quotes")
      .then((resp) => resp.json())
      .then((items) => setQuotes(items));
  }, []);

  return (
    <>
      {quotes.map((item) => (
        <>
          <h1>{item.quote}</h1>
          <span>{item.quote}</span>
          
        </>
      ))}
    </>
  );
}

export default App;
