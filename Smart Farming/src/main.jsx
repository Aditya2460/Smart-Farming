// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// import './index.css'
// import App from './App.jsx'
// import Contact from './Components/Contact.jsx'


// const Router=createBrowserRouter([{path:'/',element:<App/>,
//   children:[{
//     // path:"/contact", element:<Contact/>
//   }]
// },
// {path:"/contact", element:<Contact/>}

// ])


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       <RouterProvider router={Router} ></RouterProvider>
//     {/* <App /> */}
//   </StrictMode>,
// )




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

 createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)