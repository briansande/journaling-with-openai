import React from "react";
import Entry from "./Entry";

function EntryList({ entries, onDelete }) {
    return (
        <div className="entry-list">
            {entries.map((entry, key) => (
                <Entry
                    key={key}
                    entry={entry}

                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default EntryList;