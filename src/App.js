import React, { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoItem } from "./CreateTodoItem";
import { TodoItem } from "./TodoItem";

const defaultItems = [
  {
    text: "Learn React",
    completed: true
  },
  {
    text: "Learn Redux",
    completed: false
  },
  {
    text: "Learn Next.js",
    completed: false
  },
  {
    text: "Learn GraphQL",
    completed: false
  }
];

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState(defaultItems);

  const totalItems = items.length;
  const completedItems = items.filter(item => item.completed).length;
  const remainingItems = totalItems - completedItems;

  let searchedItems = [];

  if (!searchValue.length >= 1) {
    searchedItems = items;
  } else {
    searchedItems = items.filter(item => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

  return (
    <React.Fragment>
      <TodoCounter
        completedItems={completedItems}
        remainingItems={remainingItems}
        totalItems={totalItems}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {
          searchedItems.map(
            (item, index) => (
              <TodoItem key={index} text={item.text} completed={item.completed} />
            )
          )
        }
      </TodoList>
      <CreateTodoItem />
    </React.Fragment>
  );
}

export default App;
