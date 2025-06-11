const express = require("express");
const router = express.Router();
const jobController = require("../controller/job.controller");

router.post("/create", jobController.createJob);

router.get("/list", jobController.listJob);

router.patch("/edit", jobController.editJob);

router.delete("/delete", jobController.deleteJob);

module.exports = router;