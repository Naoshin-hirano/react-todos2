// import "./styles.css";
import React from "react";

export default function Complete(props) {
  const style = {
    backgroundColor: "#ffffe0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={style}>
      <p className="title">完了のTODO</p>
      <ul>
        {props.list.map((todo, index) => {
          return (
            <li key={index}>
              <div style={{ display: "flex" }}>
                <p>{todo.message}</p>
                <button onClick={() => props.backToIncomplete(index)}>
                  戻す
                </button>
              </div>
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
}
