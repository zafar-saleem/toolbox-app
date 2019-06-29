import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { toolSaga } from './admin/tool/toolSaga';
import { listSaga } from './admin/list/listSaga';
import { employeesSaga } from './admin/employees/employeesSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.ON_NEW_TOOL, toolSaga);
  yield takeLatest(types.ON_FETCH_TOOLS_LIST, listSaga);
  yield takeLatest(types.ON_NEW_EMPLOYEE, employeesSaga);
}