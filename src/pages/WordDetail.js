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
    <section>
      {error && <p>{error}</p>}
      <div>
        <h1>{data.wordDe}</h1>
        <h3>{data.wordCze}</h3>
        <p>
          <span>Příklad:</span>
        </p>
        <p>{data.sentence}</p>
      </div>
    </section>
  );
};

export default WordDetail;
