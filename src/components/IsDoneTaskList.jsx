import { useToDo } from '../context/context';

export default function IsDoneTaskList() {
  const { todos } = useToDo();
  
  // Filter completed tasks
  const completedTasks = todos.filter(todo => todo.status);

  return (
    <>
      <h1 className='component__title'>Выполненные Задачи</h1>
      <ul className='todo__container'>
        {completedTasks.length > 0 ? (
          completedTasks.map((todo) => (
            <li key={todo.id} className='todo__item done'>
              <h1 className='todo__item--title'>{todo.title}</h1>
            </li>
          ))
        ) : (
          <p>No completed tasks</p>
        )}
      </ul>
    </>
  );
}
