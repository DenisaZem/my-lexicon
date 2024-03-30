import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";

const EditForm = () => {
  const { wordId } = useParams();

  const [data, setData] = useState({
    wordDe: "",
    wordCze: "",
    sentence: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await projectFirestore.collection("deutsch").doc(wordId).update({
        wordDe: data.wordDe,
        wordCze: data.wordCze,
        sentence: data.sentence
      });

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <section>
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
          <button>
            <Link to={`/detail-word/${wordId}`}>Zpět</Link>
          </button>
          <button onClick={handleSave} className="saveBTN">
            Uložit
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditForm;
