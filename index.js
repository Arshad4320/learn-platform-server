
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const courseData = require('./Data/fackData.json')

app.get('/', (req, res) => {
    res.send('learning site  is running ')
})

app.get('/course', (req, res) => {
    res.send(courseData);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courseData?.find(ht => ht.id == id);
    res.send(course)
})

app.get('/course')
app.listen(port, () => {
    console.log(`Learning site is ${port}`);
})