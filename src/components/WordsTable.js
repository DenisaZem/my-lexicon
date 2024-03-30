import WordBox from "./WordBox";

const WordsTable = ({ data, onDelete }) => {
  return (
    <div className="wordTable">
      {data.map((oneWord) => {
        const { id, wordDe, wordCze } = oneWord;
        return (
          <WordBox
            key={id}
            id={id}
            wordDe={wordDe}
            wordCze={wordCze}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default WordsTable;
