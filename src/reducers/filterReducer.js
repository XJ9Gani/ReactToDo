import ToDoList from "../components/ToDoList";
import IsDoneTaskList from "../components/IsDoneTaskList";
import ToDoForm from "../components/ToDoForm";

export default function filterReducer(state = {}, action) {
  switch (action.type) {
    case "AllTasks":
      return { page: <ToDoList /> };
    case "DoneTasks":
      return { page: <IsDoneTaskList /> };
    case "AddTaskForm":
      return { page: <ToDoForm /> };
    default:
      return state;
  }
}
