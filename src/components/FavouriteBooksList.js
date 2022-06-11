import React, { useState, useEffect } from 'react'
import FavouriteBookItem from './FavouriteBookItem';

function FavouriteBooksList() {
    let favsList = [];
    let keys = Object.keys(localStorage);
    const [update, setUpdate] = useState(false)
    
    if(keys.length > 0) {
        keys.forEach(el => {
            favsList.push(JSON.parse(localStorage.getItem(el)))
        });
    }

    const handleDelete = (id) => {
        localStorage.removeItem(id);
        setUpdate(!update);
    }
    return (
    <div className='favBooks'>
        <div className='d-none'>{update}</div>
        {keys.length != 0 ? favsList.map((book) => (<FavouriteBookItem key={book.id} data={book} onDelete={handleDelete}/>)) : <div className="alert alert-primary" role="alert">You have no favourite books yet.</div>}
    </div>
    )
}

export default FavouriteBooksList