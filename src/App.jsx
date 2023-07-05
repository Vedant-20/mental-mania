

import Footer from './components/Footer'
import Header from './components/Header'
import Journal from './components/Journal'
import Meditation from './components/Meditation'
import MoodTracker from './components/MoodTracker'
import Professionals from './components/Professionals'
import SupportGroups from './components/SupportGroups'
import Home from './pages/Home'
import MeditationPage from './pages/MeditationPage'
import MoodTrackerPage from './pages/MoodTrackerPage'

function App() {
  

  return (<>
    <Header/>
    <Meditation/>
    <MoodTracker/>
    <Journal/>
    <Professionals/>
    <SupportGroups/>
    <Footer/>
    <Home/>
    <MeditationPage/>
    <MoodTrackerPage/>
  </>
    
  )
}

export default App
