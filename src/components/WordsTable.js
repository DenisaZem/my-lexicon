const WordsTable = ({ data, onDelete }) => {
  return (
    <div className="wordTable">
      {data.map((oneWord) => {
        const { id, wordDe, wordCze } = oneWord
        return (
          <div key={id} className="wordTable--oneLine">
            <p className="wordTable--deutchWord">{wordDe}</p>
            <p className="wordTable--trans">překlad</p>
            <p className="wordTable--czechWord">{wordCze}</p>
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
        )
      })}
    </div>
  )
}

export default WordsTable
