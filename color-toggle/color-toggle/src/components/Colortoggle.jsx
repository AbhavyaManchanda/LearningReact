import "./mode.css";
import useLocalstorage from "./uselocalstorage";

export default function LightDarkMode() {
    
    const [mode, setMode] = useLocalstorage('mode', 'light');

    function handleToggleTheme() {
        setMode(mode==='light'?'dark':'light');
    }
    console.log(mode);


    // data theme is used to set the theme of the application
    //light and dark are the two themes
    //data theme is from tailwind css
    return (
        <div className="light-dark-mode" data-theme={mode}>
            <div className="container">
                <h1>Light/Dark Mode Toggle</h1>
                <p>Click the button below to toggle between light and dark mode.</p>
                <button onClick={handleToggleTheme}>Toggle Mode</button>
            </div>
            
        </div>
    )
    

}