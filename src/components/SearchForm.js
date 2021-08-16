import React from "react";
import "./css/SearchForm.css";

function SearchForm({onChange, value, onSubmit}) {
    return (
        <section className="search">
            <form className="search__form" onSubmit={onSubmit}>
                <label className="search__label" htmlFor="username">Enter username</label>
                <input className="search__input" type="text" id="username" placeholder="Enter username" value={value} onChange={onChange} required/>
                <input className="search__btn" type="submit" name="submit" value="Search Users"/>
            </form>           
        </section>
    );
}

export default SearchForm;