import { combineReducers, createStore } from 'redux';
// eslint-disable-next-line no-unused-vars
import { IState } from './states/IState';
import taskReducer from './reducers/TaskReducer'; // 後からファイルを追加する

// 複数の reducer を束ねる
const combinedReducer = combineReducers<IState>({
  // --(a)
  taskList: taskReducer,
  // reducer が増えたら足していく
});

// グローバルオブジェクトとして、store を作成する。
export const store = createStore(combinedReducer); // --(b)

// import store from './Store' とアクセスできるように default として定義する
export default store;
