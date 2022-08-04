import React, {useEffect, useState} from 'react';
import axios from "axios";
import Data from "./data";
import classes from "./data.module.scss"

const PhotoAlbum = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(()=>{
        // console.log('Что-то');
        postList();
        album()
    },[])

    async function postList (limit= 18, page= 1){
        const response =await axios.get("https://jsonplaceholder.typicode.com/photos", {
            params:{
                _limit: limit,
                _page: page
            }
        })
        // console.log(response.data)
        setPhotos(response.data)
    }

    const album = () => {
        if (photos){
            let set = photos;
            return set.map(({albumId, id, thumbnailUrl, title, url})=>{
                return(
                    <>
                        <Data key={id} url={url} title={title} id={id} albumId={albumId}/>
                    </>
                )
            })
        }
    }

    return (
        <>
            <div className={`${classes.flexStyle}`}>
            {album()}
            </div>
        </>
    );
};

export default PhotoAlbum;