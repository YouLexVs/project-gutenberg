
import React, {useEffect, useState} from 'react'
import BookItem from './BookItem';

function BookList(props) {
    const books = props.data.results;
    const [favBookData, setFavBookData] = useState();
    const [bookUrl, setBookUrl] = useState('');

    const handleAddToFav = (booksFavData) => {
      setFavBookData(booksFavData);
    }

    useEffect(() => {
      let favs;

      if(favBookData != undefined) {
          favs = JSON.stringify(favBookData);
  
          localStorage.setItem(favBookData.id, favs);
        }
    
    }, [favBookData]);


  return (
    <div className='booklist'>      
        {books.map((book) =>
             (<BookItem key={book.id} data={book} onAddToFav={handleAddToFav} />)
        )}
    </div>
  ) 
}

export default BookList