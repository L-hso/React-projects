import { ListPlus } from "lucide-react";
import { useState } from "react";

export default function TodoListHeader({ todos, setTodos }) {
  const [actualTask, setActualTask] = useState({
    task: "",
    id: "All",
    finished: false,
    finishedAttribute() {
      const [isFinished, setIsFinished] = useState(false);
      setIsFinished(isFinished == false);
      this.finished = isFinished;
    },
  });

  return (
    <header className="w-[100%] py-5 relative">
      <input
        type="text"
        id="input"
        className="h-11 pl-4 text-[0.85rem] outline-none focus:placeholder:invisible w-[100%] border-[#999] border-[1px] rounded-2xl"
        placeholder="Add a new task"
        value={actualTask.task}
        onChange={(e) => {
          setActualTask({ task: e.target.value, id: "All", finished: false });
        }}
      />

      <button
        className="absolute top-[50%] right-[1rem] translate-y-[-50%]"
        onClick={() => {
          actualTask.task.split("").join("") != "" &&
            setTodos([...todos, actualTask]);

          setActualTask({ ...actualTask, task: "", id: "All" });
        }}
      >
        <ListPlus className="text-gray-500 hover:text-violet-700" size="25" />
      </button>
    </header>
  );
}
