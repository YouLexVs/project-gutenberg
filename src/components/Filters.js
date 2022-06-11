import React, {useState} from 'react'

function Filters(props) {
    const [toggleFilters, setToggleFilters] = useState(false);
    const [languageText, setLanguageText] = useState('');
    const [bookshelfText, setBookshelfText] = useState('');

    const handleToggleFilters = () => {
        setToggleFilters(!toggleFilters);
    }

    const handleLanguageText = (Event) => {
        setLanguageText(Event.target.value);
    }
    
    const handleBookshelfText = (Event) => {
        setBookshelfText(Event.target.value);
    }

    const handleFiltersClick = () => {
        const url = '&languages=' + languageText + '&has_bookshelf=' + bookshelfText;
        props.onFilter(url);
    }

    return (
        <>
            <button type="button" className="btn btn-primary mb-3 " onClick={handleToggleFilters}>Filters</button>
            {toggleFilters && <div className="d-flex justify-content-between mb-3">
                <div className="d-flex justify-content-start">
                    <input className="form-control w-50 mr-3" type="text" onChange={handleLanguageText} placeholder="Language..." aria-label="language" />
                    <input className="form-control w-50 mr-3" type="text" onChange={handleBookshelfText} placeholder="Bookshelf..." aria-label="bookshelf" />
                </div>
                <button type="button" className="btn btn-primary pl-3 pr-3" onClick={handleFiltersClick}>Filter</button>
            </div>}
        </>       
    )
}

export default Filters