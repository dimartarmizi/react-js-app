import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './App.css'
import Nav from './Nav'

function App() {
  const element = useRoutes(routes)

  return (
    <>
      <Nav />
      {element}
    </>
  )
}

export default App
