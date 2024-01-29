import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"


const WordsOverview = () => {

  const [error, setError] = useState(false)
  const [data, setData] = useState([])

   useEffect (()=>{
    projectFirestore.collection("deutsch").get().then((snapshot)=>{
      console.log(snapshot)

      if(snapshot.empty){
        setError("Žádná slovíčka k zobrazení")
      } else{
        let result = []
        snapshot.docs.forEach((oneWord)=>{
  
          result.push({id:oneWord.id, ...oneWord.data()})
          console.log(result)
          setData(result)

        })
      }

    }).catch ((err) => {
      setError(err.message)
    })
  },[])

  const deleteWord = (id) => {
    projectFirestore.collection("deutsch").doc(id).delete()
  }

  return (
    <div>
      Prehled Slov
    {error && <p>{error}</p>}
    {data.map((oneWord)=>{
      const {id, wordDe, wordCze, sentence} = oneWord

      return <div key={id}>
        <p>
          <p><strong>Česky:</strong> {wordCze}</p>
          <p><strong>Německy:</strong> {wordDe}</p>
          <p><strong>Věta:</strong> {sentence}</p>
        </p>
        <button type="button" onClick={()=>deleteWord(id)}>Smazat</button>
      </div>
    })}
    </div>
  )
}

export default WordsOverview
