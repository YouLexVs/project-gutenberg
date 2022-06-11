import React, { useState , useEffect } from 'react';
import './App.css';
import './components/BookList'
import BookList from './components/BookList';
import Pagination from './components/Pagination';
import SearchEngine from './components/SearchEngine';
import Loading from './components/Loading';
import Error from './components/Error';
import FavouriteBooksList from './components/FavouriteBooksList';
import Filters from './components/Filters';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('https://gnikdroy.pythonanywhere.com/api/book/?format=json&page=1')
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState('');
  const [favList, setFavList] = useState(false);

  const getData = async (url) => {
    try {
      const res = await fetch(url);      
      if (!res.ok) {         
        throw new Error(
          'HTTP error: status is ${res.status}'
        )
      }
      let data = await res.json();
      setData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  

  useEffect(() => {
    changeHandle(1);
  }, [searchText, filters])

  const changeHandle = (page) => {
    let newUrl = '';
    setLoading(true);
    setData(null);
    setCurrentPage(page);
    newUrl = 'https://gnikdroy.pythonanywhere.com/api/book/?format=json&page=' + page + '&search=' + searchText + filters;

    getData(newUrl);
  }

  const searchBooks = (search) => {
    setFavList(false);
    setSearchText(search);
  }

  const filterBooks = (filterUrl) => {
    setFilters(filterUrl);
  }

  const toggleFavs = () => {
    setFavList(!favList);
  }
  
  return (
    <div className='container'>
      <div className='header mt-3'>
        <a href='.'><img src='https://www.gutenberg.org/gutenberg/pg-logo-129x80.png' /></a>
      </div>
      <SearchEngine  onClick= {searchBooks} onFavsToggle = {toggleFavs} />
      {!favList && <Filters onFilter={filterBooks}/>}
      {(loading && !favList) && <Loading />}
      {(error && !favList) && <Error err = {error} />}
      {(data && !favList) && (
      <>       
        <BookList data = {data} />
        <Pagination total = {data.count} currentPage = {currentPage} onClick = {changeHandle}/>
      </>
      )}  
      {favList && <FavouriteBooksList />}  
    </div>
  );
}

export default App;
