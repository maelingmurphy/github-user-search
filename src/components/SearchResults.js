import React from "react";
import User from "./User";

function SearchResults({searchResults, isLoading}) {
    
    // Write logic that determines what message to post based on search results boolean and number of search results
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
                    id={user.id}
                    name={user.login}
                />
            )
        })
    }

    return (
        <section>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>{resultsText}</h2>
                    <div>
                        {usersComponents}
                    </div>                 
                </div>    
            )}
        </section>

    );
}

export default SearchResults;