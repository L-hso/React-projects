import TodoListTask from "./Todo-list-task";
import { useMemo } from "react";

export default function TodoListTasks({ todos, tab }) {
  console.log(todos);

  return (
    <ul
      className={
        "py-4 w-[100%] h-[70%] mt-4 border-b border-zinc-500 overflow-y-scroll no-scrollbar flex flex-col gap-3"
      }
    >
      {todos.map((todo, index) => (
        <TodoListTask
          tab={tab}
          task={todo.task}
          ind={index}
          todos={todos}
          display={todos[index].id == tab || tab == "All" ? "flex" : "none"}
        />
      ))}
    </ul>
  );
}
