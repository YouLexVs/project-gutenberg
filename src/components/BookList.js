
import React from 'react'
import BookItem from './BookItem';

function BookList(props) {
    const books = props.data.results;
  return (
    <div className='booklist'>
        {books.map((book) =>
             (<BookItem key={book.id} data={book} />)
        )}
    </div>
  )
}

export default BookList