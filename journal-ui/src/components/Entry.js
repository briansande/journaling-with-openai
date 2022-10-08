import React from 'react';
import { MdDeleteForever } from "react-icons/md";

function Entry({ entry, onDelete }) {
    return (
        <div>
            <h2>{entry.title}</h2>
            <h3>{entry.author}</h3>
            <p>{entry.date}</p>
            <p>{entry.input}</p>
            <p>{entry.output}</p>
            <MdDeleteForever onClick={() => onDelete(entry._id)} />
        </div>
    )
}

export default Entry;