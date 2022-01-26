const express =  require('express');
const req = require('express/lib/request');
const userRoutes= require('./src/routes/userRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const URI =  process.env.MONGO_URI || "<mongo-uri>";
const app= express();
const PORT =  process.env.PORT || 3000;

mongoose.connect(URI);

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

app.use(userRoutes);

app.get('/', (req,res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})
