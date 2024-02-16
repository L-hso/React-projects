import TodoListTask from "./Todo-list-task";

export default function TodoListTasks({ todos, tab }) {
  console.log(todos);

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoListTask
          task={todo.task}
          ind={index}
        />
      ))}
    </ul>
  );
}
