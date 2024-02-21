import WordBox from './WordBox'

const WordsTable = ({ data, onDelete }) => {
  return (
    <div className="wordTable">
      {data.map((oneWord) => {
        const { id, wordDe, wordCze } = oneWord
        return (
          <WordBox
            key={id}
            id={id}
            wordDe={wordDe}
            wordCze={wordCze}
            onDelete={onDelete}
          />
          // <div key={id} className="wordBox">
          //   <div className="wordBox__deutchWord">
          //     <p>{wordDe}</p>
          //   </div>
          //   <div className="wordBox__trans">
          //     <p>překlad</p>
          //   </div>
          //   <div className="wordBox__czechWord">
          //    <p>{wordCze}</p>
          //   </div>
          //   <div className="wordBox__buttonsSection">
          //     <button
          //       type="button"
          //       onClick={() => onDelete(id)}
          //       className="deleteButton"
          //     >
          //       Smazat
          //     </button>
          //   </div>
          // </div>
        )
      })}
    </div>
  )
}

export default WordsTable