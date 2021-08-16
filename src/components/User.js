import React, {useState} from "react";
import "./css/User.css";

function User({name, avatar, url, apiUrl}) {
    // Add variables to state
    const [buttonState, setButtonState] = useState(false);
    const [userData, setUserData] = useState([]);
    const [starCount, setStarCount] = useState(null);
    const [isUserLoading, setIsUserLoading] = useState(false);
    
    const getUserData = () => {
        // Flip button state
        setButtonState(!buttonState);
        // Get specific user data from API
        setIsUserLoading(true);
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setUserData(data); 
            })
        // Get star count from repos endpoint
        fetch(`${apiUrl}/repos`)
            .then(response => response.json())
            .then(repoData => {
                // Create variable to hold repo star counts
                let count = 0;
                // Sum up stargarzer count across all of user's repos
                repoData.forEach(repo => {
                    count += repo.stargazers_count;
                })
                setStarCount(count);
                setIsUserLoading(false);
            })
    }

    let buttonText = buttonState ? "Hide Info" : "See More Info";

    return (
        <div className="user">
            <div className="user__wrapper">
                <div className="user__img-wrapper">
                    <img className="user__img" src={avatar} alt={`profile image of ${name}`}/>
                </div>
                <div className="user__content">
                    <h3 className="user__name"><a href={url}>{name}</a></h3>
                    <button className="user__btn" onClick={getUserData}>{buttonText}</button>
                    {buttonState && 
                        <div className="user__more-info">
                            <p>More details</p>
                            {isUserLoading ? (
                                <p>Loading...</p>
                            ) : (
                                <div>
                                    <p>{userData.name}</p>
                                    <p>{userData.bio}</p>
                                    <p>Followers <span>{userData.followers}</span></p>
                                    <p>Public Repos <span>{userData.public_repos}</span></p>
                                    <p>Stars <span>{starCount}</span></p>
                                </div>
                            )}       
                        </div>
                    }
                </div>   
            </div>
        </div>
    );
}

export default User;