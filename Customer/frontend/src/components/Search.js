import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [books, setBooks] = useState([]);

  const searchhandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      setBooks(result);
      console.log(result);
    }
  };

  return (
    <div className="searchpage">
      <h3>Search Books</h3>
      <div >
        <input
          type="text"
          id="title" className="searchbar3"
          placeholder="Search by Title , Author, Edition, Genre"
          onChange={searchhandle}
        />
      </div>

      <h2>Search result</h2>
      <div className="searchmap">
        <ul>
          <li className="search-headers">Title</li>
          <li className="search-headers">Author</li>
          <li className="search-headers">Edition</li>
          <li className="search-headers">Copies Available</li>
          <li className="search-headers">Shelf No</li>
          <li className="search-headers">Rack No</li>
          <li className="search-headers">operations</li>
        </ul>
        {books.map((item, index) => (
          <ul>
            <li key="title">{item.title}</li>
            <li key="author">
              {item.author}
            </li>
            <li key="edition">
            {item.edition}
            </li>
            <li key="copies">
             {item.copies}
            </li>
            <li key="shelf">
             {item.shelf}
            </li>
            <li key="rack">
              {item.rack}
            </li>
            <li key="issues">
              <Link to={"/Issue/" + item._id}>
                <button>Issue</button>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default Search;
