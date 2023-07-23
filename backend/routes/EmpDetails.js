const express = require("express");
const router = express.Router();
const empModel = require("../Modal/EmployeeModal");

router.get("/fetchDetails", function (req, res) {
  try {
    empModel
      .find()
      .then((result) => {
        res.json({
          message: "fetched details successfully",
          data: result,
        });
      })
      .catch((error) => res.send(error));
  } catch (error) {
    res.json({
      status: "failed",
      message: error.response,
      data: [],
    });
  }
});
router.post("/addEmployee", async (req, res) => {
  try {
    const { empName, empDepartment, empSalary } = await req.body;
    const newDataAdded = await new empModel({
      empName,
      empDepartment,
      empSalary,
    });
    newDataAdded
      .save()
      .then(function (result) {
        res.json({
          message: "Data added successfully",
          data: result,
        });
        // res.send(result);
      })
      .catch(function (err) {
        res.send(err);
      });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.response,
      data: [],
    });
  }
});
router.get("/singleDetail/:id", async (req, res) => {
  try {
    const fetchSingleData = await empModel.findById(req.params.id).exec();
    if (fetchSingleData != null) {
      res.json({
        message: "Fetched Single Employee Data successfully",
        data: fetchSingleData,
      });
    } else {
      res.json({
        statusCode: 404,
        message: "Data Not Found",
        data: [],
      });
    }
  } catch (error) {
    res.json({
      status: "failed",
      message: error.response,
      data: [],
    });
  }
});
router.put("/updateDetail/:id", async (req, res) => {
  try {
    const { empName, empDepartment, empSalary } = req.body;
    console.log(req.params.id, req.body);
    const updateData = await empModel
      .findByIdAndUpdate(req.params.id, {
        $set: { empName, empDepartment, empSalary },
      })
      .exec();
    if (updateData != null) {
      const fetchUpdatedData = await empModel.findById(req.params.id).exec();
      res.json({
        message: "Data updated successfully",
        data: fetchUpdatedData,
      });
    } else {
      res.json({
        statusCode: 404,
        message: "Data Not Found",
        data: [],
      });
    }
  } catch (error) {
    res.json({
      status: "failed",
      message: error.response,
      data: [],
    });
  }
});

router.delete("/removeDetail/:id", async (req, res) => {
  try {
    const deleteDetail = await empModel.findByIdAndDelete(req.params.id).exec();
    if (deleteDetail != null) {
      res.json({
        message: "Delete Employee Data successfully",
        data: deleteDetail,
      });
    } else {
      res.json({
        statusCode: 404,
        message: "Data Not Found",
        data: [],
      });
    }
  } catch (error) {
    res.json({
      status: "failed",
      message: error.response,
      data: [],
    });
  }
});

module.exports = router;
