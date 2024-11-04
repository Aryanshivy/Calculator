import React, { useRef } from "react";

const clickercounter=()=>{
    const counter = useRef(0);
    const displayer = useRef(null);

    const handleClick=()=>{
        countRef.current += 1;
        displayer.current.innerText = countRef
    }
}