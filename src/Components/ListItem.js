import React, { useState } from "react";
import './Styles.css'

// ListItem component - handles updating individual list items
export default function ListItem({ item, onDelete, onUpdate }) {

    // tracks updating the item name
    const [updatedName, setUpdatedName] = useState(item.name);

    // handles item name update
    const handleUpdateItem = () => {
        onUpdate(item.id, updatedName);
    };

    // renders update field, update button, delete button
    return (
        <li>
            <input
                type="text"
                placeholder="Update value"
                onChange={(event => setUpdatedName(event.target.value))}
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
