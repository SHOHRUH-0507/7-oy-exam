import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash} from "react-icons/fa";

function Todo() {
     const [list, setList] = useState("");
                const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
        const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    }        catch (error) {
        // console.error("error localStorage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {


    //   console.error("error localStorage:", error);
    }
  }, [todos]);

  const addList = () => {


    if (list.trim() === "") return;
    setTodos((prev) => [...prev, { id: Date.now(), text: list }]);

    setList("");

  };

  const deleteList = (id) => {

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addList();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-30 mb-67 text-white">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={list}
          onChange={(e) => setList(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="TODO kiriting"
          className="px-4 py-2 rounded-md border border-gray-600"
        />
        <button
          onClick={addList}
          className="p-3 rounded-md bg-blue-500 hover:bg-blue-600 shadow-md transition"
        >
          <FaPlus />
        </button>
      </div>

      <ul className="w-full max-w-sm">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-800 rounded p-2 mb-2"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => deleteList(todo.id)}
              className="text-red-400"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
