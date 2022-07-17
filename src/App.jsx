import LoginPass from './components/LoginPass/LoginPass'
import GenerateColor from './components/GenerateColor/GenerateColor'

import './App.css'

const App = () => (
  <div className="App">
    <LoginPass />
    <GenerateColor maxNum={32} />
  </div>
)
export default App
