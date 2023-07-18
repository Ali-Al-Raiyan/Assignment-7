import React from "react";
import { useState } from "react";

const Todo = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setitems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter an Item.");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setitems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setitems(newArray);
  }

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button onClick={() => deleteItem(item.id)}>Delete Item</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
