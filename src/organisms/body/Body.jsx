import './body.css';
import Feed from '../feed/index';
import FilterForm from '../filterForm/index';
import Profile from './atoms/profile/index';
import { USER_INFO } from './constants/userInformation'; 

export default function Body({displayState, feedPosts ,filterFormDisplay,filterFormSubmitHandler}){

    let display;

    switch (displayState) {
        case 'feed':
            display = <><Feed posts={feedPosts}/> <FilterForm displayState={filterFormDisplay} submitHandler={filterFormSubmitHandler}/></>
            break;
        case 'no-matching-search':
            display = <div className='nomatch-message'><h1>No Matching Posts with that Search Value</h1></div>
            break;
        case 'profile':
            display = <Profile userInfo={USER_INFO}/>
            break;
        case 'no-matching-filter':
            display = <div className='nomatch-message'><h1>No Matching Posts with that Filter</h1></div>
            break;
        default:
            display = <h1 className='default'>Something went Wrong</h1>
            break;
    }

    return (
        <>
            {display}
        </>
    )
}