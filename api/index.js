const express = require('express');
const app = express();
const dotenv=require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

app.use(express.json());
dotenv.config();

mongoose.connect(MONGO_URL).then
    console.log("MongoDb is Connected")
.
    catch((err) => console.log(err));




app.use("api/auth",authRoute);

app.listen(5000, () => {
    console.log("server is ready");
})

// mongodb+srv://ansaritanweer836:<Tanweer@1>@cluster0.bdtckey.mongodb.net/?retryWrites=true&w=majority
// "mongodb+srv://ansaritanweer836:<password>@cluster0.bdtckey.mongodb.net/?retryWrites=true&w=majority";