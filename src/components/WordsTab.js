

const WordsTable = ({ data, onDelete }) => {
  return (
    <div className="main_container--grid">
      {data.map((oneWord) => {
        const { id, wordDe, wordCze } = oneWord;
        return (
          <div key={id} className="wordBorder">
            <p className="transWordDe">{wordDe}</p>
            <p className="trans">překlad</p>
            <p className="transWordCz">{wordCze}</p>
            <div className="buttonsSection">
              <button
                type="button"
                onClick={() => onDelete(id)}
                className="deleteButton"
              >
                Smazat
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WordsTable;
