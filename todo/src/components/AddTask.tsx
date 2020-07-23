import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import React, { ChangeEvent, useCallback, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // --(a)
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTask } from '../actions/TaskActions';
import { Button } from '@material-ui/core';

// #region styled
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 1em 0;
  width: 100%;
`;

const TextBox = styled.input`
  box-sizing: border-box;
  width: 100%;
`;

const TaskNameBox = styled.p`
  flex-grow: 1;
`;

const DeadlineBox = styled.div``;

// #endregion
const AddTask: React.FC = () => {
  // Redux の dispatch 関数を取得する --(b)
  const dispatch = useDispatch();
  // タスク名と期限を local state として定義する --(c)
  const [deadline, setDeadline] = useState<Date>(
    moment().add('day', 1).toDate(),
  );
  const [taskName, setTaskName] = useState<string>('');
  // タスク名が変更したとき(タイプしたとき)のイベント
  const onChangeTaskName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.currentTarget.value);
  }, []);
  // 期限が変更したとき(タイプしたとき)のイベント
  const onChangeDeadLine = useCallback((date: Date) => {
    setDeadline(date);
  }, []);
  // 追加ボタンを押した時のイベント
  const onClickAddButton = useCallback(() => {
    // 追加アクションを dispatch する
    addTask(
      {
        complete: false,
        deadline,
        taskName,
        id: '',
      },
      dispatch,
    );
  }, [deadline, taskName]); // 関数の外の変数を参照しているので、変更を監視する
  return (
    <Container>
      <TaskNameBox>
        <label>
          task name
          <TextBox type="text" value={taskName} onChange={onChangeTaskName} />
        </label>
      </TaskNameBox>
      <DeadlineBox>
        <label>
          dead line
          <DatePicker
            selected={deadline}
            showTimeSelect={true}
            dateFormat="yyyy-MM-dd HH:mm"
            onChange={onChangeDeadLine}
          />
        </label>
      </DeadlineBox>
      <Button variant="contained" onClick={onClickAddButton}>
        +
      </Button>
    </Container>
  );
};

export default AddTask;
