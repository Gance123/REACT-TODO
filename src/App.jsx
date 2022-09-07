import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [imcompleteTodos, setImcompleteTodos] = useState([
    "あいうえお",
    "かきくけこ"
  ]);

  const [completeTodos, setcompleteTodos] = useState(["さしすせそ"]);

  //inputのvalueがテキスト内容を意味する・・・初期値todotext
  //そのテキスト内容をsetTodoTextで書き換えができるようにする
  //inputタグのonChangeに関数をいれる・・・onChangeはeventを引数に取る
  //event.target.valueにテキスト内容が格納されている
  //・・・setTodoTextで書き換える内容はevent.target.valueを参照するようにする
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  //今までの既に未完了リストにあるtodoと、inputで入ってくるtodoの結合
  //2週目では、1週目のtodoTextはimcompleteTodosになっている
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText} //setTodoText(event.target.value)
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
