import express from "express";
import bodyParser from "body-parser";
import route from './routes/roupaRoute';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/roupas', route);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})