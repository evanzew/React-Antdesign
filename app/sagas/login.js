import { call, put, take } from 'redux-saga/effects';
import fetchRequest from '../helper/fetchHelper';
import * as toastr from 'toastr';
import { userLogin, IS_USER_LOGIN } from '../actions/loginAction';
toastr.options.closeButton = true;
export function* loginAsync(data) {
  try {
    if (data.userName !== undefined) {
      let result = yield call(fetchRequest, '/api/v1/login', 'POST', data);
      if (result.code == 200) {
        yield put(userLogin(result.data.User_Name));
        var dataJson = JSON.stringify(data);
        sessionStorage.setItem('data', dataJson);
      } else {
        toastr.error('UserName or Password error!');
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoginAsync() {
  while (true) {
    const { data } = yield take(IS_USER_LOGIN);
    yield call(loginAsync, data);
  }
}
