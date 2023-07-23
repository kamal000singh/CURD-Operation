import axios from "axios";

function fetchData(type, data) {
  return {
    type: type,
    data: data,
  };
}
const getEmpDetails = () => {
  return (dispatch) => {
    const res = axios.get("//localhost:8080/fetchDetails");
    res
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          dispatch(fetchData("FETCH_EMP_DETAILS", response.data.data));
        } else {
          console.log(response);
        }
      })
      .catch((error) => console.log(error));
  };
};
const getEmpDepts = () => {
  return (dispatch) => {
    const res = axios.get("//localhost:8080/fetchDepartment");
    res
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          dispatch(fetchData("FETCH_EMP_DEPT", response.data.data));
        } else {
          console.log(response);
        }
      })
      .catch((error) => console.log(error));
  };
};
const addEmpDetail = (data) => {
  return (dispatch) => {
    axios
      .post("//localhost:8080/addEmployee", data)
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          dispatch(fetchData("ADD_NEW_EMP", response.data.data));
        } else {
          console.log(response);
        }
      })
      .catch((error) => console.log(error));
  };
};
const getEmpUpdateDetails = (id, data) => {
  console.log("actions.getEmpUpdateDetails", id, data);
  return (dispatch) => {
    axios
      .put(`//localhost:8080/updateDetail/${id}`, data)
      .then((response) => {
        console.log("response", response);
        if (response.status == 200) {
          dispatch(fetchData("FETCH_EMP_UPDATE_DETAILS", response.data.data));
        } else {
          console.log(response);
        }
      })
      .catch((error) => console.log(error));
  };
};

const getEmpSingleDetail = (id) => {
  console.log("actions.getEmpUpdateDetails", id);
  return (dispatch, getState) => {
    const currentState = getState();
    console.log("currentState", currentState);
    axios
      .get(`//localhost:8080/singleDetail/${id}`)
      .then((response) => {
        console.log("response", response);
        if (response.status == 200) {
          dispatch(fetchData("FETCH_EMP_SINGLE_DETAIL", response.data.data));
        } else {
          console.log(response);
        }
      })
      .catch((error) => console.log(error));
  };
};
const getEmpDetailDelete = (id) => {
  return (dispatch) => {
    axios
      .delete(`//localhost:8080/removeDetail/${id}`)
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          dispatch(fetchData("DELETE_EMP_DETAIL", response.data.data));
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const getapiActions = {
  getEmpDetails,
  addEmpDetail,
  getEmpDepts,
  getEmpUpdateDetails,
  getEmpSingleDetail,
  getEmpDetailDelete,
};
