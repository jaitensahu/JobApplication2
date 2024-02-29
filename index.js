// console.log("running");
let express = require("express");
// const mongoose = require("mongoose");
const { connect } = require("mongoose");
const jobRoutes = require("./routes/job");
let app = express();

const connetDB = async () => {
  try {
    const conn = await connect(
      "mongodb+srv://jaitensahu9:Rj*8109333@cluster0.qt9nu2p.mongodb.net/"
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
