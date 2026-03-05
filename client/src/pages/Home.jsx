import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import SearchBar from '../components/SearchBar'
import { fetchWr } from '../api/fetchWraooer'

export default function Home() {
    const [data, setData] = useState([])
    async function getData() {
        debugger
        const gdata = await fetchWr()
        setData(gdata)

    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className='home'>
                <header>
                    <Link to="/">
                        Movie Night
                    </Link>
                </header>
                <SearchBar />
            </div>
            {data.map((e) => (
                <div key={e.imdbID}><p>{e.title}</p></div>
            )
            )}
        </>
    )
}
