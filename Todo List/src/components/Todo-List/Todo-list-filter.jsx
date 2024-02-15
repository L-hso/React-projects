export default function TodoListFilter({ filterOptionSelected,setSelected }) {
  const WHEN_OPTION_IS_SELECTED = "border-violet-700 text-violet-700";

  return (
    <menu className="*:px-2.5 *:border-b-2 *:transition-all *:duration-500 *:text-[0.95rem] flex gap-5">
      <button
        className={filterOptionSelected=='All' ? WHEN_OPTION_IS_SELECTED:''}
        onClick={() => setSelected('All')}
      >
        All
      </button>
      <button
        className={filterOptionSelected=='Finished' ? WHEN_OPTION_IS_SELECTED:''}
        onClick={() => setSelected('Finished')}
      >
        Finished
      </button>
    </menu>
  );
}
