import React from 'react';
import ctr from "../png/ctr.png"
// import  "./navigate.module.scss"
import classes from "./underMine.module.css";

const Case = ({number}) => {
    return (
        <button className={`${classes.case}`}>
            {number} <img src={ctr} alt="#"/>
        </button>
    );
};

export default Case;