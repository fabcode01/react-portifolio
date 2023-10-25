import { useEffect, useState } from "react"


const Idioma = ({handleLanguage, setvalueselect}) => {
   
   
   const[optSelect, setOptSelect] = useState()
  

   useEffect(()=>{
    if(setvalueselect == 2){
        setOptSelect(1)
       } else if(setvalueselect == 1){
        setOptSelect(2)
       }
   })



    return (
        <>
            <div className="idioma">
                <select name="idioma" id="idioma" onChange={handleLanguage} value={optSelect}>
                    <option className='select-icon' value="1">ENG </option>
                    <option className='select-icon' value="2">PT-BR</option>
                </select>
            </div>
        </>
    )
}

export default Idioma