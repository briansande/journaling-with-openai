// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.ATLAS_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if (err) {
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else {
        console.log('Successfully connected to MongoDB Movies collection using Mongoose.');
    }
});




// SCHEMA: Define the collection's schema.
const entrySchema = mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    author: { type: String, required: true },
    input: { type: String, required: true },
    output: { type: String, required: false }

});
// Compile the model from the schema.
const Entry = mongoose.model("Entry", entrySchema);



// CREATE entry *****************************************
const createEntry = async (title, date, author, input, output) => {
    const entry = new Entry({
        title: title,
        date: date,
        author: author,
        input: input,
        output: output
    });
    return entry.save();
}


// RETRIEVE models 
// Retrieve based on a filter and return a promise.
const retrieveEntries = async (filter) => {
    const query = Entry.find(filter).sort({ date: -1 });
    return query.exec();
}

// RETRIEVE entry by id 
const retrieveEntryById = async (_id) => {
    const query = Entry.findById(_id);
    return query.exec();
}

// DELETE entry by id 
const deleteEntryById = async (_id) => {
    const query = await Entry.deleteOne({ _id: _id });
    return query.deletedCount;
}


export { createEntry, retrieveEntries, retrieveEntryById, deleteEntryById };