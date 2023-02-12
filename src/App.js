import './App.css'
import Greetings from './components/Greetings';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  )
}

export default App;