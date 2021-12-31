import React from 'react'
import {useState, useEffect} from 'react'
import './Search.scss'

function Search() {

const [data, setData] = useState([]) 
const [search, setSearchTerm] = useState('') 

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setData(json))

}, [])
 
const hadlesearchTerme =(e)=>{
let value = e.target.value;
setSearchTerm(value)
}

    return (
        <>
        <div className='searchBar'>
 <input   type='text' name='search'  id='searchBar'placeholder='recherecher'
        onChange={hadlesearchTerme}    /> </div>

 <div className='search__results'>
                {data.filter((val)=>{
                    return val.title.toLowerCase().includes(search.toLowerCase())
                }).map((val)=>{
                    return (
<div className='search__result' key={val.id}>{val.title}</div>
                    )
                })}

                
 
            </div>
 
        
        </>
    )
}

export default Search
