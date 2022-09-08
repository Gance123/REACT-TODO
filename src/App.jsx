import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { ImcompleteList } from "./components/ImcompleteList";
import { CompleteList } from "./components/ComleteList";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

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
    const DeleteTodos = newTodos.splice(index, 1); //削除対象・・・imcomleteTodos[index]
    const newCompleteTodos = [...completeTodos, DeleteTodos];
    setImcompleteTodos(newTodos);
    setcompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const CompleteTodos = [...completeTodos];
    const BackTodos = CompleteTodos.splice(index, 1); //削除対象・・・comleteTodos[index]
    const newImcompleteTodos = [...imcompleteTodos, BackTodos];
    setcompleteTodos(CompleteTodos);
    setImcompleteTodos(newImcompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <p style={{ color: "red" }}>※登録できるtodo5個までです。</p>

      <ImcompleteList
        todos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteList todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
