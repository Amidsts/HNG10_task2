const express = require("express")
const dotenv = require("dotenv")
const {connect} = require("mongoose")
const personRoute = require("./routes/person.route")

const app = express()
dotenv.config()

const {
    port,
    db_uri
} = process.env


//connect db
connect(db_uri)
.then( () => {
    console.log("connected to database successfully");
} )
.catch( () => {
    console.log("unable to connect to the database");
})



app
    .use(express.urlencoded({extended: true}))
    .use(express.json())
    
app.use("/api", personRoute)


app.listen( port, () => {
    console.log(`server is running on port ${port}`);
} )