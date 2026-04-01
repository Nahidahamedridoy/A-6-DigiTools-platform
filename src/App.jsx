import Banner from './component/Banner'
import Rating from './component/Rating'
import Navbar from './component/Navbar'
import Models from './component/Models'
import { Suspense, useState } from 'react'
import Card from './component/Card'

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {

  const [activeTab, setActiveTab] = useState("products")
  // console.log(activeTab)
  const [carts, setCarts] = useState([])
  console.log(carts)
  return (
    <>

      <Navbar />
      <Banner />
      <Rating />

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent mt-10">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" onClick={() => setActiveTab("products")} defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`} onClick={() => setActiveTab("cart")} />
      </div>

      {activeTab === "products" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}

      {activeTab === "cart" && <Card carts={carts} setCarts={setCarts} />}

    </>
  )
}

export default App
