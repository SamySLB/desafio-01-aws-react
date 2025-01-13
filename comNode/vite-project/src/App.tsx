
import { Routes, Route } from 'react-router-dom';
import SearchUrlImage from './components/SearchUrlImage'


function App() {
 

  return (
    <Routes>
    <Route path="/" element={<SearchUrlImage contentKey="content1" />} />
    <Route path="/content2" element={<SearchUrlImage contentKey="content2" />} />
    <Route path="/content3" element={<SearchUrlImage contentKey="content3" />} />
  </Routes>
  )
}

export default App
