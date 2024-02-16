export default function TodoListTask({task, ind}){
  return (
    <li key={ind} className={'bg-blue-500'}>
      <label>
        <input type="checkbox" onChange={e=>e.target.parentNode.parentNode.classList.toggle('All'}/>
        {task}
      </label>
    </li>
  )
  
}