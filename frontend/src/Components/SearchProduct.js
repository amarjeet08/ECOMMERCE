import React, { useState } from 'react'
import axios from 'axios'
import './SearchProduct.css'
import SearchResult from './SearchResult'

const SearchProduct = () => {
    const [searchQuery, setSearchQuery] = useState();
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = async () => {
        const response = await axios.get(`http://localhost:3001/api/product/searchProduct?query=${searchQuery}`)
        console.log(response.data)
        setSearchResult(response.data.products)
    }

    return (
        <div>
            <input className='search-input' placeholder='Search for any Product' type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type='button' className='search-btn' onClick={handleSearch}>Search</button>
            <SearchResult searchResult={searchResult} />
        </div>

    )
}


export default SearchProduct;