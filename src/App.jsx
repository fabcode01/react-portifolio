import { useState } from 'react'
import './App.css'
import Sobre from '../components/Sobre'
import {languages} from './assets/strings.js'
import Projetos from '../components/Projetos'


function App() {
  const[currentLanguage, SetCurrentLanguage] = useState(2)
    
  const handleLanguage = () => {

    let opt = document.getElementById('idioma').value
  
  
    if (opt == 2) {
        SetCurrentLanguage(1)
        document.getElementById('container').style.height = '750px'
  
    } else if (opt == 1) {
        SetCurrentLanguage(2)
        document.getElementById('container').style.height = '650px'
    }
  
  }
  




 
  

  

  

  const setViewProjetos = () => {
    setScreen(viewScreen[0].tela)
  }

  const setVoltar = () => {
    setScreen(viewScreen[1].tela)
  }

  const viewScreen = [
    { id: 1, tela: 'projetos' },
    { id: 2, tela: 'sobre' }
  ]
  const [Screen, setScreen] = useState(viewScreen[1].tela)

  return (
    <>


      <div id='container' className="container">
        
        {Screen === 'sobre' && <Sobre setScreen={[ setViewProjetos]} languages={languages} handleLanguage={handleLanguage} opcaoDoIdioma={currentLanguage}/>}
        
        {Screen === 'projetos' && <Projetos setScreen={setVoltar} opcaoDoIdioma={currentLanguage} languages={languages} handleLanguage={handleLanguage}/>}
      </div>
    </>
  )
}

export default App
