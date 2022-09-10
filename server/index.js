const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const controller = require('./controller')
const { getCompliment,  getFortune,  getMessage, deleteMessage, createMessage, updateMessage } = controller

app.get("/api/compliment", getCompliment);
app.get("/api/compliment", getFortune);
app.get('/api/compliment', getMessage)
app.delete('/api/compliment/:id', deleteMessage)
app.post('/api/compliment', createMessage )
app.put('/api/compliment/:id', updateMessage)

app.listen(4000, () => console.log("Server running on 4000"));
