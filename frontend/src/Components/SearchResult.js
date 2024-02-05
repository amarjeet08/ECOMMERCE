import React from 'react'
import './SearchResult.css'

const SearchResult = ({ searchResult }) => {
    return (
        <div>
            <h1>Search Results</h1>
            <div >
                <ul>
                    {searchResult.map((item) => (
                        <li key={item._id} className='result-container'>
                            <img src={item.images[0]} alt={item.name} />
                            <h4>{item.name}</h4>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SearchResult