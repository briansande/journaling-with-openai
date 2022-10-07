import 'dotenv/config';
import express from 'express';
import * as journal from './journal-model.mjs';


const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// CREATE controller 
app.post('/journal', async (req, res) => {
    journal.createEntry(
        req.body.title,
        req.body.date,
        req.body.author,
        req.body.input,
        req.body.output
    ).then((entry) => {
        res.status(201).json(entry);
    }).catch((err) => {
        res.status(400).json({ error: 'Creation of a document failed due to invalid syntax.' });
    });
});
// GET entry by id
app.get('/entries/:_id', async (req, res) => {
    const entryId = req.params._id;

    journal.retrieveEntryById(entryId)
        .then(entry => {
            if (entry !== null) {
                res.json(entry)
            } else {
                res.status(404).json({ error: '404:Document not found.' });
            }
        }).catch((err) => {
            res.status(500).json({ error: '500:Connection to the server failed.' });
        });
});


// GET entries controller
app.get('/entries', async (req, res) => {
    let filter = {};

    journal.retrieveEntries(filter)
        .then(entries => {
            res.send(entries);
        }).catch((err) => {
            res.status(500).json({ error: '500:Connection to the server failed.' });
        });
});



// DELETE entry by id
app.delete('/entries/:_id', async (req, res) => {
    const entryId = req.params._id;
    journal.deleteEntryById(entryId)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: '404:Document not found.' });
            }
        }).catch((err) => {
            console.error(err)
            res.status(500).json({ error: '500:Connection to the server failed.' }).send();
        });
});







app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});