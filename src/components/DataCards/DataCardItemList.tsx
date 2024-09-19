import React, { useState } from 'react';

interface Item {
    id: number;
    name: string;
    amount: number;
}

const DataCardItemList: React.FC = () => {
    const [items] = useState<Item[]>([
        { id: 1, name: 'Item 1', amount: 200 },
        { id: 2, name: 'Item 2', amount: 100 },
        { id: 3, name: 'Item 3', amount: 15 },
    ]);

    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const handleMouseEnter = (id: number) => {
        setHoveredItem(id);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleDelete = (id: number) => {
        console.log(`Delete item with id: ${id}`);
        // Lisää logiikka itemin poistamiseen
    };

    const handleEdit = (id: number) => {
        console.log(`Edit item with id: ${id}`);
        // Lisää logiikka itemin muokkaamiseen
    };

    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.id}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative', padding: '10px', border: '1px solid #ccc', margin: '5px 0' }}
                >
                    <h4>{item.name}</h4>
                    <p>{item.amount}€</p>
                    {hoveredItem === item.id && (
                        <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
                            <button onClick={() => handleEdit(item.id)}>Edit</button>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DataCardItemList;
