import React, { useState , useEffect } from 'react';
import './App.css';
import './components/BookList'
import BookList from './components/BookList';
import Pagination from './components/Pagination';
import SearchEngine from './components/SearchEngine';
import Loading from './components/Loading';
import Error from './components/Error';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('https://gnikdroy.pythonanywhere.com/api/book/?format=json&page=1')
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

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
    getData(url);
  }, [])

  const changeHandle = (page) => {
    let newUrl = '';
    setLoading(true);
    setData(null);
    setCurrentPage(page);
    if (searchText == ''){
      newUrl = 'https://gnikdroy.pythonanywhere.com/api/book/?format=json&page=' + page
    } else {
      newUrl = 'https://gnikdroy.pythonanywhere.com/api/book/?format=json&page=' + page + '&search=' + searchText;
    }
    console.log(newUrl);
    getData(newUrl);
  }

  const searchBooks = (search) => {
    searchText(search);
    changeHandle(1, search);
  }
  
  return (
    <div className='container'>
      <SearchEngine  onClick= {searchBooks}/>
      {loading && <Loading />}
      {error && <Error err = {error} />}
      {data && (
      <>       
        <BookList data = {data} />
        <Pagination total = {data.count} currentPage = {currentPage} onClick = {changeHandle}/>
      </>
      )}    
    </div>
  );
}

export default App;
