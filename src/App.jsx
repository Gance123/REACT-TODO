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
  //inputタグのonChangeは関数をいれる・・・onChangeはeventを引数に取る
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

  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    //splice関数・・・第一引数に何番目か、第二引数に削除する数
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newTodos = [...imcompleteTodos];
    const newDeleteTodos = newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
    const newCompleteTodos = [...completeTodos, newDeleteTodos];
    setcompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    console.log(index);
    const CompleteTodos = [...completeTodos];
    const newCompleteTodos = CompleteTodos.splice(index, 1);
    setcompleteTodos(CompleteTodos);
    const newImcompleteTodos = [...imcompleteTodos, newCompleteTodos];
    setImcompleteTodos(newImcompleteTodos);
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
          {imcompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
