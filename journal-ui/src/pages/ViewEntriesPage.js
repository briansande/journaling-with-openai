import React from "react";
import EntryList from "../components/EntryList";
import Nav from "../components/Nav";
import { useLocation } from 'react-router-dom'



function ViewEntriesPage() {

    const location = useLocation()
    const { username } = location.state

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
        const response = await fetch("/entries?username=" + username);
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
            <Nav username={username}></Nav>

            {/* <h2>journal entries</h2> */}


            <EntryList entries={entries} onDelete={onDelete} />
        </>
    )
}

export default ViewEntriesPage;