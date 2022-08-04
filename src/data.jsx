import React from 'react';
import classes from "./data.module.scss"

const Data = ({url, id, albumId, title}) => {
    return (
        <>
            <div className={classes.box}>
                <div className={classes.boxIn}>
                    <div className={`${classes.flexCob}`}>
                        <img src={`${url}`} alt="#"/>
                    </div>
                </div>
                <div className={`${classes.textStyle}`}>
                    <div className={`${classes.textPosition}`}>
                        Id: {id}
                    </div>
                    <div className={`${classes.textPosition}`}>
                        AlbumId: {albumId}
                    </div>
                    <div className={`${classes.textPosition}`}>
                        Title: {title}
                    </div>
                </div>
            </div>


        </>
    );
};

export default Data;