import React from 'react'

function FavouriteBookItem(props) {
    const bookData = props.data;
    console.log(bookData);


    return (
    <div className='card mb-3 shadow-sm bg-white rounded'>
        <div className='row no-gutters'>
            <div className='col-md-2'>
                <img src={bookData.resources[0]} className='img-fluid' />
            </div>  
            <div className='col-md-10'>
                <div className='card-body'>
                    <h5 className='card-title d-flex justify-content-between'>
                        {bookData.title}
                    </h5>
                    <h6 className='card-text'>{bookData.description}</h6>             
                </div>
            </div>
        </div>        
    </div>
)
}

export default FavouriteBookItem