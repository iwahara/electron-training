export interface ITask {
  /** 完了フラグ */
  complete: boolean;

  /** 期限 */
  deadline: Date;

  /** ID */
  id: string;

  /** タスクの名前 */
  taskName: string;
}

export interface ITaskList {
  /** タスクのリスト */
  tasks: ITask[];
  /** スピナーの表示 */
  loading: boolean;
  /** 失敗時のメッセージ */
  failedMessage: string;
}
