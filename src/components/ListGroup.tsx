import { useState } from "react";

//We need a input to pass the items = [], and the heading = string
//interface is the shape or the 'interface' of an object
interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props){

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    //arr[0] // variable (selectedIndex)
    //arr[1] // updater function

    const message = items.length === 0 ? <p>No item found</p> : null;
    //A technique that some developers use are items.length === 0 && <p>No item found</p>
    //Because when a true value check with something, always will be the value (the <p> in this case), when the first are false always will be false

    return (
        <>
            <h1>{ heading }</h1>
            { message }
            <ul className="list-group">
                { items.map((item, index) => (
                    <li 
                        className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' }
                        key={ item }
                        onClick={() => {
                            setSelectedIndex(index); 
                            onSelectItem(item);
                        }}
                    >
                        {item } 
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;