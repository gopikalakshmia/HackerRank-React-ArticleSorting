import "h8k-components";

import Articles from "./components/Articles";
import {ARTICLES_DATA} from "./constants";
import "./App.css";
import {React,useState} from "react";

function App({ articles }) {
  const [articleData,setArticleData]=useState([...ARTICLES_DATA.sort((a,b)=>b.upvotes-a.upvotes)]);
  const handleMostUpvoted = () => {
    // Logic for most upvoted articles
   setArticleData([...ARTICLES_DATA.sort((a,b)=>b.upvotes-a.upvotes)]) ;
  };

  const handleMostRecent = () => {
    // Logic for most recent articles
    setArticleData([...ARTICLES_DATA.sort((a,b)=>new Date(b.date)-new Date(a.date))]) ;
  };
  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={articleData} />
      </div>
    </>
  );
}

export default App;
