import Banner from './component/Banner'
import Rating from './component/Rating'
import Navbar from './component/Navbar'
import Models from './component/Models'
import { Suspense, useState } from 'react'
import Card from './component/Card'
import Pricing from './component/Pricing'
import Footer from './component/Footer'
import CtSection from './component/CtSection'
import StepsSection from './component/StepsSection'

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

      <div className="text-center">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className="text-[#627382] mt-4">Choose from our curated collection of premium digital products designed <br />
          to boost your productivity and creativity.</p>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent mt-10">
        
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" aria-label="Products" onClick={() => setActiveTab("products")} defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`} onClick={() => setActiveTab("cart")} />
      </div>

      {activeTab === "products" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === "cart" && <Card carts={carts} setCarts={setCarts} />}

      <StepsSection />
      <Pricing />
      <CtSection />
      <Footer />
    </>
  )
}

export default App
