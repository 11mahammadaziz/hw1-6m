import { Link } from 'react-router-dom'
import './header.css';

export const Header = () => {
    return (
        <header className='header'>
            <div className="parent container">
                <h2 className='logo'>Logo</h2>
                <div className="row">
                    <Link to={'/'}>home</Link>
                    <Link to={'/users'}>users</Link>
                    <Link to={'/posts'}>posts</Link>
                </div>
            </div>
        </header>
    )
}
