import React, {useState, useEffect} from 'react';

function AddToFav(props) {

    const handleAddToFav = () => {
        const bookCover = props.data.resources.map( (res) => {
            if (res.type == 'image/jpeg') {
                if(res.uri.includes('medium')) {
                    return res.uri;
                }
            }
        }).join("");


        const bookText = props.data.resources.map( (res) => {          
                if(res.uri.includes('.htm')) {
                    return res.uri;
                }
            }).join("");


        const bookFavData = {
            'id': props.data.id,
            'title': props.data.title,
            'description': props.data.description,
            'resources': [bookCover, bookText]
        }

        props.onClickFavs(bookFavData);
    }

    return (
    <a href="#" className="btn btn-primary" onClick={handleAddToFav}><i className="bi bi-star-fill"></i></a>
    )
}

export default AddToFav