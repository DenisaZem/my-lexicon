import { Link } from "react-router-dom";
import { GiCancel } from "react-icons/gi"

const WordBox = ({ id, wordDe, wordCze, onDelete }) => {
  const handleDelete = (id) => {
    const confirmed = window.confirm("Jste si jisti, že chcete smazat toto slovo?");
    if (confirmed) {
      onDelete(id);
    }
  };

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
          <button className="wordBox__buttonsSection--detail">
            <Link to={`/detail-word/${id}`}>Detail</Link>
          </button>
          <button
            type="button"
            onClick={() => handleDelete(id)}
            className="wordBox__buttonsSection--delete"
          >
            Smazat
          </button>
          <GiCancel className="wordBox__buttonsSection--IMG-detail"/>
        </div>
      </div>
    </div>
  );
};

export default WordBox;
