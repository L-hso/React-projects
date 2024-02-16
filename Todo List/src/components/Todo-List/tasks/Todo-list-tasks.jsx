import TodoListTask from "./Todo-list-task";

export default function TodoListTasks({ todos, tab }) {
  console.log(todos);

  return (
    <ul className="py-4 w-[100%] max-h-[75%] overflow-y-scroll no-scrollbar flex flex-col gap-3">
      {todos.map((todo, index) => (
        <TodoListTask
          task={todo.task}
          ind={index}
        />
      ))}
    </ul>
  );
}
