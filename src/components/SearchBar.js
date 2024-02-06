const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Vyhledat slovo"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  )
}

export default SearchBar
