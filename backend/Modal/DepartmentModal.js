const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();

const departmentSchema = new Schema({
  empDepartment: String,
});

module.exports = mongoose.model("DepartmentDetails", departmentSchema);
