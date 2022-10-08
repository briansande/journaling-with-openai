import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




function AddEntryPage() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [input, setInput] = useState("");
    const navigate = useNavigate();


    const addEntry = async () => {
        const date = new Date();

        const newEntry = { title, author, input, date };
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

    // Get output from the OpenAI API running through server
    const getOpenAIOutput = async () => {
        const response = await fetch("/output", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "prompt": input })
        });
        const data = await response.json()
        console.log(data.choices[0].text)
    }


    return (
        <>
            <h2>Welcome to the Open-AI AddEntryPage</h2>

            <input type="text"
                value={author}
                placeholder="Author"
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input type="text"
                value={input}
                placeholder="Input"
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={addEntry}>Submit</button>

            <button onClick={getOpenAIOutput}> GET OPEN AI</button>

        </>
    )
}


export default AddEntryPage;