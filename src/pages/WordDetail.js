import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";

const WordDetail = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { wordId } = useParams();

  useEffect(() => {
    projectFirestore
      .collection("deutsch")
      .doc(wordId)
      .get()
      .then((document) => {
        if (document.exists) {
          setData(document.data());
        } else {
          setError("Detail slova nelze zobrazit");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [wordId]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await projectFirestore.collection("deutsch").doc(wordId).update({
        wordDe: data.wordDe,
        wordCze: data.wordCze,
        sentence: data.sentence,
      });

      setIsEditing(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="MainDetailWordPage">
      {isEditing ? (
        <div className="DetailWord__editForm">
          <input
            type="text"
            name="wordDe"
            value={data.wordDe}
            onChange={handleChange}
          />
          <input
            type="text"
            name="wordCze"
            value={data.wordCze}
            onChange={handleChange}
          />
          <input
            type="text"
            name="sentence"
            value={data.sentence}
            onChange={handleChange}
          />
          <div className="editForm__buttonSection">
          {/* <button>
          <Link to={`/detail-word/${wordId}`}>Zpět</Link>
              </button> */}
          <button onClick={handleSave} className="saveBTN">
            Uložit
          </button>
          </div>
        </div>
      ) : (
        <section className="DetailWord">
          <div className="DetailWordTab__wall">
            <div className="DetailWordTab__wall_ButtonSection">
              <button onClick={handleEdit}>Upravit</button>
              <button>Přehrát</button>
              <button>Zpšt</button>
            </div>
            {error && <p>{error}</p>}
            <div className="DetailWordTab__container">
              <div className="DetailWordTab__wordDe">
                <h2>{data.wordDe}</h2>
              </div>
              <div className="DetailWordTab__wordCze">
                <h2>{data.wordCze}</h2>
              </div>
              <div className="DetailWordTab__title">
                <span>Paměťová věta:</span>
              </div>
              <div className="DetailWordTab__sentence">
                <h2>{data.sentence}</h2>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default WordDetail;
