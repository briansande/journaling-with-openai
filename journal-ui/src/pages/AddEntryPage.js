import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




function AddEntryPage() {

    // const [title, setTitle] = useState("");
    // const [author, setAuthor] = useState("");

    const [feelingMorning, setFeelingMorning] = useState("");
    const [activityMorning, setActivityMorning] = useState("");
    const [foodMorning, setFoodMorning] = useState("");

    // const [feelingAfternoon, setFeelingAfternoon] = useState("");
    // const [activityAfternoon, setActivityAfternoon] = useState("");
    // const [foodAfternoon, setFoodAfternoon] = useState("");

    // const [feelingEvening, setFeelingEvening] = useState("");
    // const [activityEvening, setActivityEvening] = useState("");
    // const [foodEvening, setFoodEvening] = useState("");

    // const [feelingNight, setFeelingNight] = useState("");
    // const [activityNight, setActivityNight] = useState("");
    // const [foodNight, setFoodNight] = useState("");

    const [overallFeeling, setOverallFeeling] = useState("");

    const [needInspiration, setNeedInspiration] = useState("");





    const navigate = useNavigate();


    const addEntry = async () => {

        const input = `Write a long diary entry based on these emojis (don't use the emojis in your entry): 
        Morning Feeling: ${feelingMorning}
        Morning Activity: ${activityMorning}
        Morning Food: ${foodMorning}  `;

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
        if (response.status === 201) {
            alert("Entry added successfully");
        } else {
            alert(`Error adding entry: ${response.status} ${response.statusText}`);
        }
        navigate("/entries");
    }




    return (
        <>
            <h2>Welcome to the Open-AI AddEntryPage</h2>

            <div className="dayDiv">
                {/* ------------- Morning ------------- */}
                <div className="input-prompt">
                    <p>Morning Feeling:</p>
                    <input type="text"
                        value={feelingMorning}
                        placeholder=""
                        onChange={(e) => setFeelingMorning(e.target.value)}
                    />
                </div>

                <div className="input-prompt">
                    <p>Morning Activity:</p>
                    <input type="text"
                        value={activityMorning}

                        placeholder=""
                        onChange={(e) => setActivityMorning(e.target.value)}
                    />
                </div>

                <div className="input-prompt">
                    <p>Morning Food:</p>
                    <input type="text"

                        value={foodMorning}
                        placeholder=""
                        onChange={(e) => setFoodMorning(e.target.value)}
                    />
                </div>
            </div>
            {/* 
            <div className="dayDiv">
                <div className="input-prompt">
                    <p>Afternoon Feeling:</p>
                    <input type="text"
                        value={feelingAfternoon}
                        placeholder=""
                        onChange={(e) => setFeelingAfternoon(e.target.value)}
                    />
                </div>

                <div className="input-prompt">
                    <p>Afternoon Activity:</p>
                    <input type="text"
                        value={activityAfternoon}
                        placeholder=""
                        onChange={(e) => setActivityAfternoon(e.target.value)}
                    />
                </div>

                <div className="input-prompt">
                    <p>Afternoon Food:</p>
                    <input type="text"
                        value={foodAfternoon}
                        placeholder=""
                        onChange={(e) => setFoodAfternoon(e.target.value)}
                    />
                </div>
            </div>


            <div className="dayDiv">

                <div className="input-prompt">
                    <p>Evening Feeling:</p>
                    <input type="text"
                        value={feelingEvening}
                        placeholder=""
                        onChange={(e) => setFeelingEvening(e.target.value)}
                    />
                </div>

                <div className="input-prompt">
                    <p>Evening Activity:</p>
                    <input type="text"
                        value={activityEvening}
                        placeholder=""
                        onChange={(e) => setActivityEvening(e.target.value)}
                    />
                </div>

                <div className="input-prompt">
                    <p>Evening Food:</p>
                    <input type="text"
                        value={foodEvening}
                        placeholder=""
                        onChange={(e) => setFoodEvening(e.target.value)}
                    />
                </div>
            </div>


            <div className="dayDiv">
                <div className="input-prompt">
                    <p>Night Feeling:</p>
                    <input type="text"
                        value={feelingNight}
                        placeholder=""
                        onChange={(e) => setFeelingNight(e.target.value)}
                    />

                </div>

                <div className="input-prompt">
                    <p>Night Activity:</p>
                    <input type="text"
                        value={activityNight}
                        placeholder=""
                        onChange={(e) => setActivityNight(e.target.value)}
                    />
                </div>

                <div className="input-prompt">
                    <p>Night Food:</p>
                    <input type="text"
                        value={foodNight}
                        placeholder=""
                        onChange={(e) => setFoodNight(e.target.value)}
                    />
                </div>
            </div>
 */}


            <div className="dayDiv">
                <div className="input-prompt">
                    <p>Overall Feeling:</p>
                    <input type="text"
                        value={overallFeeling}
                        placeholder=""
                        onChange={(e) => setOverallFeeling(e.target.value)}
                    />
                </div>

                <div>
                    Add affirmations:
                    <input type="checkbox"
                        value={needInspiration}
                        onChange={(e) => setNeedInspiration(e.target.value)}

                    />
                </div>
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

            <button onClick={addEntry}>Submit</button>


        </>
    )
}


export default AddEntryPage;