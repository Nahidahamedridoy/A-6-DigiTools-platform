import Banner from './component/Banner'
import Rating from './component/Rating'
import Navbar from './component/Navbar'
import Models from './component/Models'
import { Suspense } from 'react'

const getModels = async () => {
    const res = await fetch("/models.json")
    return res.json()
  }

  const modelPromise =getModels()

function App() {

  

  return (
    <>

      <Navbar />
      <Banner />
      <Rating />
      <Models modelPromise={modelPromise}/>
      
    </>
  )
}

export default App
