// import "./styles.css";
import React from 'react';

export default function Inputarea(props) {
  return (
    <div　　className="input-area">
        <input value={props.text} onChange={props.handleChange} type="text"></input>
        <button onClick={props.addTodoList}>追加</button>
    </div>
  );
}

