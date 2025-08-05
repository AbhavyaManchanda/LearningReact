import {useState,useEffect} from 'react';

export default function useLocalstorage(key, initialValue) {


    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(initialValue));
            
        } catch (error) {
            console.log(error);
            currentValue = initialValue;
        }
        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
}