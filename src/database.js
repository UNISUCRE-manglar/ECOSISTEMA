
//SE CONECTA EL SERVER CON MONGO DB
const mongoose = require("mongoose");

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;

const MONGODB_URI = 'mongodb+srv://admin:PPfVuUm07Qrw82ME@clusterz.5xtzvvc.mongodb.net/';



mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(db => console.log("conexion con mongo: on"))
  .catch(err => console.error(error en mongo paphu));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



