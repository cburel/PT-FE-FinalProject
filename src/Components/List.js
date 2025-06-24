import React, { useState } from 'react';
import './Styles.css'

// List component - handles the list of items
export default function List({ description, items, onDeleteItem, onUpdateItem }) {

    // tracks item to edit
    const [itemId, setItemId] = useState(null);
    // hold value of the input field editing the item
    const [itemValue, setItemValue] = useState('');

    // handles updating an item in the list
    const updateItem = (item) => {
        if (itemId === item.id) {
            if (itemValue.trim()) {
                onUpdateItem(item.id, itemValue);
                setItemId(null);
                setItemValue('');
            }
        }
        else {
            setItemId(item.id);
            setItemValue(item.name);
        }
    }

    // renders the list and delete buttons
    const listItems = items.map(item =>
        <li key={item.id}>{item.name} (ID: {item.id})
            <button className="delete-btn" type="button" onClick={() => onDeleteItem(item.id)}>Delete</button>
            <button className="update-btn" type="button" onClick={() => updateItem(item)}>Update</button>
            <input
                className='update-input'
                type="text"
                placeholder="Update item"
                onChange={(event) => setItemValue(event.target.value)}
            />
        </li>
    );

    return (
        <>
            <p>{description}</p>
            <ul>{listItems}</ul>
        </>
    )
}