import './navBar.css';
import NavItem from '../../atoms/navItem/NavItem.jsx';

export default function NavBar({navItems ,navItemsHandlers}){

    const navItemElements = navItems.map((text,index) => {
        return <NavItem text={text} key={index} handler={navItemsHandlers[index<navItemsHandlers.length ? index : 0]}/>
    })

    return (
        <nav>
            {navItemElements}
        </nav>
    );
}