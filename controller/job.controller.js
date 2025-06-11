const jobModel = require("../model/job.model");

const createJob = async (req, res) => {
  try {
    console.log(req.body);
    await jobModel.create(req.body);
    res.json({
      success: true,
      message: "Job created successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Invalid Data",
    });
  }
};

const listJob = async (req, res) => {

  const minSalary = req.query.minSalary || 0;

  const jobs = await jobModel.find({
    salary: {
      $gte: minSalary,
    },
  });
  
  res.json({
    success: true,
    message: "List job api",
    results: jobs,
  });
};

const editJob = (req, res) => {
  res.json({
    success: true,
    message: "Edit job api",
  });
};

const deleteJob = (req, res) => {
  res.json({
    success: true,
    message: "Delete job api",
  });
};

const jobController = {
  createJob,
  listJob,
  editJob,
  deleteJob,
};

module.exports = jobController;
