// import "./styles.css";
import React from "react";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import classnames from 'classnames';

export default function Incomplete(props) {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {props.list.map((todo, index) => {
          return (
            <li key={index}>
              <div style={{ display: "flex" }}>
                <p>{todo.message}</p>
                <button onClick={() => props.intoComplete(index)}>完了</button>
                <button onClick={() => props.deleteList(index)}>削除</button>
                <FontAwesomeIcon
                  onClick={() => props.changeHeart(index)}
                  className={todo.heartClass}
                  icon={faHeart}
                />
                <span class="counter">{todo.counter}</span>
                <button>編集</button>
              </div>
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
}
