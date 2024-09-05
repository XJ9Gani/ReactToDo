import { useState } from 'react';
import { useToDo } from '../context/context';

export default function ToDoForm() {
  const [title, setTitle] = useState('');
  const { todos, updateTodos } = useToDo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTodo = {
        id: Date.now().toString(),
        title,
        status: false
      };
      updateTodos([...todos, newTodo]);
      setTitle('');
      alert('Задание Добавлено')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter task title" 
        className='add__task--input'
      />
      <button type="submit" className='add__task--btn'>Добавить Здание</button>
    </form>
  );
}
