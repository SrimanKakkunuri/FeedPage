import './body.css';
import Feed from '../feed/Feed';
import FilterForm from '../../molecules/filterForm/FilterFrom';
import Profile from '../../molecules/profile/Profile';
import { userInfo } from './constants/userInformation'; 

export default function Body({displayState, feedPosts ,filterFormDisplay,filterFormSubmitHandler,commentHandler}){

    let display;

    switch (displayState) {
        case 'feed':
            display = <><Feed posts={feedPosts} commentHandler={commentHandler}/> <FilterForm displayState={filterFormDisplay} submitHandler={filterFormSubmitHandler}/></>
            break;
        case 'no-matching-search':
            display = <div className='nomatch-message'><h1>No Matching Posts with that Search Value</h1></div>
            break;
        case 'profile':
            display = <Profile userInfo={userInfo}/>
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