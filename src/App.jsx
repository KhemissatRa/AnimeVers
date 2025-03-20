import React from "react"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Nav from "./components/nav"
import Header from "./components/header"
import AnimeList from "./components/AnimeList"
import AnimeProvider from "./context/context"
import Footer from "./components/footer"
import AnimeDetais from "./components/AnimeDetais"
import Favorite from "./components/Favorite"
function App() {

  return (
      
    <Router basename="/AnimeVerse" >
    <AnimeProvider>
<div className="max-w-screen min-h-screen bg-[#181e2b]">
    <Nav/>
    <Header/>
    <Routes>
    <Route path="/" element={<AnimeList/>}/>
    <Route path="Anime/:id" element={<AnimeDetais/>}/>
    <Route path="fav" element={<Favorite/>}/>
    </Routes>
  <Footer/>
  </div>
  </AnimeProvider>

  </Router> 
    
  
    
  )
}

export default App
