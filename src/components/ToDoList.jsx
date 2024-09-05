import { useReducer } from 'react';
import { useToDo } from '../context/context';
import { useEffect } from 'react';
import todoActionReducer from '../reducers/todoActionReducer';

export default function ToDoList() {
  const { todos, updateTodos } = useToDo();
  const [state, dispatch] = useReducer(todoActionReducer, todos);

  const handleDelete = (id) => {
    dispatch({ type: 'delete', payload: id });
  };

  const handleToggleStatus = (id) => {
    dispatch({ type: 'done', payload: id });
  };

  const handleUpdateTitle = (id) => {
    const newTitle = prompt("Enter new title:");
    if (newTitle) {
      dispatch({ type: 'update', payload: { id, title: newTitle } });
    }
  };


  useEffect(() => {
    updateTodos(state);
  }, [state, updateTodos]);

  return (
    <>
      <h1 className='component__title'>ToDo List</h1>
      <ul className='todo__container'>
        {state.map((todo) => (
          <li key={todo.id} className={todo.status ? 'todo__item done' : 'todo__item todo'}>
            <h1 className='todo__item--title'>{todo.title}</h1>
            <button
              onClick={() => handleDelete(todo.id)}
              className={todo.status ? 'todo__item--delete hidden' : 'todo__item--delete'}
            >
              x
            </button>
            <button
              onClick={() => handleToggleStatus(todo.id)}
              className='todo__item--done'
            >
              ✓
            </button>
            <button
              onClick={() => handleUpdateTitle(todo.id)}
              className={todo.status ? 'todo__item--update hidden' : 'todo__item--update'}
            >
              ✎
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
