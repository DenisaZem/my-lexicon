import { useState } from "react";
import { projectFirestore } from "../firebase/config";

const Form = () => {
  const [wordDe, setWordDe] = useState("");
  const [wordCze, setWordCze] = useState("");
  const [sentence, setSentence] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const newWord = { wordDe, wordCze, sentence };
    try {
      await projectFirestore.collection("deutsch").add(newWord);
      setWordDe("");
      setWordCze("");
      setSentence("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={submitForm} className="AddWordForm">
      <input
        type="text"
        placeholder="německé slovo"
        onChange={(e) => setWordDe(e.target.value)}
        value={wordDe}
      />
      <br />
      <input
        type="text"
        placeholder="český překlad"
        onChange={(e) => setWordCze(e.target.value)}
        value={wordCze}
      />
      <br />
      <input
        type="text"
        placeholder="pomocná věta"
        onChange={(e) => setSentence(e.target.value)}
        value={sentence}
      />
      <br />
      <input type="submit" value="Přidat" className="submitButton" />
    </form>
  );
};

export default Form;
