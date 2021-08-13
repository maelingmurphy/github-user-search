import React, {useState} from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

function App() {

  // Set state variable (userInput) to store user search form input value
  const [userInput, setUserInput] = useState("");

  // Set state variable (userSearchResults) to store array of results from API call
  const [userSearchResults, setUserSearchResults] = useState([]);

  // Update userInput state based on input field changes
  const handleChange = (event) => {
    const userInputValue = event.target.value;
    setUserInput(userInputValue);
  }

  // Get data from GitHub Search API upon form submit 
  const getUserData = async(event) => {
    event.preventDefault();

    try {
      // Make GET request to API with userInput data
      const response = await fetch(`https://api.github.com/search/users?q=${userInput}`);
      // Throw error if response is not successful (not ok)
      if (!response.ok) {
        throw new Error(response.status);
      }
      // Convert response object to JSON
      const userSearchData = await response.json();
      console.log('User search data:', userSearchData);
      // Save search results to state (userSearchResults)
      setUserSearchResults(userSearchData);

    } catch(error) {
      // Set search response boolean variable to false to display correct message
      console.log("error: ", error); 
    }
  }

  return (
    <div>
      <Header />
      <SearchForm onChange={handleChange} value={userInput} onSubmit={getUserData} />
    </div>
  );
}

export default App;
