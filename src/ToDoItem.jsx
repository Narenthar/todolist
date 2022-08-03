import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li>
        {props.text}{" "}
        <button
          class="fa-solid fa-xmark"
          style={{
            position: "relative",
            float: "right",
            background: "crimson",
            color: "white",
            width: "1rem",
          }}
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          X
        </button>
      </li>
    </div>
  );
}

export default ToDoItem;
