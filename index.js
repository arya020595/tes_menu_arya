import express from 'express';
import db from './data';
// Set up the express app
const app = express();
// get all todos
app.get('/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});

app.get('/todos?idstart=1&idend=25', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});
const PORT = 8181;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
