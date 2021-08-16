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

    let buttonText = buttonState ? "Hide Info" : "Click for More Info";

    return (
        <div className="user">
            <div className="user__wrapper">
                <div className="user__img-wrapper">
                    <img className="user__img" src={avatar} alt={`profile of ${name}`}/>
                </div>
                <div className="user__content">
                    <h3 className="user__name"><a className="user__name-link" href={url} target="_blank">{name}</a></h3>
                    <button className="user__btn" onClick={getUserData}>{buttonText}</button>
                </div>  
            </div>
            {buttonState && 
                <div className="user__more-info">
                    {isUserLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            <h4 className="user__profile-name">{userData.name}</h4>
                            <p class="user__bio">{userData.bio}</p>
                            <div className="user__stats">
                                <p className="user__stats-label">Followers: <span className="user__stat">{userData.followers}</span></p>
                                <p className="user__stats-label">Public Repos: <span className="user__stat">{userData.public_repos}</span></p>
                                <p className="user__stats-label">Stars: <span className="user__stat">{starCount}</span></p>
                            </div>
                            
                        </div>
                    )}       
                </div>
            } 
        </div>
    );
}

export default User;