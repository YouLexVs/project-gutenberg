import React, {useState} from 'react'

function SearchEngine(props) {
    const [searchBarText, setSearchText] = useState('');
    const handleClick = () => {
        props.onClick(searchBarText);
    }

    const handleSearchText = (Event) => {
        setSearchText(Event.target.value);
    }

    const handleFavsClick = () => {
        props.onFavsToggle();
    }

    return (
    <div className="d-flex justify-content-between mt-3 mb-3">
        <div className="d-flex justify-content-start search-bar">
            <input className="form-control" type="text" onChange={handleSearchText} placeholder="Search book..." aria-label="search" />
            <button type="button" className="btn btn-primary" onClick={handleClick}>Search</button>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleFavsClick}>Favourites <i className="bi bi-star-fill"></i></button>
    </div>     
  )
}

export default SearchEngine