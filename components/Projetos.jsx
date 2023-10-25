import 'animate.css';
import './Projetos.css'
import Idioma from './Idioma';



const Projetos = ({ setScreen, handleLanguage, languages, opcaoDoIdioma }) => {

 


  return (
    <div id='main'>
      <div className="header">
        <div className="btn back" onClick={setScreen}>
          <i className="fa-regular fa-circle-left"></i>
          <span>voltar</span>

        </div>
        <h2>
          {opcaoDoIdioma == 1 && languages.stringsPTBR[0].projetos}
          {opcaoDoIdioma == 2 && languages.stringsENG[0].projetos}
        </h2>
        <Idioma handleLanguage={handleLanguage} setvalueselect={opcaoDoIdioma} />
      </div>
      <div className="project-container">
        <span>

        </span>
        <span>

        </span>
        <span>

        </span>
        <span>

        </span>
        <span>

        </span>
        <span>

        </span>


      </div>
    </div>
  )
}

export default Projetos