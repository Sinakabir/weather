import React from 'react'

const Search2 = ({search,setSearch,handleClick}) => {
  return (
    <div className='search-engine'>
      <input type="text" placeholder='Enter the City...' value={search} onChange={(event)=> setSearch(event.target.value)}/>
      <button onClick={handleClick}>Search weather</button>
    </div>
  )
}

export default Search2