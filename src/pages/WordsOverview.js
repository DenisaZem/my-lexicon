import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"


const WordsOverview = () => {

  const [error, setError] = useState("");

   useEffect (()=>{
    projectFirestore.collection("deutsch").get().then((snapshot)=>{
      console.log(snapshot)

      if(snapshot.empty){
        setError("Žádná slovíčka k zobrazení")
      } else{
        let result = []
        snapshot.docs.forEach((oneWord)=>{
          // console.log(oneWord.data())
          result.push({id:oneWord.id, ...oneWord.data()})
          console.log(result)

        })
      }

    })
  })

  return (
    <div>
      Prehled Slov
    {error && <p>{error}</p>}
    </div>
  )
}

export default WordsOverview
