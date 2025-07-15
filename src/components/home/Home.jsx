import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <main className='container'>
                <Link  to={'/'}>home</Link>
                <Link  to={'/users'}>users</Link>
                <Link to={'/posts'}>posts</Link>
        </main>
    )
}
