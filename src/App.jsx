// App.js
import './style/style.css';
import Filter from './components/Filter';
import { ToDoProvider } from './context/context';

export default function App() {
  return (
    <ToDoProvider>
      <Filter />
    </ToDoProvider>
  );
}
