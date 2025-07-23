import React, { useState ,useEffect} from 'react';


export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('black');

    function handleCreateRandomHexColor() { 
        const hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * hex.length);
            hexColor += hex[randomIndex];
        }
        setColor(hexColor);
        setTypeOfColor('hex');
        console.log(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor(`rgb(${r}, ${g}, ${b})`);
        setTypeOfColor('rgb');
        console.log(`rgb(${r}, ${g}, ${b})`);
    }
    
    useEffect(() => {
        if(typeOfColor === 'hex') {
            handleCreateRandomHexColor();
        }else if(typeOfColor === 'rgb') {
            handleCreateRandomRgbColor();
        }
        
    },[typeOfColor])

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            // display: 'flex',
            backgroundColor: color,
        }} className="container">
            <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
            <button onClick={()=> setTypeOfColor('rgb')}>Create RGB color</button>
            <button onClick={typeOfColor === 'hex' ?
                handleCreateRandomHexColor :
                handleCreateRandomRgbColor}>
                Generate Random Color
            </button>

            <div className="display">
                <h1>Random Color Generator</h1>
                <h3>Color:{color}</h3>
                <h2>Type:{typeOfColor==='rgb'?"rgb":"hex"}</h2>
            </div>
        </div>
    )
}