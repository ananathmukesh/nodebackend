const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const db = require('./database/db');
const authrouter = require("./routes/auth");
const chatrouter = require("./routes/chat");


try {


  const corsOptions = {
    origin: '*',//[process.env.APP_URL_PROD,process.env.APP_URL_CLIENTBOOKING,process.env.APP_URL_DEV_CLIENTBOOKING],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies, authorization headers)
    optionsSuccessStatus: 204, // Set the preflight response status to 204
  };
  
  app.use(express.json());
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
  
  app.use('/api',authrouter);
  app.use('/chat',chatrouter);

  db.raw('SELECT 1')
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((error) => {
    console.log('Error connecting to the database:', error.message);
  });
  app.listen(process.env.PORT, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });
} catch (error) {
  console.log(error);
}