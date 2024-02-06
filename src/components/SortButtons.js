import React, { useState, useEffect } from "react"

const SortButtons = ({ onSortChange }) => {
  const [sortBy, setSortBy] = useState("")

  useEffect(() => {
    onSortChange(sortBy)
  }, [sortBy, onSortChange])

  return (
    <div className="sortButtons">
      <button onClick={() => setSortBy("alphabet")}>Řadit abecedně</button>
      <button onClick={() => setSortBy("date")}>Řadit podle data</button>
    </div>
  )
}

export default SortButtons
