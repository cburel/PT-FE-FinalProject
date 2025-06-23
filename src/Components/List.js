import './Styles.css'

// List component - handles the list of items
export default function List({ description, items, onDeleteItem }) {

    // renders the list and delete buttons
    const listItems = items.map(item =>
        <li key={item.id}>{item.name} (ID: {item.id})
            <button className="delete-btn" type="button" onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
    );

    return (
        <>
            <p>{description}</p>
            <ul>{listItems}</ul>
        </>
    )
}