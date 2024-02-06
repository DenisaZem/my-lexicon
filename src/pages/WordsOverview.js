import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"
import SortButtons from "../components/SortButtons"

const WordsOverview = () => {
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("");


  useEffect(() => {
    const unsubscribe = projectFirestore.collection("deutsch").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("Žádná slovíčka k zobrazení")
          setData([])
        } else {
          let result = []
          snapshot.docs.forEach((oneWord) => {
            result.push({ id: oneWord.id, ...oneWord.data() })
            setData(result)
          })
        }
      },
      (err) => {
        setError(err.message)
      }
    )
    return () => {
      unsubscribe()
    }
  }, [])

  const deleteWord = (id) => {
    projectFirestore.collection("deutsch").doc(id).delete()
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredData = data.filter((oneWord) => {
    return (
      oneWord.wordDe.toLowerCase().includes(searchTerm.toLowerCase()) ||
      oneWord.wordCze.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const handleSortChange = (sortBy) => {
    setSortBy(sortBy);
  }

  useEffect(() => {
    let sortedData = [...data]
    if (sortBy === "alphabet") {
      sortedData.sort((a, b) =>
        a.wordDe.toLowerCase().localeCompare(b.wordDe.toLowerCase())
      );
    } else if (sortBy === "date") {
      sortedData.sort((a, b) =>
        (b.createdAt?.toDate() || 0) - (a.createdAt?.toDate() || 0)
      )
    }

    setData(sortedData)
  }, [sortBy])

  return (
    <div className="main_container">
      <h1>Přehled slov</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
      <SortButtons onSortChange={handleSortChange} />
      <div className="main_container--grid">
        {error && <p>{error}</p>}
        {filteredData.map((oneWord) => {
          const { id, wordDe, wordCze } = oneWord
          return (
            <div key={id} className="wordBorder">
              <p className="transWordDe">{wordDe}</p>
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
          )
        })}
      </div>
    </div>
  )
}

export default WordsOverview
