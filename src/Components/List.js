import React, { useState } from 'react';
import './Styles.css'
import ListItem from './ListItem';

// List component - handles rendering the list of items
export default function List({ items, onDeleteItem, onUpdateItem }) {
    return (
        <ul>
            {items.map(item => (
                <ListItem
                    key={item.id}
                    item={item}
                    onDelete={onDeleteItem}
                    onUpdate={onUpdateItem}
                />
            ))}
        </ul>
    );
}