const SortButtons = ({ onSortChange }) => {
  return (
    <div className="sortButtons">
      <button
        className="btn--sortAlphabeth"
        onClick={() => onSortChange('alphabet')}
      >
        Řadit abecedně
      </button>
      <button className="btn--sortDate" onClick={() => onSortChange('date')}>
        Řadit podle data
      </button>
    </div>
  );
};

export default SortButtons;
