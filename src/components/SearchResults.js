import React from "react";
import User from "./User";
import "./css/SearchResults.css";

function SearchResults({searchResults, isLoading}) {
    
    // Determine what message to post based on search results boolean and number of search results
    let resultsText = "";

    if (searchResults.total_count === 0) {
        resultsText = "No results found";
    } else if (resultsText === 1) {
        resultsText = "1 result found";
    } else {
        resultsText = `${searchResults.total_count} results found`;
    }

    // Create array of User components by mapping searchResults data 
    let usersComponents = [];
    if (!isLoading) {
        usersComponents = searchResults.items.map( (user) => {
            return (
                <User 
                    key={user.id}
                    name={user.login} 
                    avatar={user.avatar_url}
                    url={user.html_url}
                    apiUrl={user.url}
                />
            )
        })
    }

    return (
        <section className="results">
            {isLoading ? (
                <p className="results__loading">Loading...</p>
            ) : (
                <div>
                    <h2 className="results__info">{resultsText}</h2>
                    <div>
                        {usersComponents}
                    </div>                 
                </div>    
            )}
        </section>

    );
}

export default SearchResults;