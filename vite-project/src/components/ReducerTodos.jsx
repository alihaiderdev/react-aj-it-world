import { useReducer, useRef, useState } from "react";
import { actionTypes } from "../constants";

// const initialState = {
//   todos: [
//     {
//       id: 1,
//       title: "Todo 1",
//       complete: false,
//     },
//     {
//       id: 2,
//       title: "Todo 2",
//       complete: false,
//     },
//   ],
//   isLoading: false,
//   error: ""
// };

export const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  console.log(state, action, "state, action");
  switch (action.type) {
    // case "COMPLETE":
    case actionTypes.COMPLETE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case actionTypes.ADD_TODO:
      // return state.push(action.todo);
      return [...state, action.todo];
    // case "EDIT":
    //   return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

export function ReducerTodos() {
  // const [todos, setTodos] = useState(initialState.todos);
  const todoInputRef = useRef(null);
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    // dispatch({ type: "COMPLETE", id: todo.id });
    dispatch({ type: actionTypes.COMPLETE_TODO, id: todo.id });
  };

  const createTodo = (event) => {
    event.preventDefault();
    const todo = { id: Date.now(), title: todoInputRef.current.value, complete: false };
    // console.log(todo, "todo");
    dispatch({ type: actionTypes.ADD_TODO, todo: todo });
  }

  const handleDelete = (todoId) => {
    dispatch({ type: "DELETE", id: todoId });
  };

  // const handleComplete = (todo) => {
  //   setTodos((previousTodos) => {
  //     const modifiedTodos = previousTodos.map((item) => {
  //       if (item.id === todo.id) {
  //         return { ...item, complete: !item.complete };
  //       } else {
  //         return item;
  //       }
  //     });
  //     console.log(modifiedTodos, "modifiedTodos");
  //     return modifiedTodos;
  //   });
  // };


  console.log("todos", todos);

  return (
    <>
      <form onSubmit={createTodo}>
        <input type="text" ref={todoInputRef} placeholder="Enter your todo title" className="border-green-500 border-2" /> <button className="bg-green-500 p-1">Add Todo</button>
      </form>
      {todos.map((todo) => {
        console.log("todo", todo);
        return (
          <div key={todo.id} className="py-2">
            <button className="bg-red-400 p-1" onClick={() => handleDelete(todo.id)}>Delete</button>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
            </label>
          </div>
        )
      })}
    </>
  );
}