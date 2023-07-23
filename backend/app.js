const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const empDetailsRouter = require("./routes/EmpDetails");
const deptDetailsRouter = require("./routes/DeptDetails");
const connect = require("./db/connection");

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", empDetailsRouter);
app.use("/", deptDetailsRouter);

app.listen(port, () => console.log("listening on port: ", port));
