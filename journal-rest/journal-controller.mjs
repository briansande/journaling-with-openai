import 'dotenv/config';
import express from 'express';


const PORT = process.env.PORT;
const app = express();
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});