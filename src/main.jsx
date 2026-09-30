import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='user/:id' element={<User />}></Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<GitHub />}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)