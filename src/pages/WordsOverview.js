import { projectFirestore } from "../firebase/config";
import { useState, useEffect } from "react";

const WordsOverview = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = projectFirestore.collection("deutsch").onSnapshot(
      (snapshot) => {
        console.log(snapshot);
        if (snapshot.empty) {
          setError("Žádná slovíčka k zobrazení");
          setData([]);
        } else {
          let result = [];
          snapshot.docs.forEach((oneWord) => {
            result.push({ id: oneWord.id, ...oneWord.data() });
            console.log(result);
            setData(result);
            setError("");
          });
        }
      },
      (err) => {
        setError(err.message);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const deleteWord = (id) => {
    projectFirestore.collection("deutsch").doc(id).delete();
  };

  return (
    <div className="main_container">
      <h1>Přehled slov</h1>
      <div className="main_container--grid">
        {error && <p>{error}</p>}
        {data.map((oneWord) => {
          const { id, wordDe, wordCze } = oneWord;
          return (
            <div key={id} className="wordBorder">
              <p className="transWorsDe">{wordDe}</p>
              <p className="trans">překlad</p>
              <p className="transWordCz">{wordCze}</p>
              <div className="buttonsSection">
                <button
                  type="button"
                  onClick={() => deleteWord(id)}
                  className="deleteButton"
                >
                  Smazat
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WordsOverview;
