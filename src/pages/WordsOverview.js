import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import Form from "../components/Form"


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
    <div>
      Prehled Slov
      <Form/>
    {error && <p>{error}</p>}
    {data.map((oneWord)=>{
      const {id, wordDe, wordCze, sentence} = oneWord

      return <div key={id}>
        <div>
          <p><strong>Česky:</strong> {wordCze}</p>
          <p><strong>Německy:</strong> {wordDe}</p>
          <p><strong>Věta:</strong> {sentence}</p>
        </div>
        <button type="button" onClick={()=>deleteWord(id)}>Smazat</button>
      </div>
    })}
    </div>
  )
}

export default WordsOverview
