import * as types from './index';

export const newToolAction = (tool) => {
  return {
    type: types.ON_NEW_TOOL,
    tool
  }
};

export const updateToolAction = payload => {
  return {
    type: types.UPDATE_TOOL_BEGIN,
    payload,
  }
};

export const fetchToolsListAction = payload => {
  return {
    type: types.ON_FETCH_TOOLS_LIST,
    payload,
  }
};

export const addEmployeeAction = employee => {
  return {
    type: types.ADD_EMPLOYEE_BEGIN,
    employee
  }
};

export const fetchEmployeesAction = employee => {
  return {
    type: types.FETCH_EMPLOYEES_BEGIN,
    employee
  }
};

export const fetchToolsAction = () => {
  return {
    type: types.FETCH_EMPLOYEES_TOOLS_BEGIN
  }
};

export const deleteToolAction = (id) => {
  return {
    type: types.ON_DELETE_TOOL,
    id
  }
};

export const deleteEmployeesAction = (employee) => {
  return {
    type: types.ON_DELETE_EMPLOYEE,
    employee
  }
};