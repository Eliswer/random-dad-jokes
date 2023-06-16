import { useState } from "react";
import "./app.css";

import apiIcanHazDadJokes from "./apiCall";

function App() {
  const [newJoke, setNewJoke] = useState();

  const fetchAJoke = async () => {
    const response = await apiIcanHazDadJokes();
    console.log(response);

    setNewJoke(response.data.joke);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <p className="do-not-laugh">Do Not Laugh Challenge</p>
        <p className="joke">
          {newJoke ||
            "How many bones are in the human hand? A handful of them."}
        </p>
        <button onClick={fetchAJoke}>Get another joke</button>
      </div>
    </div>
  );
}

export default App;
