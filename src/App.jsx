import { Route, Routes } from "react-router-dom"
import Header from "./layouts/Header"
import Home from "./pages/Home"
import Footer from "./layouts/Footer"
import TakeReview from "./pages/TakeReview"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/add-review/:agentID" element={<TakeReview />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App