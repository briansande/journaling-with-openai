import React from 'react';
import { MdDeleteForever } from "react-icons/md";

function Entry({ entry, onDelete }) {
    return (
        <div className='entry'>
            {/* <h2>{entry.title}</h2> */}
            {/* <h3>{entry.author}</h3> */}
            <h2>Date: {entry.date.split("T")[0]}</h2>
            {/* <p>{entry.input}</p> */}
            <p>{entry.output}</p>
            <MdDeleteForever onClick={() => onDelete(entry._id)} />
        </div>
    )
}

export default Entry;