import React, {useEffect, useState} from 'react';
import classes from "./navigate.module.scss";
import NavigButton from "./navigButton";

const Navigation = ({x}) => {

    const [scroll, setScroll] = useState()
    const [upDown, setUpDown] = useState(false)


    const Words = [
        {id: 0, name: "Demos"},
        {id: 1, name: "Post"},
        {id: 2, name: "Features"},
        {id: 3, name: "Categories"},
        {id: 4, name: "Shop",}];

    useEffect(() => {
        navigation()
        scrolling()
        next()
        // console.log(upDown)
    }, [])

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset;
        setScroll(scrollTop)
    })


    window.onwheel = (e) => setUpDown(e.deltaY < 0);


    const scrolling = () => {
        if (scroll) {
            if (scroll > 199 && upDown === false) {
                // console.log("true")
                return classes.navig;
            } else if (upDown === true) {
                return null
            }
        }
    }

    const navigation = () => {
        if (Words) {
            return Words.map(({id, name}) => {
                return (
                    <>
                        <NavigButton name={name} key={id}/>
                    </>
                )
            })
        }
    }

    const next = () => {
        // console.log(x)
        //     console.log("hi")
            if (x === false) {
                // console.log("yes")
                return classes.navigate
            } else if (x === true) {
                // console.log("no")
                return null
            }
    }

    return (
        <>
            {/*{console.log(x)}*/}
            <nav className={`${classes.navis} ${scrolling()} ${next()}`}>
                {navigation()}
                <div>
                    <li>
                        Buy Now
                    </li>
                </div>
            </nav>
        </>
    );
};

export default Navigation;