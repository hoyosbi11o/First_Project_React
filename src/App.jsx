
import { useRoutes } from 'react-router-dom'
import { Home } from './components/Pages/Home/Home'
import { NotFound } from './components/NotFound/NotFound'
import { Services } from './components/Pages/Services/Services'
import { References } from './components/Pages/References/References'
import { Header } from './components/Layouts/Header/Header'
import { Logo } from './components/Logo/Logo'
import { NavBar } from './components/NavBar/NavBar'
import { Items } from './components/Items/items'
Items

const AppRoutes = () => {

  let routes= useRoutes([
    {path:'/', element:<Home />},
    {path:'/services', element:  <Services/>},
    {path:'/references',element: <References/>},
    {path:'*', element: <NotFound/>},
  ])
  return routes
}



function App() {

  return (
   <>
    <Header>
      <Logo/>
      <NavBar>
        <Items content='Home' routes='/'/>
        <Items content='Services' routes='/services'/>
        <Items content='References' routes='/references'/>
      </NavBar>
    </Header>   
    <AppRoutes />
    </>
  )
}

export default App
