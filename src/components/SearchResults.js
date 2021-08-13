import React from "react";

function SearchResults({searchResults}) {
    
    // Write logic that determines what message to post based on search results boolean and number of search results
    let resultsText = "";

    if (searchResults.total_count === 0) {
        resultsText = "No results found";
    } else if (resultsText === 1) {
        resultsText = "1 result found";
    } else {
        resultsText = `${searchResults.total_count} results found`;
    }
    
    return (
        <section>
            <p>{resultsText}</p>
        </section>
    );
}

export default SearchResults;