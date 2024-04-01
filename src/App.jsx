import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./layouts/Header"
import Home from "./pages/Home"
import Footer from "./layouts/Footer"
import TakeReview from "./pages/TakeReview"
import Login from "./pages/admin/Login"
import AdminMainLayout from "./layouts/admin/AdminMainLayout"
import AdminHome from './pages/admin/Home';
import AdminNotFound from './pages/admin/AdminNotFound';
import Items from "./pages/admin/Items"

function App() {

  const location = useLocation()

  return (
    <>

      {
        location.pathname.split('/')[1] !== 'admin' && (
          <Header />
        )
      }

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/add-review/:agentID" element={<TakeReview />} />

        <Route path="/admin/login" element={<Login />} />

        <Route>

          <Route path="/admin/home" element={<AdminMainLayout Page={AdminHome} />} />

          <Route path="/admin/items" element={<AdminMainLayout Page={Items} />} />

          <Route path="/admin/*" element={<AdminMainLayout Page={AdminNotFound} />} />

        </Route>

      </Routes>
      {
        location.pathname.split('/')[1] !== 'admin' && (
          <Footer />
        )
      }
    </>
  )
}

export default App