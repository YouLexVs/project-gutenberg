import React from 'react'

function BookItem(props) {
    const bookData = props.data;

    const bookCover = bookData.resources.map( (res) => {
        if (res.type == 'image/jpeg') {
            if(res.uri.includes('medium')) {
                return res.uri;
            }
        }
        return null;
    }).join("");
  return (
    <div className='card mb-3 shadow-sm bg-white rounded'>
        <div className='row no-gutters'>
            <div className='col-md-2'>
                <img src={bookCover} className='img-fluid' />
            </div>  
            <div className='col-md-10'>
                <div className='card-body'>
                    <h5 className='card-title'>{bookData.title}</h5>
                    <h6 className='card-text'>{bookData.description}</h6>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default BookItem