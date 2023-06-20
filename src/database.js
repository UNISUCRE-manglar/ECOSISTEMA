
//SE CONECTA EL SERVER CON MONGO DB
const mongoose = require("mongoose");

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;

const MONGODB_URI = 'mongodb+srv://ADMIN:7i6lAR1eBVUhiLAF@cluster0.diivfhv.mongodb.net/';



mongoose
  .connect(MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(db => console.log("conexion con mongo: on"))
  .catch(err => console.error(err));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



