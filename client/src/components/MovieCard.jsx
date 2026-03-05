import React, { useEffect, useState } from 'react'
import { fetchWr } from "../api/fetchWraooer.js"
import { useSorte } from '../store/ZustandStore.js'
import { Link, useNavigate } from 'react-router'
import Details from '../pages/details.jsx'

export default function MovieCard() {
    const naviget = useNavigate()
    const { setMovies, searchQuery, error, movies } = useSorte()
    async function getData() {
        try {
            const gdata = await fetchWr()
            setMovies(gdata)

        } catch {
            console.error(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className='sowing'>
                <p> Showing {movies.length} results</p>
            </div>
            <div className='card'>
                {movies.filter((movi) => {
                    if (movi.Title.toLowerCase().includes(searchQuery)) {
                        return movi.Title.toLowerCase().includes(searchQuery)
                    }
                    else {
                        (
                            <div>
                                <h2>No results</h2>
                                <p>Try searching with a different title.</p>
                            </div>
                        )
                    }
                })
                    .map((movie) => (
                        <div className='class-name'>

                            <div className='cards' key={movie.imdbID}>
                                <div  >
                                    <img id='img' src={movie.Images} />
                                </div>
                                <h2 id='title'>{movie.Title}</h2>
                                <div>
                                    <div className='flex'>
                                        <span>Year</span>
                                        <span>{movie.Year}</span>
                                    </div>
                                    <div className='flex'>
                                        <span>Runtime</span>
                                        <span>{movie.Runtime}</span>
                                    </div>
                                    <div className='flex'>
                                        <span>Genre</span>
                                        <span>{movie.Genre}</span>
                                    </div>
                                    <div className='flex'>
                                        <span>Language</span>
                                        <span>{movie.Language}</span>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => naviget(`/muvie/${movie.imdbID}`)}>Select Seats</button>
                                </div>
                            </div>
                        </div>
                    )
                    )}
            </div>
        </>
    )
}