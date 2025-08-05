import {useState,useEffect} from 'react';

export default function useLocalstorage(mode, initialMode) {


    //local storage is used to store the mode of the application
    //it is used to persist the mode across page reloads
    //the useLocalstorage hook is used to manage the mode state
    //we get local storage item by key
    //if the item is not present in local storage, we set it to initial value
    //we use JSON.parse to parse the value from local storage
    //we use JSON.stringify to store the value in local storage
    //we get local storage from colortoggle.jsx file - which gives us the mode of the application
    //this mode is used here... and we set the mode in local storage

    
    const [value, setValue] = useState(() => {
        let currentMode;

        try {
            currentMode = JSON.parse(localStorage.getItem(mode) || String(initialMode));
            
        } catch (error) {
            console.log(error);
            currentMode = initialMode;
        }
        return currentMode;
    });

    useEffect(() => {
        localStorage.setItem(mode, JSON.stringify(value));
    }, [mode, value]);
    
    return [value, setValue];
}

// This custom hook allows you to use local storage in your components.
// It takes a key and an initial value as arguments.
// It returns the current value and a function to update the value.
// The value is stored in local storage and is persisted across page reloads.
// It also handles JSON parsing and stringifying for the value.
//it is working as in the colortoggle.jsx file we are using this hook to set the mode of the application
// The mode is either 'light' or 'dark', and it is stored in local storage