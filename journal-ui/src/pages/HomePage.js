import React from "react";
import Typewriter from "typewriter-effect";



function HomePage() {
    return (
        <>

            <div className="home-heading">
                <Typewriter
                    options={{
                        loop: false,
                        cursor: "_",
                        delay: 20,
                        deleteSpeed: 50,
                    }}

                    onInit={(typewriter) => {

                        typewriter
                            .pauseFor(500)
                            .typeString('Hello!  ')
                            .pauseFor(500)
                            .typeString('I am your A.I. Journal.')
                            .typeString('<br>')
                            .pauseFor(500)
                            .typeString("I can scan your brain and write a journal for you!")
                            .typeString('<br>')
                            .typeString(' ')
                            .pauseFor(500)
                            .typeString('<br>')
                            .pauseFor(500)
                            .typeString('<br>')
                            .pauseFor(1500)
                            .typeString('Unfortunately, brain scanning technology is still years away, so my creator only programmed me to interpret human emotions through emojis.')
                            .pauseFor(250)
                            .typeString('.')
                            .pauseFor(250)
                            .typeString('.')
                            .pauseFor(250)
                            .typeString('.')
                            .pauseFor(250)
                            .typeString('.')
                            .pauseFor(250)
                            .typeString('.')
                            .pauseFor(250)
                            .typeString('.')
                            .typeString('<br>')
                            .typeString('<br>')
                            .typeString('Anyways. Click <b>Add Entry</b> to get started, or <b>View Journal</b> to see your past entries.')
                            .start();
                    }

                    }
                />
            </div>
        </>
    )
}

export default HomePage;