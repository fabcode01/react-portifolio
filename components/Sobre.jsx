import { useState } from 'react'
import './Sobre.css'
import Idioma from './Idioma'




const Sobre = ({ setScreen, languages, handleLanguage, opcaoDoIdioma }) => {
  const handleEmailCopied = () => {
    
    document.getElementById('alert').style.display = 'inline-flex'
    navigator.clipboard.writeText('fabricio2silva8@gmail.com')

    setTimeout(()=>{
      document.getElementById('alert').style.display = 'none'
    },1000)
  }



  const handleContats = () => {
    document.getElementById('hand').style.display = 'block'
    document.getElementById('list-ctt').classList.add('alert-ctt')

    setTimeout(() => {

      document.getElementById('hand').style.display = 'none'

    }, 3000)

    setTimeout(() => {

      document.getElementById('list-ctt').classList.remove('alert-ctt')
    }, 1000)


  }



  return (
    <div>
      { }
      <i id='hand' class="hand-animate hand fa-solid fa-hand-point-up"></i>

      <div className="header animate__animated animate__bounceIn">
        <ul>

          <li className='btn contato' onClick={handleContats}>
            <i class="fa-regular fa-id-card" ></i>
            {opcaoDoIdioma == 1 && languages.stringsPTBR[0].contatos}
            {opcaoDoIdioma == 2 && languages.stringsENG[0].contatos}



          </li>

          <li className='btn projetos' onClick={setScreen[0]}>

            <i class="fa-solid fa-code"></i>
            {opcaoDoIdioma == 1 && languages.stringsPTBR[0].projetos}
            {opcaoDoIdioma == 2 && languages.stringsENG[0].projetos}
          </li>

        </ul>

        <Idioma handleLanguage={handleLanguage} setvalueselect={opcaoDoIdioma} />
      </div>

      <div className="main">
        <div className="right">
          <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg" alt="photo-avatar" className="photo" />
          <div className=" social">
            <ul id='list-ctt' className='list'>
              <li className='btn'>
                <i class="fa-brands fa-github"></i>
                Github
              </li>
              <li className='btn' onClick={handleEmailCopied}>
                <i class="fa-solid fa-envelope"></i>
                Email
              </li>
              <li className='btn'>
                <i class="fa-brands fa-whatsapp"></i>
                WhatsApp
              </li>
            </ul>

            <span id='alert' className="alert">
        <i class="fa-solid fa-check"></i>
            {opcaoDoIdioma == 1 && languages.stringsPTBR[0].copiado}
            {opcaoDoIdioma == 2 && languages.stringsENG[0].copiado}
         
        </span>
          </div>

          <div className="rocket animate__animated animate__fadeIn animate__delay-1s">

            <i class="animation-rocket irocket fa-solid fa-rocket"></i>
            <i class="animation-fire fire fa-solid fa-fire"></i>

          </div>



        </div>
        <div className="left">
          <div className="title">

            <h1 className='animate__animated animate__fadeIn'>
              {opcaoDoIdioma == 1 && languages.stringsPTBR[0].titulo}
              {opcaoDoIdioma == 2 && languages.stringsENG[0].titulo}
            </h1>

            <h2 className='animate__animated animate__fadeIn animate__delay-1s'>
              {opcaoDoIdioma == 1 && languages.stringsPTBR[0].titulobaixo}
              {opcaoDoIdioma == 2 && languages.stringsENG[0].titulobaixo}
              <span className="destaque">.</span></h2>
          </div>

          <i class="fa-solid fa-caret-down animate__animated animate__slideInDown animate__delay-1s"></i>

          <div className='descricao animate__animated animate__fadeIn animate__delay-2s'>
            <p>
              {opcaoDoIdioma == 1 && languages.stringsPTBR[0].descricao}
              {opcaoDoIdioma == 2 && languages.stringsENG[0].descricao}
            </p>
            <hr />
            <div className="about">
              <h2>
                {opcaoDoIdioma == 1 && languages.stringsPTBR[0].titleSobre}
                {opcaoDoIdioma == 2 && languages.stringsENG[0].titleSobre}
              </h2>
              <p>
                {opcaoDoIdioma == 1 && languages.stringsPTBR[0].sobre}
                {opcaoDoIdioma == 2 && languages.stringsENG[0].sobre}
              </p>

              <h3>
                {opcaoDoIdioma == 1 && languages.stringsPTBR[0].tecnologias}
                {opcaoDoIdioma == 2 && languages.stringsENG[0].tecnologias}
              </h3>
              <ul>
                <li>
                  <i class="html fa-brands fa-html5"></i>
                  html
                </li>
                <li>
                  <i class="css fa-brands fa-css3-alt"></i>
                  css
                </li>
                <li>
                  <i class="javascript fa-brands fa-square-js"></i>
                  javascript
                </li>
                <li>
                  <i class="react fa-brands fa-react"></i>
                  react
                </li>
              </ul>


            </div>
          </div>




        </div>

        <div className="clear"></div>

        <div className='conhecimentos'>

        </div>

        




      </div>



    </div>
  )
}

export default Sobre