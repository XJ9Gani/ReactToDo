export default function todoActionReducer(state = [], action) {
  switch (action.type) {
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    case "done":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, status: !todo.status } : todo
      );

    case "update":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );

    default:
      return state;
  }
}
