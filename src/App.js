import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

// App (top-level parent) component
export default function App() {

  // example items
  const [items, setItems] = useState([
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' }
  ]);

  // handles adding a new item to the list
  const addItem = (newItemName) => {

    // debug
    console.log("Created!");

    // creates new item with id (hacky) and name
    const newItem = { id: items.length + 1, name: newItemName };
    setItems(prevItems => [...prevItems, newItem]);
  }

  // handles deleting and item from the list
  const deleteItem = (idToDelete) => {

    // debug
    console.log("Deleted!")

    // creates new array of items with everything except the item to delete
    setItems(prevItems => prevItems.filter(item => item.id !== idToDelete));
  }

  // default description text
  const [description, setDescription] = useState("Hello, World!");

  return (
    <>
      <div className='upper'>
        <h1>Item Tracker</h1>
        <Form setDescription={setDescription} onAddItem={addItem} onDeleteItem={deleteItem} />
        <List description={description} items={items} onDeleteItem={deleteItem} />
      </div>
    </>
  );
}
