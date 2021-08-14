import React, {useState} from "react";

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
        <div>
            <div>
                <a href={url}>{name}</a>
                <img src={avatar} alt={`test alt description`}/>
                <button onClick={getUserData}>{buttonText}</button>
            </div>
            {buttonState && 
                <div>
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
    );
}

export default User;