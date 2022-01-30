import "./styles.css";
import React, { useState } from "react";
import Complete from "./Components/Complete";
import Incomplete from "./Components/Incomplete";
import Inputarea from "./Components/Inputarea";

export default function App() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(() => event.target.value);
  };

  const [incompleteList, setIncomplete] = useState([
    {
      message: "Hello world1",
      heartClass: "noColorHeart",
      counter: 0
    },
    {
      message: "Hello world2",
      heartClass: "heartIcon",
      counter: 1
    }
  ]);

  const [completeList, setComplete] = useState([
    {
      message: "fire",
      heartClass: "noColorHeart",
      counter: 0
    }
  ]);

  //TODOを追加
  const addTodoList = () => {
    //なぜスプレッド構文にする必要があるか：
    //スプレッド構文がないと配列の中に配列が入ることになるので、スプレッド構文で配列の中身だけ取り出してる
    const todoList = [...incompleteList];
    todoList.push({
      message: text,
      heartClass: "noColorHeart",
      counter: 0
    });
    setIncomplete(todoList);
    setText("");
  };

  //TODOを削除
  const deleteList = (index) => {
    const newTodos = [...incompleteList];
    newTodos.splice(index, 1);
    setIncomplete(newTodos);
  };

  //TODOを完了
  const intoComplete = (index) => {
    //未完了のTODOから削除
    const newTodos = [...incompleteList];
    newTodos.splice(index, 1);
    setIncomplete(newTodos);

    //完了済みのTODOへ追加
    const newCompTodos = [...completeList, incompleteList[index]];
    setComplete(newCompTodos);
  };

  //TODOを未完了に戻す
  const backToIncomplete = (index) => {
    //完了のTODOから削除
    const newTodos = [...completeList];
    newTodos.splice(index, 1);
    setComplete(newTodos);

    //未完了のTODOへ追加
    const newIncomplete = [...incompleteList, completeList[index]];
    setIncomplete(newIncomplete);
  };

  //いいねマークを変更
  const changeHeart = (index) => {
    const todoList = [...incompleteList];
    if (todoList[index].heartClass === "noColorHeart") {
      todoList[index].heartClass = "heartIcon";
      todoList[index].counter += 1;
      setIncomplete(todoList);
    } else {
      todoList[index].heartClass = "noColorHeart";
      todoList[index].counter -= 1;
      setIncomplete(todoList);
    }
  };

  return (
    <div>
      <div className="todoListZone">
        <Inputarea
          text={text}
          handleChange={handleChange}
          addTodoList={addTodoList}
        />
        <Incomplete
          list={incompleteList}
          intoComplete={intoComplete}
          deleteList={deleteList}
          changeHeart={changeHeart}
        />
        <Complete list={completeList} backToIncomplete={backToIncomplete} />
      </div>
    </div>
  );
}
