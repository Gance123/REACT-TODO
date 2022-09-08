import React from "react";

const style = {
  backgroundColor: "aquamarine",
  width: "400px",
  height: "30px",
  padding: "8px",
  borderRadius: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, TrueorFalse } = props;
  return (
    <div style={style}>
      <input
        disabled={TrueorFalse}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange} //setTodoText(event.target.value)
      />
      <button disabled={TrueorFalse} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
