import './buttonWithIcon.css';

export default function ButtonWithIcon({clickHandler,iconClasses}){
    let iconClass = "";
    iconClasses.forEach((value) => {
        iconClass += value;
        iconClass += " "; 
    });

    return (
        <div id="button-with-icon">
            <button onClick={clickHandler}><i className={iconClass}></i></button>
        </div>
    )
}
