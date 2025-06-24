import React, { useState } from "react";
import './Styles.css'

// ListItem component - handles updating individual list items
export default function ListItem({ item, onDelete, onUpdate }) {

    const [updating, setUpdating] = useState(false);
    const [updatedName, setUpdatedName] = useState(item.name);

    const handleUpdateClick = () => {
        if (updating) {
            onUpdate(item.id, updatedName); // Pass ID and new name to parent
            setUpdating(false); // Exit edit mode after update
        } else {
            setUpdating(true); // Enter edit mode to show input
        }
    };

    const handleInputChange = (event) => {
        setUpdatedName(event.target.value);
    };

    return (

        <li>
            <input
                type="text"
                value={updatedName}
                onChange={handleInputChange}
                className="update-input"
            />
            {item.name} (ID: {item.id})
            )
            <button className="update-btn" type="button" onClick={handleUpdateClick}>
                Update
            </button>
            <button className="delete-btn" type="button" onClick={() => onDelete(item.id)}>
                Delete
            </button>
        </li>
    );
}
