
import React, {useEffect, useState} from 'react'
import BookItem from './BookItem';

function BookList(props) {
    const books = props.data.results;
    const [favBookData, setFavBookData] = useState();

    const handleAddToFav = (booksFavData) => {
      setFavBookData(booksFavData);
    }

    useEffect(() => {
      
      if (localStorage.getItem('favs') == null) {
        localStorage.setItem('favs', null);
      }
      
      let localFavs = localStorage.getItem('favs');

      if(localFavs != null){
        localFavs = JSON.parse(localFavs);
      }

      let favs = [];

      if(Array.isArray(localFavs) && favBookData != null){
        favs = [...localFavs, favBookData];
      } else if(!Array.isArray(localFavs) && localStorage.getItem('favs') != null && favBookData != null) {
        favs = [localFavs, favBookData];
      } else if (favBookData != null) {
        favs = [favBookData];
      } else if (localStorage.getItem('favs') != null) {
        favs = localFavs;
      }

      favs = JSON.stringify(favs);

      localStorage.setItem('favs', favs);
      console.log(localStorage.getItem('favs'));
    }, [favBookData]);
  return (
    <div className='booklist'>
        {books.map((book) =>
             (<BookItem key={book.id} data={book} onAddToFav={handleAddToFav}/>)
        )}
    </div>
  )
}

export default BookList