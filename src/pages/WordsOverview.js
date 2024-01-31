import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import Form from "../components/Form"
import "../scss/pages/WordsOverview.css"

const WordsOverview = () => {

  const [error, setError] = useState(false)
  const [data, setData] = useState([])

   useEffect (()=>{
    const unsubscribe = projectFirestore.collection("deutsch").onSnapshot((snapshot)=>{
      console.log(snapshot)
      if(snapshot.empty){
        setError("Žádná slovíčka k zobrazení")
        setData([])
      } else{
        let result = []
        snapshot.docs.forEach((oneWord)=>{
          result.push({id:oneWord.id, ...oneWord.data()})
          console.log(result)
          setData(result)
          setError("")
        })
      }
    }, (err) => {setError(err.message)} )
    return () => {unsubscribe ()}
  },[])

  const deleteWord = (id) => {
    projectFirestore.collection("deutsch").doc(id).delete()
  }

  return (
    <div className="main_container">
      <h1>Přehled slov</h1>
    
      <Form/>
      <div className="main_container--grid"> 

    {error && <p>{error}</p>}
    {data.map((oneWord)=>{
      const {id, wordDe, wordCze, sentence} = oneWord
      return <div key={id} className="wordBorder">
          <p><strong>Německy:</strong> {wordDe}</p>
          <p><strong>Česky:</strong> {wordCze}</p>
          <p><strong>Věta:</strong> {sentence}</p>
          <button type="button" onClick={()=>deleteWord(id)} className="deleteButton">Smazat</button>
      </div>
    
      
    })}
    </div>
    </div>
  )
}

export default WordsOverview
