import React from "react";

function SearchForm({onChange, value, onSubmit}) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Enter username</label>
                <input type="text" id="username" placeholder="Enter username" value={value} onChange={onChange} required/>
                <input type="submit" name="submit" value="Search Users"/>
            </form>           
        </div>
    );
}

export default SearchForm;