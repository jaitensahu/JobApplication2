const Jobs = require("../model/job");

const createJob = async (req, res) => {
  try {
    let newJob = await Jobs.create(req.body);
    newJob.save();
    res.status(201).json({
      success: true,
      message: "Job created Successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Unable to create Job",
    });
  }
};

const getJob = async (req, res) => {
  try {
    const allJobs = await Jobs.find();
    res.status(200).json({
      success: "true",
      message: "Got all the jobs",
      data: allJobs,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Unable to get jobs",
    });
  }
}; 

const editJob = async (req, res) => {
  try {
    const allJobs = await Jobs.updateOne(
      {
        _id: {
          $eq: req.body._id,
        },
      },
      res.body
    );
    res.status(200).json({
      success: "true",
      message: "Job Edited Successfully",
      data: allJobs,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Unable to edit jobs",
      error:error,
    });
  }
};
const deleteJob = async (req, res) => {
  console.log(req, res);
  try {
   let result = await Jobs.deleteOne({
      _id: {
        $eq: req.body._id,
      },
   });
    console.log(result);
    res.status(200).json({
      success: true,
      message:"Deleted Successefully"
    })
  } catch (error) {
    console.log(error);
  }
}
const jobController = {
  createJob,
  getJob,
  editJob,
  deleteJob,
};
module.exports = jobController;
