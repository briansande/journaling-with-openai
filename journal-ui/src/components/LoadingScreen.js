import React from 'react';
import Typewriter from "typewriter-effect";



function LoadingScreen() {
    return (
        <>
            <div className="loading-screen">
                <Typewriter
                    options={{
                        loop: true,
                        cursor: "█",
                        delay: 100,
                        deleteSpeed: 30,
                    }}

                    onInit={(typewriter) => {

                        typewriter
                            .pauseFor(500)
                            .typeString("Writing your journal...")

                            .pauseFor(1500)
                            .deleteAll()
                            .pauseFor(500)
                            .start();
                    }

                    }
                />
            </div>
        </>
    );
}

export default LoadingScreen;