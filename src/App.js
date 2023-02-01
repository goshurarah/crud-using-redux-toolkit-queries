import Navbar from './Components/Navbar'
import Delete from "./Components/Delete"
import GetById from "./Components/GetById"
import GetBySpecificLimit from "./Components/GetBySpecificLimit"
import Post from "./Components/Post"
import Update from "./Components/Update"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path='/' element={<Delete />} />
          <Route path='/GetById' element={<GetById />} />
          <Route path='/GetBySpecificLimit' element={<GetBySpecificLimit />} />
          <Route path='/Post' element={<Post />} />
          <Route path='/Update/:id' element={<Update />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
