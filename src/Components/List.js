import React, { useState } from 'react';
import './Styles.css'

// List component - handles the list of items
export default function List({ description, items, onDeleteItem }) {

    // default update item text
    const [itemValue, setItemValue] = useState("New value");

    // handles updating an item in the list
    const updateItem = (idToUpdate) => {
        // debug
        console.log(`item updated: ${idToUpdate}`);

        // TODO: updates the given item with the new input value
        if (itemValue.trim()) {
            setItemValue(itemValue);
        }

    }

    // renders the list and delete buttons
    const listItems = items.map(item =>
        <li key={item.id}>{item.name} (ID: {item.id})
            <button className="delete-btn" type="button" onClick={() => onDeleteItem(item.id)}>Delete</button>
            <button className="update-btn" type="button" onClick={() => updateItem(item.id)}>Update:</button>
            <input type="text"
                placeholder="Update item"
                onChange={(event) => setItemValue(event.target.value)}>
            </input>
        </li>
    );

    return (
        <>
            <p>{description}</p>
            <ul>{listItems}</ul>
        </>
    )
}