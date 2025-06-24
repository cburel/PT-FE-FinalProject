import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import ListItem from './Components/ListItem';

// App (top-level parent) component
export default function App() {

  // example items
  const [items, setItems] = useState([
    { id: 1, name: 'Bananas' },
    { id: 2, name: 'Oranges' },
    { id: 3, name: 'Lettuce' }
  ]);

  // handles adding a new item to the list
  const addItem = (newItemName) => {

    // creates new item with id (hacky) and name
    const newItem = { id: items.length + 1, name: newItemName };
    setItems(prevItems =>
      [...prevItems, newItem]);
  }

  // handles deleting and item from the list
  const deleteItem = (idToDelete) => {

    // creates new array of items with everything except the item to delete
    setItems(prevItems =>
      prevItems.filter(item => item.id !== idToDelete));
  }

  // default description text
  const [description, setDescription] = useState("Hello, World! Maybe this is a grocery list?");

  // handles updating an existing item in the list
  const updateItem = (idToUpdate, newName) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === idToUpdate ? { ...item, name: newName } : item
      )
    );
  };


  return (
    <>
      <div className='upper'>
        <h1>To-Do List</h1>
        <Form setDescription={setDescription} onAddItem={addItem} />
        <List description={description} items={items} onDeleteItem={deleteItem} onUpdateItem={updateItem} />
      </div>
    </>
  );
}
