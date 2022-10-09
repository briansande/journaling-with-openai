import React from 'react';
import Typewriter from "typewriter-effect";



function LoadingScreen() {
    return (
        <>
            <div className="App">
                <Typewriter
                    options={{
                        loop: true,
                        cursor: "_",
                        delay: 150,
                        deleteSpeed: 150,
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