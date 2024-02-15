export default function TodoListTask({task, ind, finished, confirmFinish}){
  return (
    <li key={ind} className={finished?'bg-red-500':'bg-blue-500'}>
      <label>
        <input type="checkbox" onChange={confirmFinish()}/>
        {task}
      </label>
    </li>
  )
  
}