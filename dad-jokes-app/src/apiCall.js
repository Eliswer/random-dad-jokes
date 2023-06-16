import axios from "axios";

const apiIcanHazDadJokes = async () => {
  const dadJokeResponse = await axios.get("https://icanhazdadjoke.com/", {
    headers: {
      accept: "application/json",
    },
  });

  return dadJokeResponse;
};

export default apiIcanHazDadJokes;
