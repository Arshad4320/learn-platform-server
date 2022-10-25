
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const course = require('./fackData')

app.get('/', (req, res) => {
    res.send('learning site  is running ')
})

app.get('/course', (req, res) => {
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = (req.params.id);
    const course = course.find(ht => ht.id == id);
    res.send()
})

app.get('/course')
app.listen(port, () => {
    console.log(`Learning site is ${port}`);
})