function CreateTodoItem() {

  const onClickHandler = () => {
    console.log('clic')
  }

  return (
    <div className="todo-item">
      <input type="text" placeholder="Enter a new todo item" />
      <button type="submit" onClick={onClickHandler}>Add</button>
    </div>
  )
}

export { CreateTodoItem };