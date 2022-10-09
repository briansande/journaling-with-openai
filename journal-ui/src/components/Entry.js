import React from 'react';
import { MdDeleteForever } from "react-icons/md";

function Entry({ entry, onDelete }) {
    return (
        <div className='entry'>
            {/* <h2>{entry.title}</h2> */}
            <h3>{entry.author}</h3>
            <h2>Date: {entry.date.split("T")[0]}</h2>
            {/* <p>{entry.input}</p> */}
            <p>{entry.output}</p>
            <br></br>
            <div className='deleteDiv' onClick={() => onDelete(entry._id)}>
                <span className='deleteSpan'>
                    {/* <MdDeleteForever className='deleteButton' size={15} /> */}
                    DEL
                </span>
            </div>
        </div>
    )
}

export default Entry;