import { TodoList } from "./components/Todo-List/Widget";
import { useState } from "react";

function App() {
  const [optionSelected, setOptionSelected] = useState("All");
  const [listTodos, setListTodos] = useState([], {task:'', id:"All", });


  return (
    <main className="w-[100vw] h-[100vh] bg-gradient-to-b from-violet-300 to-violet-700 sans font-light">
      <TodoList.Root>
        <TodoList.Header todos={listTodos} setTodos={setListTodos} />
        <TodoList.Filter
          setSelected={setOptionSelected}
          filterOptionSelected={optionSelected}
        />
        <TodoList.Tasks tab={optionSelected} todos={listTodos} />
      </TodoList.Root>
    </main>
  );
}

export default App;
