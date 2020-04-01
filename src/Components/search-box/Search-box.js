import React from 'react'
import './Search-box.css'

const SearchBox=(props)=>{
    return(
    <input
    className="search"
    onChange={props.handleChange}
     type="search"
     placeholder="search monster"/>

    )
}
export default SearchBox;