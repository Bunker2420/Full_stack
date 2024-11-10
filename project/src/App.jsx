import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Products from './pages/Product.jsx'
import WebLayout from './layouts/WebLayout.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import AdminDashboard from './pages/Admin/AdminDashboard.jsx'
import TwClasses from './pages/Twclasses.jsx'
import AdminProducts from './pages/Admin/AdminProducts.jsx'
// import {} from 'react'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/temp' element={<TwClasses />}/>
                    </Route>
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
                        <Route path='/admin/products' element={<AdminProducts/>} />
                    
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App