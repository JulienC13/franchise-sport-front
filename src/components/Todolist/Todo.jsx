import React from "react";

export default function Todo({ todo, toggleTodo }) {
  function handletoDoClick() { // affiche l'id de la liste
    toggleTodo(todo.id);
    console.log(todo.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete} //props qui active 'complete'
          onChange={handletoDoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}
