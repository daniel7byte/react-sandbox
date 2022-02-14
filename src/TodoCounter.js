import React from "react";
import './TodoCounter.css';

function TodoCounter(props) {
  return (
    <h2 className="TodoCounter">Completaste {props.completedItems} tareas de {props.totalItems}, te faltan {props.remainingItems} por completar</h2>
  );
}

export { TodoCounter };