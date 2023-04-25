import React from "react";

const SearchBar = () => {
  return (
    <div>
      <h4>1.0 Search bar</h4>

      <div class="grid-x align-center padding_1 search-panel">
        <div class=" medium-6 large-4 middle cell">
          <div class="input-group">
            <input
              class="input-group-field searchbar"
              type="search"
              placeholder="Search here for learning content"
            />
            <div class="input-group-button">
              <button type="submit" class="search-btn search-bar-btn">
                @
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
