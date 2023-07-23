export function fetchEmpDetails(state = null, action) {
  switch (action.type) {
    case "FETCH_EMP_DETAILS":
      return action.data;
    default:
      return state;
  }
}
export function fetchEmpDepts(state = null, action) {
  switch (action.type) {
    case "FETCH_EMP_DEPT":
      return action.data;
    default:
      return state;
  }
}
export function fetchEmpUpdateDetails(state = null, action) {
  switch (action.type) {
    case "FETCH_EMP_UPDATE_DETAILS":
      return action.data;
    default:
      return state;
  }
}

export function fetchEmpSingleDetail(state = null, action) {
  switch (action.type) {
    case "FETCH_EMP_SINGLE_DETAIL":
      return action.data;
    default:
      return state;
  }
}
export function fetchNewEmpDetail(state = null, action) {
  switch (action.type) {
    case "ADD_NEW_EMP":
      return action.data;
    default:
      return state;
  }
}

export function fetchDeleteEmpDetail(state = null, action) {
  switch (action.type) {
    case "DELETE_EMP_DETAIL":
      return action.data;
    default:
      return state;
  }
}
