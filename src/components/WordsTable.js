const WordsTable = ({ data, onDelete }) => {
  return (
    <div className="wordTable">
      {data.map((oneWord) => {
        const { id, wordDe, wordCze } = oneWord
        return (
          <div key={id} className="wordTable--oneLine">
            <div className="wordTable--deutchWord">
              <p>{wordDe}</p>
            </div>
            <div className="wordTable--trans">
              <p>překlad</p>
            </div>
            <div className="wordTable--czechWord">
             <p>{wordCze}</p>
            </div>
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
