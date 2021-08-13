import React from "react";

function SearchForm({onChange, value}) {
    return (
        <div>
            <form>
                <label htmlFor="username">Enter username</label>
                <input type="text" id="username" placeholder="Enter username" value={value} onChange={onChange}/>
                <input type="submit" name="submit" value="Search Users"/>
            </form>           
        </div>
    );
}

export default SearchForm;