import { useState } from "react";

function useLocalStorage( key , initialValue){

    const stored = localStorage.getItem(key);

    initialValue = stored ? JSON.parse(localStorage.getItem(key)):initialValue;

    const [ value , setValue ] = useState(initialValue);

    function updateValue(value){
        localStorage.setItem(key,JSON.stringify(value));
        setValue(value);
    }


    window.addEventListener("storage", (event)=>{
        setValue(JSON.parse(event.newValue));
        
    })


    return [value , updateValue];


}


export default useLocalStorage;