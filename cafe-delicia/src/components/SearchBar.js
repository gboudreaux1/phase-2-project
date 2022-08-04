


function SearchBar({ setSearchString}) {
    return (
      <div className="searchbar">
        <i class='bx bx-search-alt' ></i>
        <input
          type="text"
          id="search"
          placeholder="Type a drink to search..."
  
          onChange={  (e) => setSearchString(e.target.value)  }
        />
      </div>
    );
  }

  export default SearchBar;


