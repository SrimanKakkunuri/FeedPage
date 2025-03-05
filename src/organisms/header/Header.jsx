import './header.css';
import NavBar from './molecules/navBar/index.js';
import ButtonWithIcon from '../../atoms/buttonWithIcon/index.js';
import SearchBar from './atoms/searchBar/index.js';
import HeaderTitle from './atoms/headerTitle/index.js';


export default function Header({searchInputHandler,searchInputValue,filterButtonClickHandler,navBarHandlers}){
    
    return (
        <header>
            <HeaderTitle titleText={"FEEDPAGE"}/>

            <NavBar navItems={["Home","Notifications","Messages","Profile"]} navItemsHandlers={navBarHandlers}/>

            <SearchBar placeholder={"SearchByName"} inputHandler={searchInputHandler} inputValue={searchInputValue}/>

            <ButtonWithIcon clickHandler={filterButtonClickHandler} iconClasses={["fa-solid", "fa-filter"]}/>
        </header>
    )
} 