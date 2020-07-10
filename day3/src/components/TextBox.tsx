import React, { useMemo, useCallback } from 'react';

interface IProps {
  /** ラベル文字列 */
  label: string;
  /** テキストボックスのタイプ */
  type: 'text' | `password`;
  /** テキストボックスに表示する値 */
  value: string;
  onChangeText: (value: string) => void;
}

const TextBox: React.FC<IProps> = props => {
  const label = useMemo(() => {
    return !!props.label ? <label>{props.label}</label> : null;
  }, [props.label]);
  const onValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      props.onChangeText(value);
    },
    [props.onChangeText],
  );
  return (
    <span>
      {label}
      <input
        name="username"
        type={props.type}
        value={props.value}
        onChange={onValueChange}
      />
    </span>
  );
};

export default TextBox;
