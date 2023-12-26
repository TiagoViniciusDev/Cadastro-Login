import './Login.css'

import { useState } from 'react'
import Alert from '../Alert/Alert'
import { useNavigate } from 'react-router-dom'

import { useContext } from 'react';
import { FormContext } from '../../context/context';

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Login(){

    const {passwordVisibility, TogglePasswordVisibility, AlertMensage, setAlertText} = useContext(FormContext)

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [emailBorder, setEmailBorder] = useState("black")
    const [passwordBorder, setPasswordBorder] = useState("black")

    const navigate = useNavigate()

    function goSingUp(){
      navigate("/Cadastro-Login/singup")
    }

    function TryLogin(e){
      e.preventDefault()
      setEmailBorder("black")
      setPasswordBorder("black")
      //Verficações
      if(localStorage.getItem(loginEmail)){ //Verificando se o email já está registrado
        if(localStorage.getItem(loginEmail) === loginPassword){
          setAlertText("Usuário Logado com sucesso")
          AlertMensage()
        } else{
          setPasswordBorder("red")
          setAlertText("Senha incorreta")
          AlertMensage()
        }
      } else{
        setEmailBorder("red")
        setAlertText("O E-mail indicado não está registrado")
        AlertMensage()
      }
    }

    return(
        <div className='Login'>
          <Alert />
          <div className='formulario'>
            <h2>Login</h2>
            <form onSubmit={TryLogin}>
              <input style={{borderColor: emailBorder}} type="text" name='email' placeholder='Digite seu E-mail' onChange={(e) => setLoginEmail(e.target.value)} required/>
              <div className='password'>
                <input style={{borderColor: passwordBorder}} type={passwordVisibility ? "text" : "password"} name='senha' placeholder='Digite sua Senha' onChange={(e) => setLoginPassword(e.target.value)} required/>
                <FaRegEye onClick={TogglePasswordVisibility} style={passwordVisibility ? {display: "block"} : {display: "none"}}/>
                <FaRegEyeSlash onClick={TogglePasswordVisibility} style={passwordVisibility ? {display: "none"} : {display: "block"}}/>
              </div>
              <button>
                Entrar
              </button>
            </form>
            <span>Não tem uma conta? </span>
            <span onClick={goSingUp}>Registre-se</span>
          </div>
        </div>
    )
}

export default Login