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

const editJob = async (req, res) => {
  //   await jobModel.updateOne(
  //     {
  //       _id: req.body._id,
  //     },
  //     {
  //       $set: {
  //        ...req.body,
  //       },
  //     }
  //   );
  const fields = { ...req.body };
  delete fields._id;
  await jobModel.findByIdAndUpdate(req.body._id, { ...fields });
  res.json({
    success: true,
    message: "Edit job api",
  });
};

const deleteJob = async (req, res) => {
  // await jobModel.deleteOne({_id: req.body._id});
  // await jobModel.deleteMany({_id: req.body._id});

  await jobModel.findByIdAndDelete(req.body._id);
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
