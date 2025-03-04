import './searchBar.css';


export default function SearchBar({placeholder,inputHandler,inputValue}){
    
    return (
        <div id="searchbar">
            <i className="fa-solid fa-magnifying-glass fa-lg search-icon"></i>
            <input id="searchbar-input" type="text" placeholder={placeholder} onChange={inputHandler} value={inputValue}></input>
        </div>
    )
}