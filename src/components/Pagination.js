import React from 'react'

function Pagination(props) {
    const currentPage = props.currentPage;
    const maxPageLimit = Math.ceil(props.total / 10);
    const minPageLimit = 1;
    let pagination = '';

    if(currentPage > minPageLimit && currentPage < maxPageLimit){
      pagination = (<>
        <li className='page-item'><a className='page-link' href='#' onClick={() => props.onClick(currentPage - 1)}>{currentPage - 1}</a></li>
        <li className='page-item active' aria-current="page"><a className='page-link' href='#' onClick={() => props.onClick(currentPage)}>{currentPage}</a></li>
        <li className='page-item'><a className='page-link' href='#' onClick={() => props.onClick(currentPage + 1)}>{currentPage + 1}</a></li>
      </>)      
    } else if (currentPage == minPageLimit) {
      pagination = (<>
        <li className='page-item active' aria-current="page"><a className='page-link' href='#' onClick={() => props.onClick(currentPage)}>{currentPage}</a></li>
        <li className='page-item'><a className='page-link' href='#' onClick={() => props.onClick(currentPage + 1)}>{currentPage + 1}</a></li>
        <li className='page-item'><a className='page-link' href='#' onClick={() => props.onClick(currentPage + 2)}>{currentPage + 2}</a></li>
      </>) 
    } else if (currentPage == maxPageLimit) {
      pagination = (<>
        <li className='page-item'><a className='page-link' href='#' onClick={() => props.onClick(currentPage - 2)}>{currentPage - 2}</a></li>
        <li className='page-item'><a className='page-link' href='#'onClick={() => props.onClick(currentPage - 1)}>{currentPage - 1}</a></li>
        <li className='page-item  active' aria-current="page"><a className='page-link' href='#' onClick={() => props.onClick(currentPage)}>{currentPage}</a></li>
      </>) 
    }

  return (
    <nav aria-label='Page naviagtion'>
            <ul className='pagination justify-content-center'>
                {currentPage == minPageLimit ? (<li className='page-item disabled'><a className='page-link' href='#'>{'<'}</a></li>) : (<li className='page-item'><a className='page-link' href='#' onClick={() => props.onClick(currentPage - 1)}>{'<'}</a></li>)}
                {(maxPageLimit > 3 && currentPage > (minPageLimit + 1)) && (<li className='page-item'><a className='page-link' href='#' onClick={() => props.onClick(minPageLimit)}>{minPageLimit}</a></li>)}
                {pagination}
                {(maxPageLimit > 3 && currentPage < (maxPageLimit - 1)) && (<li className='page-item'><a className='page-link' href='#' onClick={() => props.onClick(maxPageLimit)}>{maxPageLimit}</a></li>)}
                {currentPage == maxPageLimit  ? (<li className='page-item disabled'><a className='page-link' href='#'>{'>'}</a></li>) : (<li className='page-item'><a className='page-link' href='#' onClick={() => props.onClick(currentPage + 1)}>{'>'}</a></li>)}
            </ul>
        </nav>
  )
}

export default Pagination