const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Vyhledat slovo"
        value={searchTerm}
        onChange={onSearchChange}
        className="searchInput"
      />
    </div>
  )
}

export default SearchBar
