function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span>
        <input type="checkbox" checked={props.completed} />
      </span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  )
}

export { TodoItem };