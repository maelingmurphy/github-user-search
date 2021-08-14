import React from "react";

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
    
    return (
        <section>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <h2>{resultsText}</h2>
            )}
        </section>

    );
}

export default SearchResults;