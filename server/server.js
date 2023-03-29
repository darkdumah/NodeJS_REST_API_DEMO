import express from "express";
import bodyParser from "body-parser";
import userRoutes from "../routes/users.js";

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('HELLO and Welcome to the API DEMO'));

app.listen(PORT, () => {
    console.log(`Server is Running on port: ${PORT}`);
});