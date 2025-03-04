import './header.css';
import NavBar from '../../molecules/navBar/NavBar.jsx';
import ButtonWithIcon from '../../atoms/buttonWithIcon/ButtonWithIcon.jsx';
import SearchBar from '../../molecules/searchBar/SearchBar.jsx';
import HeaderTitle from '../../atoms/headerTitle/HeaderTitle.jsx';


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