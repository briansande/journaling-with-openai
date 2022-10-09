import React from "react";
import Typewriter from "typewriter-effect";
import Nav from "../components/Nav";
import { useLocation } from "react-router-dom";



function HomePage() {

    const location = useLocation()
    const { username } = location.state



    return (
        <>
            <Nav username={username}></Nav>

            <div className="home-heading">
                <Typewriter
                    options={{
                        loop: false,
                        cursor: "█",
                        delay: 10,
                        deleteSpeed: 50,
                    }}

                    onInit={(typewriter) => {

                        typewriter
                            .pauseFor(500)
                            .typeString(`Hello ${username}!  `)
                            .pauseFor(500)
                            .typeString('I am your A.I. journal.')
                            .typeString('<br>')
                            .pauseFor(500)
                            .typeString("I can scan your brain and write summary of your day for you!")
                            .typeString('<br>')
                            .typeString(' ')
                            .pauseFor(500)
                            .typeString('<br>')
                            .pauseFor(500)
                            .typeString('<br>')
                            .pauseFor(1500)
                            .typeString("Unfortunately, the brain scanning technology was too expensive, so I've only been programmed to interpret human emotions through emojis.")
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
                            .pauseFor(2500)
                            .typeString('Anyways - If you describe your day with emojis, I will get a journal entry written for you in no time!')
                            .typeString('<br>')
                            .pauseFor(500)
                            .typeString('Click <b>Add Entry</b> to get started, or <b>View Journal</b> to see your past entries.')
                            .start();
                    }

                    }
                />
            </div>


        </>
    )
}

export default HomePage;