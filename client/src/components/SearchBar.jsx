import React from 'react'
import { useSorte } from '../store/ZustandStore'

export default function SearchBar() {
  const {setSearchQuery} = useSorte()
  return (
    <>
    <p className='search'>
        Search a movie and pick your seats
    </p>
    <input onChange={(e)=>{setSearchQuery(e.target.value)}} type="text" placeholder='Search movie by title...'/>
    </>
  )
}
