import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import { Dispatch } from 'redux';
import { actionCreatorFactory } from 'typescript-fsa';
// eslint-disable-next-line no-unused-vars
import { ITask } from '../states/ITask';

const actionCreator = actionCreatorFactory('task-actions');

/**
 * タスクの一覧を表示する
 * 引数は、タスクオブジェクトの配列
 */
export const showTaskListAction = actionCreator<ITask[]>('show-task-list');

/**
 * タスクを追加する
 * 引数は、追加するタスクオブジェクト
 */
export const addTaskAction = actionCreator<ITask>('add');

/**
 * タスクの完了フラグをトグルする
 * 引数は、タスクID
 */
export const toggleCompleteAction = actionCreator<string>('toggle-complete');

/**
 * タスクを削除する
 * 引数は、タスクID
 */
export const deleteTaskAction = actionCreator<string>('delete');

// 確認のため、ダミーデータをハードコーディングする
const dummyTasks: ITask[] = [
  {
    complete: false,
    deadline: moment().add(1, 'day').toDate(),
    id: '0',
    taskName: 'task01',
  },
  {
    complete: true,
    deadline: moment().add(1, 'day').toDate(),
    id: '1',
    taskName: 'task02',
  },
  {
    complete: false,
    deadline: moment().add(-1, 'day').toDate(),
    id: '2',
    taskName: 'task03',
  },
  {
    complete: true,
    deadline: moment().add(-1, 'day').toDate(),
    id: '3',
    taskName: 'task04',
  },
];

/** タスクの一覧を取得する */

export const getTaskList = (dispatch: Dispatch): void => {
  // 別の回で非同期の処理に変更するため関数としている。
  dispatch(showTaskListAction(dummyTasks));
};
