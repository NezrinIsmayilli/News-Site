import {Link} from 'react-router-dom';

    const Navbar = ({categories, changeUrl, active}) => {
        return (
            <nav>
                <header>
                    <h2>News</h2>
                    <div className="buttons">
                        {categories.map(categorie=>(
                            <button key={categorie} 
                                    onClick={changeUrl}
                                    className={active === categorie ? 'active' : ''}>
                                <Link className='link' to="/">{categorie}</Link>
                            </button>
                        ))}
                    </div>
                </header> 
            </nav>
  )
}

export default Navbar