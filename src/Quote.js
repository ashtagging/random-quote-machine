import "./styles.css";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState(
    "The supreme art of war is to subdue the enemy without fighting."
  );
  const [author, setAuthor] = useState("Sun Tzu");

  //Used Axios before for weatherapp but this time will use fetch and catch
  const newQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  return (
    <div className="App">
      <div className="quote-wrapper" id="quote-box">
      <div className="title">Quote Generator</div>
        <div className="quote" id="text">
          "{quote}"
        </div>
        <div className="author" id="author">
          - {author} -
        </div>
        <div className="buttons">
          {" "}
          <button onClick={newQuote} className="quote-button" id="new-quote">
            New Quote
          </button>
          <a href={`https://twitter.com/intent/tweet?text=${quote}`} className="twitter-link" id="tweet-quote">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
