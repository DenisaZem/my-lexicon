import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";

const EditForm = () => {
  const { wordId } = useParams();

  const [data, setData] = useState({
    wordDe: "",
    wordCze: "",
    sentence: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const document = await projectFirestore
          .collection("deutsch")
          .doc(wordId)
          .get();
        if (document.exists) {
          setData(document.data());
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, [wordId]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await projectFirestore.collection("deutsch").doc(wordId).update({
        wordDe: data.wordDe,
        wordCze: data.wordCze,
        sentence: data.sentence,
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
            <Link to={`/detail-word/${wordId}`}>Uložit</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditForm;
