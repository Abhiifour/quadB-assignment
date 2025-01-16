
import { useSelector } from 'react-redux'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import { Toaster } from 'react-hot-toast'


function App() {
  const user = useSelector((state:any)=>state.userState.user)
  if(user.email === "") return  <LandingPage/>

  else
  return (
    <div className='md:px-[48px] px-4 dark:bg-bg-dark'>
     
     <Layout>
      <Home/>
     </Layout>
     <Toaster
      position="top-center"
      reverseOrder={false}
    />
    </div>
  )
}

export default App
