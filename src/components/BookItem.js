import React from 'react'
import AddToFav from './AddToFav';

function BookItem(props) {
    const bookData = props.data;

    let fav = false;

    const bookCover = bookData.resources.map( (res) => {
        if (res.type == 'image/jpeg') {
            if(res.uri.includes('medium')) {
                return res.uri;
            }
        }
        return null;
    }).join("");

    const bookContent = props.data.resources.map( (res) => {          
        if(res.uri.includes('.htm')) {
            return res.uri;
        }
    }).join("");

    const handleFavsClick = (booksFavData) => {
        props.onAddToFav(booksFavData);
        fav = true;
    }

    const handleClickItem = () => {
        if (!fav) {
            window.open(bookContent, '_blank');
        }
    }   

  return (
    <div className='card mb-3 shadow-sm bg-white rounded' onClick={handleClickItem}>
        <div className='row no-gutters'>
            <div className='col-md-2'>
                <img src={bookCover} className='img-fluid' />
            </div>  
            <div className='col-md-10'>
                <div className='card-body'>
                    <h5 className='card-title d-flex justify-content-between'>
                        {bookData.title}
                        <AddToFav data={bookData} onClickFavs={handleFavsClick} />
                    </h5>
                    <h6 className='card-text'>{bookData.description}</h6>                   
                </div>
            </div>
        </div>        
    </div>
  )
}

export default BookItem