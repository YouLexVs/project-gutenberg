import React, {useState} from 'react'

function SearchEngine(props) {
    const [searchBarText, setSearchText] = useState('');
    const handleClick = () => {
        props.onClick(searchBarText);
    }

    const handleSearchText = (Event) => {
        setSearchText(Event.target.value);
    }

    return (
    <div className="d-flex justify-content-start mt-3 mb-3">
        <input className="form-control w-50" type="text" onChange={handleSearchText} placeholder="Search book..." aria-label="default input example" />
        <button type="button" className="btn btn-primary" onClick={handleClick}>Search</button>
    </div>     
  )
}

export default SearchEngine