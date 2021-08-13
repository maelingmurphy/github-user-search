import React, {useState} from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

function App() {

  // Set state variable (userInput) to store user search form input value
  const [userInput, setUserInput] = useState("");

  // Set state variable (userSearchResults) to store array of results from API call
  const [userSearchResults, setUserSearchResults] = useState([]);

  // Set state boolean variable (isSearchResults) to check if search results are available
  const [isQuery, setIsQuery] =useState(false);

  // Update userInput state based on input field changes
  const handleChange = (event) => {
    const userInputValue = event.target.value;
    setUserInput(userInputValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted")
    // Change value to true once form is submitted in order to trigger SearchResults component display
    setIsQuery(true);

    // Get data from API once component renders to the DOM
    fetch(`https://api.github.com/search/users?q=${userInput}`)
            .then(response => response.json())
            .then(data => {
                console.log("fetch data", data);
                // Update userSearchResults state with user search results 
                setUserSearchResults(data);
            })
  }

  return (
    <div>
      <Header />
      <SearchForm onChange={handleChange} value={userInput} onSubmit={handleSubmit} />
      {isQuery && <SearchResults searchResults={userSearchResults}/>}
    </div>
  );
}

export default App;
