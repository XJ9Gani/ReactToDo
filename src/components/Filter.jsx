import { useReducer } from 'react';
import filterReducer from '../reducers/filterReducer';

export default function Filter() {
  const initState = { page: <div>Your Task Management App</div> };
  const [state, dispatch] = useReducer(filterReducer, initState);

  const showAllTask = () => dispatch({ type: 'AllTasks' });
  const showDoneTasks = () => dispatch({ type: 'DoneTasks' });
  const addTask = () => dispatch({ type: 'AddTaskForm' });

  return (
    <>
      <section className="filter">
        <button onClick={showAllTask} className="filter__all--btn">Show All</button>
        <button onClick={showDoneTasks} className="filter__done--btn">Show Done Tasks</button>
        <button onClick={addTask} className="filter__add--btn">Add Task Form</button>
      </section>

      <div>{state.page}</div>
    </>
  );
}
