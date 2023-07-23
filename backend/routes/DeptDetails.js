const express = require("express");
const router = express.Router();
const deptModel = require("../Modal/DepartmentModal");

router.get("/fetchDepartment", function (req, res) {
  try {
    deptModel
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
router.post("/addDepartment", async (req, res) => {
  try {
    const { empDepartment } = await req.body;
    const addDept = await new deptModel({
      empDepartment,
    });
    addDept
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

router.delete("/removeDepartment/:id", async (req, res) => {
  try {
    const deleteDept = await deptModel.findByIdAndDelete(req.params.id).exec();
    if (deleteDept != null) {
      res.json({
        message: "Delete department successfully",
        data: deleteDept,
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
