import React from 'react';

const SearchBar = () => {
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Search here..."
                />
            <input type="submit" value="Agregar" />
          </form>
        </div>
    );
}

export default SearchBar;