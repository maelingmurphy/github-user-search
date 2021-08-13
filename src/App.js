import React, {useState} from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

function App() {

  // Set state variable (userInput) to store user search form input value
  const [userInput, setUserInput] = useState("");

  // Update state based on input field changes
  const handleChange = (event) => {
    const userInputValue = event.target.value;
    setUserInput(userInputValue);
    console.log("User input:", userInput);
  }

  return (
    <div>
      <Header />
      <SearchForm onChange={handleChange} value={userInput} />
      <h2>{userInput}</h2>
    </div>
  );
}

export default App;
