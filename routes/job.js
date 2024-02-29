let express = require("express");
let routes = express.Router();
const jobController = require("../Controller/job");


routes.post("", jobController.createJob);
routes.get("", jobController.getJob);
routes.patch("", jobController.editJob)


module.exports = routes;
