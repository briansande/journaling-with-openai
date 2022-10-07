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

// GET entries controller
app.get('/journal', async (req, res) => {
    let filter = {};

    journal.retrieveEntries(filter)
        .then(entries => {
            res.send(entries);
        }).catch((err) => {
            res.status(500).json({ error: '500:Connection to the server failed.' });
        });
});






app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});