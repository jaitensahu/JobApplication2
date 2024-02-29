const Jobs = require("../model/job")

const createJob = async (req, res) => {
  console.log(req.body);
  let newJob = await Jobs.create(req.body);
  newJob.save();
    res.status(201).json({
        success: true,
        message:"Job created Successfully",
    })
 

};

const getJob = async (req, res) => {
  const allJobs = await Jobs.find();
  console.log(allJobs);
  res.status(200).json({
    success: "true",
    message: "got all the jobs",
    data:allJobs,
  });
 };


const editJob = () => {



}
const jobController = {
  createJob,
  getJob,
  editJob,
};
module.exports = jobController;
