import Navbar from './components/Navbar'
import './App.css'
import DepatmentList from './components/DepatmentList'
import CatalogProvider from './context/catalogContext'

function App() {
  return (
    <CatalogProvider>
      <Navbar />
      <DepatmentList />
    </CatalogProvider>
  )
}

export default App
