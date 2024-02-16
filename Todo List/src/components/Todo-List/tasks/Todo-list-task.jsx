import { Trash2 } from "lucide-react";

export default function TodoListTask({ task, ind }) {
  return (
    <li key={ind} className={"p-3.5 w-[100%] rounded-xl border-zinc-400 border-[.05rem] flex justify-between bg-white"}>
      <label className="flex items-center text-[.90rem] gap-2">
        <input
          type="checkbox"
          className="rounded w-4 h-4"
          onChange={(e) => {
            const task_li = e.target.parentNode.parentNode;
            task_li.classList.toggle("All");

            const task_label = e.target.parentNode;

            task_label.classList.toggle("line-through");
            task_label.classList.toggle("text-gray-400");
          }}
        />
        {task}
      </label>
      <button className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-trash-2 hover:text-violet-700"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
      </button>
    </li>
  );
}
