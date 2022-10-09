import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



function WelcomePage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    const handleSubmit = function () {
        // console.log(username)
        navigate("/home", { state: { username: username } });
    }

    const handleChanges = function (event) {
        setUsername(event.target.value);
    }


    return (
        <>
            <div className='welcomeDiv'>


                <div>
                    <p></p>
                    <form className='welcomeForm'
                        onSubmit={handleSubmit}
                        onChange={event => handleChanges(event)}
                    >

                        <p>journal@ai login as:</p>
                        <input
                            type='text'
                            className='welcomeInput'
                            autoFocus
                        />

                    </form>
                </div>
            </div>


        </>

    );
}

export default WelcomePage;

