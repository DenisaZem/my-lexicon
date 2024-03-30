import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import WordsOverview from './pages/WordsOverview'
import Form from './components/Form'
import WordDetail from './pages/WordDetail'
import LayOut from './components/LayOut'
import EditForm from './components/EditForm'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LayOut/>} >
          <Route index element={<IntroPage />} />
          <Route path="overview" element={<WordsOverview />} />
          <Route path="form" element={<Form />} />
          <Route path="detail-word/:wordId" element={<WordDetail />} />
          <Route path="edit-word/:wordId" element={<EditForm />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
