const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({path: './config/.env'})
require('./config/db');
const app = express();


app.use(express.json());
//console.log('express');
app.use(express.urlencoded({
  extended: true
}))



// routes 
app.use('/api/user', userRoutes);

// server
app.listen(process.env.PORT, () => {
    console.log(`Linsteng on port ${process.env.PORT}`);
})
