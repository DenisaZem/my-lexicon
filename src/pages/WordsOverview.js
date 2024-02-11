import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"
import SortButtons from "../components/SortButtons"
// import Form from "../components/Form"
import WordsTable from "../components/WordsTable"

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
      )
    } else if (sortBy === "date") {
      sortedData.sort((a, b) => {
        const dateA = b.createdAt?.toDate() || 0
        const dateB = a.createdAt?.toDate() || 0
        return dateA - dateB
      }
      )
    }
    setData([...sortedData])
  }, [sortBy])

  return (
    <div className="main_container">
      <h1>Přehled slov</h1>
      {error && <p>{error}</p>}
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
      <SortButtons onSortChange={handleSortChange} />
      <WordsTable data={filteredData} onDelete={deleteWord} />
    </div>
  )
}

export default WordsOverview
