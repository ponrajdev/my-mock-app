import React, { useEffect, useState,useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPost } from './store/post'

import Card from './components/Card';
import SearchBar from './components/SearchBar';

import './App.css';

function App() {
  const [loadData,setLoadData] = useState(true);
  //const [postList,setPostList] = useState([]);
  const [query,setQuery] = useState('');
  let [postList,setpostList] = useState('');
  let isLoaded = useRef(false);
  postList = useSelector((state) => state.post.postList)
  
  const dispatch = useDispatch();

  useEffect(()=> {
    
    if(!isLoaded.current){
      console.log("useeffect load")
      dispatch(getAllPost(loadData));
      isLoaded.current = true;
    }

  },[loadData,query]);


  postList = postList.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className='container'>
      <SearchBar onQuery={setQuery} keyword={query} />
      <Card data={postList} keyword={query} />
    </div>
    
  );
}

export default App;
