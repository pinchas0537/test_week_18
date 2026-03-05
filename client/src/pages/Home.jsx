import React from 'react'
import { Link } from 'react-router'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'

export default function Home() {
    
    return (
            <div className='home'>
                <header>
                    <Link to="/">
                        Movie Night
                    </Link>
                </header>
                <SearchBar />
                <MovieCard/>
            </div>
    )
}
