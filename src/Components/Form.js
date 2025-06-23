import React, { use, useState } from "react";
import './Styles.css'

// Form component - handles the create/update form
export default function Form({ setDescription, onAddItem }) {

    // uses empty string by default
    const [descriptionValue, setDescriptionValue] = useState('');

    // handles updating the description
    const handleSubmit = (event) => {

        // prevent refreshing the screen
        event.preventDefault();

        // if the input value is not blank, set the new description
        if (descriptionValue.trim()) {
            setDescription(descriptionValue);
        }
    }

    // uses empty string by default
    const [inputValue, setInputValue] = useState('');

    // handles adding an item to the list
    const handleAddItem = () => {

        // if the input value is not blank, add the item
        if (inputValue.trim()) {
            onAddItem(inputValue);
        }
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Create an item"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button className="create-btn" type="button" onClick={handleAddItem}>Create</button>

            <p></p>
            <input
                type="text"
                placeholder="Update description"
                onChange={(event) => setDescriptionValue(event.target.value)}
            />
            <button className="update-btn" onClick={handleSubmit}>Update</button>
        </form>
    )
}