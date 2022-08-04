import React, {useEffect, useState} from 'react';
import classes from "./navigate.module.scss";

import ctr from "../png/ctr.png";
import Case from "./case";

const NavigButton = ({name}) => {
    const [active, setActive] = useState('false')
    const click = () => {
        setActive((visible) => !visible);
    }


    useEffect(()=>{
        open()
    },[])

    const subcategories = [
        {id: 0, number: `${name} Part 1`},
        {id: 1, number: `${name} Part 1`},
        {id: 2, number: `${name} Part 1`},
        {id: 3, number: `${name} Part 1`}
    ]

    const open = () => {
        if (subcategories) {
            return subcategories.map(({id, number}) => {
                // console.log(number)
                return (
                    <>
                        <Case key={id} number={number}/>
                    </>
                )
            })
        }
    }

    return (
        <>
            <div>
                <button onClick={click} className={`${classes.ctr} ${!active && classes.Active}`}>
                    {name}
                    <img srcSet={ctr} alt="#"/>
                </button>
                <div className={`${classes.ch}`}>
                    {
                        !active &&
                        (
                            <div>
                                {open()}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default NavigButton;