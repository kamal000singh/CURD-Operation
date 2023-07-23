import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions";

const AddNewData = (props) => {
  const dispatch = useDispatch();
  const {
    fetchEmpDetails,
    fetchEmpDepts,
    fetchEmpUpdateDetails,
    fetchEmpSingleDetail,
    fetchDeleteEmpDetail,
    fetchNewEmpDetail,
  } = useSelector((state) => state);
  const [getDetails, setGetDetails] = useState(null);
  const [getDept, setGetDept] = useState(null);
  const [data, setData] = useState({
    id: "",
    eName: "",
    eDepartment: "",
    esalary: "",
  });
  useEffect(() => {
    dispatch(actions.getEmpDepts());
    dispatch(actions.getEmpDetails());
  }, []);
  useEffect(() => {
    setGetDetails(fetchEmpDetails);
    setGetDept(fetchEmpDepts);
  }, [fetchEmpDetails, fetchEmpDepts]);
  useEffect(() => {
    console.log("fetched", fetchEmpSingleDetail);
    if (fetchEmpSingleDetail)
      setData({
        id: fetchEmpSingleDetail._id,
        eName: fetchEmpSingleDetail.empName,
        eDepartment: fetchEmpSingleDetail.empDepartment,
        esalary: fetchEmpSingleDetail.empSalary,
      });
  }, [fetchEmpSingleDetail]);
  useEffect(() => {
    dispatch(actions.getEmpDetails());
    setData({ id: "", eName: "", eDepartment: "", esalary: "" });
  }, [fetchEmpUpdateDetails]);
  useEffect(() => {
    dispatch(actions.getEmpDetails());
    setData({ id: "", eName: "", eDepartment: "", esalary: "" });
  }, [fetchNewEmpDetail]);
  useEffect(() => {
    dispatch(actions.getEmpDetails());
    setData({ id: "", eName: "", eDepartment: "", esalary: "" });
  }, [fetchDeleteEmpDetail]);

  const handleChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    let obj = {
      empName: data.eName,
      empDepartment: data.eDepartment,
      empSalary: data.esalary,
    };
    dispatch(actions.addEmpDetail(obj));
  };
  const handleUpdate = async (id) => {
    // setLoading(true);
    let obj = {
      empName: data.eName,
      empDepartment: data.eDepartment,
      empSalary: data.esalary,
    };
    await dispatch(actions.getEmpUpdateDetails(id, obj));
  };

  return (
    <>
      <div className="container p-5">
        <div className="bg-secondary text-light text-center fs-1 fw-bold mb-3">
          Add Employee Details
        </div>
        <div className="row">
          <div className="mb-3 col-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Employees Name
            </label>
            <input
              type="text"
              name="eName"
              onChange={handleChange}
              value={data.eName}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter employee name here..."
            />
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Choose your Department
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={data.eDepartment}
              onChange={handleChange}
              name="eDepartment"
            >
              <option defaultValue="" disabled>
                Select Department
              </option>
              {getDept != null
                ? getDept.map((dept, key) => (
                    <option value={dept.empDepartment} key={key}>
                      {dept.empDepartment}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Salary
            </label>
            <input
              type="text"
              name="esalary"
              onChange={handleChange}
              value={data.esalary}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter your salary here..."
            />
          </div>
          <div className="d-grid gap-2 col-12">
            {/* {console.log(getDetails)} */}
            {data?.id != "" ? (
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => handleUpdate(data.id)}
              >
                Update
              </button>
            ) : (
              <button
                className="btn btn-success"
                type="button"
                onClick={handleSubmit}
              >
                Add +
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="container border">
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">
                <div className="btn-group">Employees Name</div>
              </th>
              <th scope="col">
                <div className="btn-group">Department</div>
              </th>
              <th scope="col">
                <div className="btn-group">Salary</div>
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {getDetails?.length == undefined
              ? null
              : getDetails.map((emp, key) => (
                  <tr className="align-items-center" key={key}>
                    <th scope="row">{key + 1}</th>
                    <td>{emp.empName}</td>
                    <td>{emp.empDepartment}</td>
                    <td>{emp.empSalary}</td>
                    <td className="d-flex justify-content-around">
                      <button
                        className={`btn btn-primary py-0 px-4`}
                        onClick={() => {
                          console.log("Employee ID: " + emp._id);
                          dispatch(actions.getEmpSingleDetail(emp._id));
                        }}
                      >
                        {"Update"}
                      </button>
                      <button
                        className="btn btn-danger py-0 px-4"
                        onClick={() =>
                          dispatch(actions.getEmpDetailDelete(emp._id))
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddNewData;
