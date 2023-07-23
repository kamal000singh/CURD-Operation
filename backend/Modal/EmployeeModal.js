const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();

const employeeSchema = new Schema({
  empName: String,
  empDepartment: String,
  empSalary: Number,
});

module.exports = mongoose.model("EmployeeDetails", employeeSchema);
