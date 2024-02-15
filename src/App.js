import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import WordsOverview from './pages/WordsOverview'
import Form from './components/Form'
import WordDetail from './pages/WordDetail'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage/>} />
        <Route path="overview" element={<WordsOverview />} />
        <Route path="form" element={<Form />} />
        <Route path="detail-word/:wordId" element={<WordDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
