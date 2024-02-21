import React from 'react'

const WordBox = ({ id, wordDe, wordCze, onDelete }) => {
  return (
    <div>
      <div key={id} className="wordBox">
        <div className="wordBox__deutchWord">
          <p>{wordDe}</p>
        </div>
        <div className="wordBox__trans">
          <p>překlad</p>
        </div>
        <div className="wordBox__czechWord">
          <p>{wordCze}</p>
        </div>
        <div className="wordBox__buttonsSection">
          <button
            type="button"
            onClick={() => onDelete(id)}
            className="deleteButton"
          >
            Smazat
          </button>
        </div>
      </div>
    </div>
  )
}

export default WordBox