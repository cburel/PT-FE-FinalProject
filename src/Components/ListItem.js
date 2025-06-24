import React, { useState } from "react";
import './Styles.css'

// ListItem component - handles updating individual list items
export default function ListItem({ item, onDelete, onUpdate }) {

    // tracks whether we are currently updating an item
    const [updating, setUpdating] = useState(false);
    // tracks updating the item name
    const [updatedName, setUpdatedName] = useState(item.name);

    // handles item name update
    const handleUpdateItem = () => {
        if (updating) {
            onUpdate(item.id, updatedName); // pass ID and new name to parent
            setUpdating(false); // exit update mode after update
        } else {
            setUpdating(true); // enter update mode to show input
        }
    };

    // handles onchange
    const handleInputChange = (event) => {
        setUpdatedName(event.target.value);
    };

    // renders update field, update button, delete button
    return (
        <li>
            <input
                type="text"
                value={updatedName}
                onChange={handleInputChange}
                className="update-input"
            />
            {item.name} (ID: {item.id})
            <button className="update-btn" type="button" onClick={handleUpdateItem}>
                Update
            </button>
            <button className="delete-btn" type="button" onClick={() => onDelete(item.id)}>
                Delete
            </button>
        </li>
    );
}
