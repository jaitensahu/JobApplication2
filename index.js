// console.log("running");
const dotenv = require("dotenv");
dotenv.config();
// console.log(process.env.DB_USERNAME);
let express = require("express");
// const mongoose = require("mongoose");
const { connect } = require("mongoose");
const jobRoutes = require("./routes/job");
let app = express();

const connetDB = async () => {
  try { 
    const conn = await connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qt9nu2p.mongodb.net/jobapp`
    );
    console.log("connection was made");
  } catch (error) {
    console.log(error.message); 
  }
};
connetDB();
app.use(express.json());
app.use("/api/v1/job/", jobRoutes);

app.listen(10000, () => {
  console.log("running");
});
