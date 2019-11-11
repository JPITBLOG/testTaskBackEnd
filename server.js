const express = require("express");
const cors = require("cors");

const {callBirdApiRoutes} = require('./routes/callEbirdAPI');

let app = express();
let port = 8002;

/*use for call api*/
app.use(cors());

app.use('/callforEbirdData',callBirdApiRoutes);

app.listen(process.env.PORT || port, function(){
    console.log('Your node js server is running');
});