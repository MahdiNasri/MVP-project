const express = require('express');
const cors = require('cors');

const db = require('./database/index.js');

const routes = require('./routes.js')

const app = express();
const port = 3001

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/../public'))
app.use('/api/events/', routes)

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})