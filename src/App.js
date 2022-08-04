import React, {useEffect, useState} from "react";
import classes from './App.module.scss';
import lupa from './png/pngwing.com.png'
import Navigation from "./head/navigation";
import PhotoAlbum from "./photoAlbum";

function App() {
    const [isOpen, setOpen] = useState("false")

    useEffect(()=>{
        x()
    })

    const handleToggle = () => {
        setOpen((visible)=>!visible);
    }
    const x = () =>{
        if(isOpen===false){
            return false
        }else if (isOpen===true){
            return true
        }
    }

    return (
        <>
            {/*{console.log(x)}*/}
            <div className={classes.head}>
                <div onClick={handleToggle} className={`${classes.burger} ${(!isOpen && classes.Open)}`}>
                    <span></span>
                </div>
                <div className={`${classes.title}`}>
                    Logotype
                </div>
                <form className={`${classes.form}`} /*onSubmit={}*/>
                    <input className={`${classes.input}`} type="text"/>
                    <button className={`${classes.lupa}`} type="submit">
                        <img srcSet={lupa} alt="#"/>
                    </button>
                </form>
            </div>
            <hr/>
            <Navigation x={x()} handleToggle={handleToggle}/>
            <PhotoAlbum/>
        </>
    );
}

export default App;
