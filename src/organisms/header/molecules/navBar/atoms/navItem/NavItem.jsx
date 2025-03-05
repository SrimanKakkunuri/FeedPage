import './navItem.css';

export default function NavItem({text,handler}){
    return (
        <div className = "nav_link">
            <div className = "nav_text"><button onClick={handler}>{text}</button></div>
        </div>
    )
}