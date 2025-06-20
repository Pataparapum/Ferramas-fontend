import { useState } from "react";

export const useLocalStorage = (key:any, initialValue:any) => {
    const [storedValue, setStoredValue ] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;

        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value:any) => {
        try {
            const valueTOStore = 
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueTOStore);
            window.localStorage.setItem(key, JSON.stringify(valueTOStore));
        } catch (error) {
            console.log(error);

        }
    };
    return [storedValue, setValue]
}