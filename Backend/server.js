const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT

app.get('/', (req,res) => {
    res.send("Hive is Online")
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`))