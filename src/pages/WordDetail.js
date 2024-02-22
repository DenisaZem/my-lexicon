import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../firebase/config";

const WordDetail = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
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

  return (
    <section className="DetailWordTab">
      {error && <p>{error}</p>}
      <div className="DetailWordTab__container">
        <div className="DetailWordTab__wordDe">
          <h2>{data.wordDe}</h2>
        </div>
        <div className="DetailWordTab__wordCze">
          <h2>{data.wordCze}</h2>
        </div>
        <div className="DetailWordTab__title">
          <span>Příklad:</span>
        </div>
        <div className="DetailWordTab__sentence">
          <h2>{data.sentence}</h2>
        </div>
      </div>
    </section>
  );
};

export default WordDetail;
