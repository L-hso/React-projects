import { useRef } from "react";

export default function TodoListTasks({ todos, tab }) {
  console.log(todos);


  return (
    <ul>
      {todos.map(
        (todo, index) =>
          todo.id == tab && (
            <li
              key={index}
              ref={useRef(index)}
              data-finished={false}
              id={todo.id}
              className={ref.current.dataset.finished? "bg-red-700" : "bg-blue-700"}
            >
              <label>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    event.target.parentNode.classList.toggle("line-through");
                    ref.current.dataset.finished= ref.current.dataset.finished==false;
                  }}
                />{" "}
                {todo.task}
              </label>
            </li>
          )
      )}
    </ul>
  );
}
