import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";

const WordDetail = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  // const [isEditing, setIsEditing] = useState(false);
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

  return  (
    <div className="MainDetailWordPage">
      <section className="DetailWord">
        <div className="DetailWordTab__wall">
          <div className="DetailWordTab__wall_ButtonSection">
            <button className="ButtonSection_soundBTN">
              <img
                className="ButtonSection_soundBTN_img"
                src="https://static-00.iconduck.com/assets.00/audio-volume-low-symbolic-icon-2048x1848-yr4qvyya.png"
                alt="Sound Icon"
              />
            </button>
            <button>
              <Link className="ButtonSection_editBTN" to={`/edit-word/${wordId}`}>
                Upravit
              </Link>
            </button>
            <button>
              <Link className="ButtonSection_backBTN" to="/overview">
                Zpět
              </Link>
            </button>
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
    </div>
  );
};

export default WordDetail;
