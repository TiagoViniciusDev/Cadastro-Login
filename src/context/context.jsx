import { createContext, useState } from "react";

export const FormContext = createContext()

export const FormProvider = ({children}) => {

    //AlertTime

    const [alert, setAlert] = useState(false)

    var AlertMensage

    AlertMensage = function AlertMensage(){ //Exibe o componente por alguns segundos
        setAlert(true)
        setTimeout(() => {
            console.log("timer")
            setAlert(false)
        }, 5000)
    }

    function closeAlertMensage(){
        console.log("close")
        clearTimeout(AlertMensage)
        setAlert(false)
    }

    //AlertText

    const [alertText, setAlertText] = useState("Erro, preencha corretamente") //Altera a mensagem que é exibida no componente

    //Password

    const [passwordVisibility, setPasswordVisibility] = useState(false)
    function TogglePasswordVisibility(){
        setPasswordVisibility(!passwordVisibility)
      }

    const value = {
        alert,
        setAlert,
        AlertMensage,
        closeAlertMensage,

        alertText, 
        setAlertText,

        passwordVisibility, 
        setPasswordVisibility,
        TogglePasswordVisibility
    }

    return(
        <FormContext.Provider value={value}>{children}</FormContext.Provider>
    )
}
