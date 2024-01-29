import { useState } from "react"
import { projectFirestore } from "../firebase/config"

const Form = () => {
    const[wordDe, setWordDe] = useState("")
    const[wordCze, setWordCze] = useState("")
    const[sentence, setSentence] = useState("")

    const submitForm = (e) => {
        e.preventDefault()

       const newWord = {wordDe, wordCze, sentence}

       projectFirestore.collection("deutsch").add(newWord)
    }

  return (
    <form onSubmit={submitForm}>
        <input 
            type="text" 
            placeholder="německé slovo"
            onChange={(e) => setWordDe(e.target.value)}
        />
        <br />
        <input 
            type="text" 
            placeholder="český překlad"
            onChange={(e) => setWordCze(e.target.value)}    
        />
        <br />
        <input 
            type="text" 
            placeholder="pomocná věta"
            onChange={(e) => setSentence(e.target.value)}
        />
        <br />
        <input 
            type="submit" 
            value="Přidat"
        />

    </form>
  )
}

export default Form
