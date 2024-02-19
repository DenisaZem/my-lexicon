import React, { useState, useEffect } from "react"

const SortButtons = ({ onSortChange }) => {
  const [sortBy, setSortBy] = useState("")

  useEffect(() => {
    onSortChange(sortBy)
  }, [sortBy, onSortChange])

  return (
    <div className="sortButtons">
      <button
        className="btn--sortAlphabeth"
        onClick={() => setSortBy("alphabet")}
        >
        Řadit abecedně
      </button>
      <button className="btn--sortDate" 
        onClick={() => setSortBy("date")}
        >
        Řadit podle data
      </button>
    </div>
  )
}

export default SortButtons
