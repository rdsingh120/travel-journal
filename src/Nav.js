import globe from './images/globe.svg'

const Nav = () => {
    return (
        <nav className='nav'>
        <img className='nav--img' alt='globe' src={globe} />
            <h1 className='nav--h1'>            
             my travel journal.
            </h1>
        </nav>
    )
}

export default Nav;