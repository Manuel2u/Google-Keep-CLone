const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();


// Bodyparser Middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => app.listen(port, () => {
        console.log("Connected to MongoDB");
        console.log(`Server is running on port ${port}`);
    }))
    .catch(err => console.log(err));

const NotesSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String }
});

const Note = mongoose.model("Note", NotesSchema);

// Middleware
app.use(express.json());

// Routes
app.get("/notes", (req, res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json("Error: " + err));
});

app.post("/notes", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title,
        content
    });

    newNote.save()
        .then(() => res.json("Note added!"))
        .catch(err => res.status(400).json("Error: " + err));
});

app.delete("/notes/:id", (req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(() => res.json("Note deleted."))
        .catch(err => res.status(400).json("Error: " + err));
});
