import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPost } from "./store/post";

import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  let postList = [];
  let isLoaded = useRef(false);
  postList = useSelector((state) => state.post.postList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded.current) {
      console.log("useeffect load");
      dispatch(getAllPost(true));
      isLoaded.current = true;
    }
  }, [dispatch]);

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
