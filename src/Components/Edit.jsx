// import "./styles.css";
import React from "react";

export default function Inputarea(props) {
  return (
    <div className="input-area">
      <div>
        <button>編集</button>
      </div>
      <div>
        <input
          value={props.text}
          onChange={props.handleChange}
          type="text"
        ></input>
        <button onClick={props.addTodoList}>追加</button>
      </div>
    </div>
  );
}
