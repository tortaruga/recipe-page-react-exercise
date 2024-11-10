import searchIcon from '../images/search.png';

export default function Header() {
    return (
        <header>
            <h1 className="header-h1">Recipes</h1>
            
            <div className='header-group'>
            <fieldset className='search'>
            <input id="search-field" placeholder="search for recipe" type="text" />
            <button class="search-btn">
                <img class="search-img" src={searchIcon} />
            </button>
            </fieldset>
           
            <ul className="tags">
                <button className='tag-btn'>tag</button>
                <button className='tag-btn'>tag</button>
                <button className='tag-btn'>tag</button>
            </ul>
            </div>
        </header>
    )
}