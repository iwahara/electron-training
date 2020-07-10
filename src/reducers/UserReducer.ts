import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { changeUserAction } from '../actions/UserActions';
// eslint-disable-next-line no-unused-vars
import IUser from '../states/IUser';

// Stateの初期値
const initUser: IUser = {
  count: 0,
  name: '',
};

const userReducer = reducerWithInitialState<IUser>(initUser)
  // Action ごとに`.case`をメソッドチェーンでつなぐ
  // 1番目の引数は、アクション、2番めが処理の関数
  // 処理の関数の引数は、1番目が変更前の State、2番めが Action の値
  // 必ず、Stateと同じ型(ここでは、IUser)のオブジェクトを return する必要がある。
  // payload はここでは、Actionで指定した`Partial<IUser>`の型のオブジェクト。
  .case(changeUserAction, (state, payload) => ({
    ...state,
    ...payload,
  }))
  // 上は、下記と同じ意味
  // const user = Object.assign({}, state, payload);
  // return user;
  .build();

export default userReducer;
