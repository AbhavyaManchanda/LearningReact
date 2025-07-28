import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentlabel) {
        setDisplayCurrentChildren({...displayCurrentChildren,
            [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
        });
    }

    console.log(displayCurrentChildren);

    return (
    <li>
    <div className="menu-item">
        <p>{item.label}</p>
        
        {item && item.children && item.children.length ? (
        
            <span onClick={() => handleToggleChildren(item.label)}>
                    
            {displayCurrentChildren[item.label] ? (
            <FaMinus color="#fff" size={25} />
            ) : (
            <FaPlus color="#fff" size={25} />
            )}
            </span>
                
            ) : null}
              {/* this is the menu item with children */}
    </div>
            {/* this is giving ki agr + hai to aage aur - hai to peeche and vo handle toggle children me likha hai  */}

    {item &&
    item.children &&
    item.children.length > 0 && displayCurrentChildren[item.label]
        ? ( <MenuList list={item.children} /> )
        : null}
            
        
    </li>
        //in this we are checking if the item has children and if the children are displayed . and then we are rendering the menu list component with the children of the current item depending upon the state of the children of the current item.
        
    );
}
