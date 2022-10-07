import React from "react";
import EntryList from "../components/EntryList";


function ViewEntriesPage() {

    const [entries, setEntries] = React.useState([]);

    const onDelete = async (_id) => {
        const response = await fetch(`/entries/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newEntries = entries.filter(entry => entry._id !== _id);
            setEntries(newEntries);
        } else {
            console.log(`Failed to delete entry with _id ${_id}`);
        }
    }



    // Load the entries from the database
    const loadEntries = async () => {
        const response = await fetch("/entries");
        const data = await response.json();
        setEntries(data);
    };


    // Load the entries when the page loads
    React.useEffect(() => {
        loadEntries();
    }, []);


    // Render the entries
    return (
        <>
            <h2>Welcome to the Open-AI ViewEntriesPage</h2>

            <p>These are the entries:</p>

            <EntryList entries={entries} onDelete={onDelete} />
        </>
    )
}

export default ViewEntriesPage;