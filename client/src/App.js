import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ParseExcel } from './components/ParseExcel'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="container text-center mt-5 App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ParseExcel />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
