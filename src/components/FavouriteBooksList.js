import React from 'react'
import FavouriteBookItem from './FavouriteBookItem';

function FavouriteBooksList() {
    let favsList = localStorage.getItem('favs');
    let isAny = true;

    if(favsList != null) {
        favsList = JSON.parse(favsList);
    } else {
        isAny = false;
    }

    return (
    <div className='favBooks'>
        {isAny && favsList.map((book) => (<FavouriteBookItem key={book.id} data={book}/>))}
    </div>
    )
}

export default FavouriteBooksList