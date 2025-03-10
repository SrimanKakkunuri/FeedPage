import './app.css';
import { useState , useCallback, useMemo} from 'react';
import Header from '../../organisms/header/Header.jsx';
import Body from '../../organisms/body/Body.jsx';
import mockFeedData from './constants/mockFeedData.js';



function App() {
  const feedData = useMemo(() => {
    return mockFeedData.map((post) => { 
      return {...post,liked:false};
    })
  },[]);
  const [allPosts,setAllPosts] = useState(feedData); 
  const [displayPosts, setDisplayPosts] = useState(allPosts);
  const [searchInput,setSearchInput] = useState('');
  const [bodyDisplay,setbodyDisplay] = useState('feed');
  const [filterFormDisplay , setfilterFormDisplay] = useState(false);


  function debounce (fn, delay = 500){
    let timerId = null;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...args), delay);
    };
  };

  const search = useCallback(function search(searchValue) {
    if (!searchValue.trim()) {
      if(displayPosts !== allPosts)
      {
        setDisplayPosts(allPosts);
        setbodyDisplay('feed');
      }
      return;
    }
    
    const filteredPosts = allPosts.filter(post => {
      return post.userName.toLowerCase().includes(searchValue.toLowerCase());
    });
    
    if (filteredPosts.length !== 0) {
      setDisplayPosts(filteredPosts);
      setbodyDisplay('feed');
    } 
    else {
      console.log("No posts found for:", searchValue);
      setDisplayPosts([]);
      setbodyDisplay('no-matching-search');  
    }
  },[displayPosts,allPosts]);


  const debouncedSearch = useCallback(debounce(search, 1000),[search]);

  function handleLike(id){
    const newAllPosts = allPosts.map((post)=>{
      if(post.id === id){
        return {...post,likes : post.liked === false ? post.likes+1 : post.likes-1 , liked : !post.liked};
      }
      else{
        return post;
      }
    });
    const newDisplayPosts = displayPosts.map((post)=>{
      if(post.id === id){
        return {...post,likes : post.liked === false ? post.likes+1 : post.likes-1 , liked : !post.liked};
      }
      else{
        return post;
      }
    });
    setDisplayPosts(newDisplayPosts);
    setAllPosts(newAllPosts);
  }

  function searchInputHandler(e){
    const value = e.target.value;
    setSearchInput(value);
    debouncedSearch(value);
  }

  function filterButtonClickHandler(){
    setbodyDisplay('feed');
    setfilterFormDisplay(true);
  }

  function dateInRange(fromDate,toDate,dateToCheck){
    const checkDate = new Date(dateToCheck);
    const start = new Date(fromDate);
    const end = new Date(toDate);

    checkDate.setHours(0, 0, 0, 0);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    
    return checkDate >= start && checkDate <= end;
  }





  function applyFilter(fromDate,toDate){
    setfilterFormDisplay(false);
    const filteredPosts=allPosts.filter((post)=>{
      return dateInRange(fromDate,toDate,post.postDate);
    })
    if(filteredPosts.length === 0)
    {
      setbodyDisplay('no-matching-filter');
    }
    else
    {
      setDisplayPosts(filteredPosts);
    }
  }




  function showProfileHandler(){
    setbodyDisplay('profile');
  }

  function showHomeHandler(){
    setbodyDisplay('feed');
    setDisplayPosts(allPosts);
  }


  return (
    <>
      <Header 
      searchInputHandler={searchInputHandler} 
      searchInputValue={searchInput} 
      filterButtonClickHandler={filterButtonClickHandler} 
      filterFormDisplay={filterFormDisplay} 
      navBarHandlers={[showHomeHandler,null,null,showProfileHandler]}
      />
      <Body
      displayState={bodyDisplay}
      feedPosts={displayPosts} 
      handleLike = {handleLike}
      filterFormDisplay={filterFormDisplay} 
      filterFormSubmitHandler={applyFilter}
      />
    </>
  )
}

export default App;
