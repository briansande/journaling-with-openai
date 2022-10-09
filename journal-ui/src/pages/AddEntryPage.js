import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'





function AddEntryPage() {
    // const textbox = null;
    const [textBox, setTextBox] = useState("");
    const [loading, setLoading] = useState(false);


    const [state, setState] = useState({
        "feelingMorning": "",
        "activityMorning": "",
        "foodMorning": "",
        "feelingAfternoon": "",
        "activityAfternoon": "",
        "foodAfternoon": "",
        "feelingEvening": "",
        "activityEvening": "",
        "foodEvening": "",
        "feelingNight": "",
        "activityNight": "",
        "foodNight": "",
        "overallFeeling": "",


    });

    // const [needInspiration, setNeedInspiration] = useState("");




    const onEmojiClick = (emojiObject) => {
        const { selectionStart, selectionEnd, name } = textBox

        const curText = state[name]
        if (curText.length < 6) {
            const newText = curText.slice(0, selectionStart) + emojiObject.native + curText.slice(selectionEnd)
            const newState = { ...state, [name]: newText }
            setState(newState)
        }
        else if (curText.length >= 6) {
            alert("You can only add 3 emojis per field")
        }
        textBox.focus()

    };


    const navigate = useNavigate();




    const addEntry = async () => {
        setLoading(true);

        const input = `Write a long diary entry based on these emojis (don't use the emojis in your entry):
        Morning Feeling: ${state.feelingMorning}
        Morning Activity: ${state.activityMorning}
        Morning Food: ${state.foodMorning}
        Afternoon Feeling: ${state.feelingAfternoon}
        Afternoon Activity: ${state.activityAfternoon}
        Afternoon Food: ${state.foodAfternoon}
        Evening Feeling: ${state.feelingEvening}
        Evening Activity: ${state.activityEvening}
        Evening Food: ${state.foodEvening}
        Night Feeling: ${state.feelingNight}
        Night Activity: ${state.activityNight}
        Night Food: ${state.foodNight}
        Overall Feeling: ${state.overallFeeling}
        `;

        const date = new Date();

        const author = "Brian"
        const title = "Journal Entry"

        // Get the response from OpenAI
        const oai_response = await fetch("/output", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "prompt": input })
        });
        const data = await oai_response.json()
        const output = data.choices[0].text


        // Put all components together
        const newEntry = { author, title, input, date, output };

        // Send the new entry to the server
        const response = await fetch("/entries", {
            method: "POST",
            body: JSON.stringify(newEntry),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.status !== 201) {
            console.log("Failed to add entry");
            alert(`Error adding entry: ${response.status} ${response.statusText}`);
        }
        setLoading(false);
        navigate("/entries");
    }

    const consoleLogInput = () => {
        const input = `Write a long diary entry based on these emojis (don't use the emojis in your entry):
        Morning Feeling: ${state.feelingMorning}
        Morning Activity: ${state.activityMorning}
        Morning Food: ${state.foodMorning}
        Afternoon Feeling: ${state.feelingAfternoon}
        Afternoon Activity: ${state.activityAfternoon}
        Afternoon Food: ${state.foodAfternoon}
        Evening Feeling: ${state.feelingEvening}
        Evening Activity: ${state.activityEvening}
        Evening Food: ${state.foodEvening}
        Night Feeling: ${state.feelingNight}
        Night Activity: ${state.activityNight}
        Night Food: ${state.foodNight}
        Overall Feeling: ${state.overallFeeling}
        `;

        console.log(input)
    }


    const handleChanges = (e) => {
        const { name, value } = e.target;
        const newState = { ...state, [name]: value };
        setState(newState);
    }

    const handleClick = (e) => {
        setTextBox(e.target)
    }

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <h2>Add Emojis for each part of your day:</h2>
            <div className="entry-wrapper">
                <div className="entry-form">
                    <div className="dayDiv">
                        <div className="input-prompt">
                            <p>Morning Feeling:</p>
                            <input type="text"
                                value={state.feelingMorning}
                                name="feelingMorning"
                                placeholder=""
                                onChange={handleChanges}
                                onFocus={handleClick}


                            />
                        </div>

                        <div className="input-prompt">
                            <p>Morning Activity:</p>
                            <input type="text"
                                value={state.activityMorning}
                                placeholder=""
                                name="activityMorning"
                                onChange={handleChanges}
                                onFocus={handleClick}
                            />
                        </div>
                        <div className="input-prompt">
                            <p>Morning Food:</p>
                            <input type="text"
                                value={state.foodMorning}
                                placeholder=""
                                name="foodMorning"
                                onChange={handleChanges}
                                onFocus={handleClick}
                            />
                        </div>
                    </div>


                    <div className="dayDiv">
                        <div className="input-prompt">
                            <p>Afternoon Feeling:</p>
                            <input type="text"
                                value={state.feelingAfternoon}
                                placeholder=""
                                name="feelingAfternoon"
                                onChange={handleChanges}
                                onFocus={handleClick}
                            />
                        </div>

                        <div className="input-prompt">
                            <p>Afternoon Activity:</p>
                            <input type="text"
                                value={state.activityAfternoon}
                                placeholder=""
                                name="activityAfternoon"
                                onChange={handleChanges}
                                onFocus={handleClick}
                            />
                        </div>

                        <div className="input-prompt">
                            <p>Afternoon Food:</p>
                            <input type="text"
                                value={state.foodAfternoon}
                                placeholder=""
                                name="foodAfternoon"
                                onChange={handleChanges}
                                onFocus={handleClick}
                            />
                        </div>

                    </div>


                    <div className="dayDiv">
                        <div className="input-prompt">
                            <p>Evening Feeling:</p>
                            <input type="text"
                                value={state.feelingEvening}
                                placeholder=""
                                name="feelingEvening"
                                onChange={handleChanges}
                                onFocus={handleClick}
                            />
                        </div>

                        <div className="input-prompt">
                            <p>Evening Activity:</p>
                            <input type="text"
                                value={state.activityEvening}
                                placeholder=""
                                name="activityEvening"
                                onChange={handleChanges}
                                onFocus={handleClick}
                            />
                        </div>

                        <div className="input-prompt">
                            <p>Evening Food:</p>
                            <input type="text"

                                value={state.foodEvening}
                                placeholder=""
                                name="foodEvening"
                                onChange={handleChanges}
                                onFocus={handleClick}
                            />
                        </div>
                    </div>


                    <div className="dayDiv">
                        <div className="input-prompt">
                            <p>Night Feeling:</p>
                            <input type="text"
                                value={state.feelingNight}
                                placeholder=""
                                name="feelingNight"
                                onChange={handleChanges}
                                onFocus={handleClick}
                            />
                        </div>

                        <div className="input-prompt">
                            <p>Night Activity:</p>
                            <input type="text"

                                value={state.activityNight}
                                placeholder=""
                                name="activityNight"
                                onChange={handleChanges}
                                onFocus={handleClick}
                            />
                        </div>

                        <div className="input-prompt">
                            <p>Night Food:</p>
                            <input type="text"
                                value={state.foodNight}
                                placeholder=""
                                name="foodNight"
                                onChange={handleChanges}
                                onFocus={handleClick}
                            />
                        </div>

                    </div>



                    <div className="dayDiv">
                        <div className="input-prompt">
                            <p>Overall Feeling:</p>
                            <input type="text"
                                value={state.overallFeeling}
                                placeholder=""
                                name="overallFeeling"
                                onChange={handleChanges}
                                onFocus={handleClick}
                            />
                        </div>


                        {/* 
                <div>
                    Add affirmations:
                    <input type="checkbox"
                        value={needInspiration}
                        onChange={(e) => setNeedInspiration(e.target.value)}

                    />
                </div> */}
                    </div>


                    {/* 
            <input type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea type="text" cols="40" rows="5"
                value={input}
                placeholder="Input"
                onChange={(e) => setInput(e.target.value)}
            /> */}



                    {/* Un-comment to enable OpenAI */}
                    <button onClick={addEntry}>Submit</button>
                    {/* <button onClick={consoleLogInput}>Submit</button> */}
                </div>

                <div className="EmojiPicker">
                    <Picker
                        data={data}
                        onEmojiSelect={onEmojiClick}
                        theme="dark"
                        categories={['people', 'animals', 'food', 'activity', 'travel', 'objects', 'symbols', 'flags']}
                        emojiButtonSize={40}
                        emojiSize={30}
                        previewPosition="none"
                        perLine={12}



                    />
                </div>
            </div>


        </>
    )
}


export default AddEntryPage;