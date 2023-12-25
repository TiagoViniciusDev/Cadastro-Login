import './Singup.css'
import Alert from "../Alert/Alert"

import { useState } from "react"
import { useNavigate } from 'react-router-dom'

import { useContext } from 'react';
import { FormContext } from '../../context/context';

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Singup(){

    const navigate = useNavigate()

    function goLogin(){
        navigate("/Cadastro-Login")
    }

    const {passwordVisibility, TogglePasswordVisibility, AlertMensage, setAlertText} = useContext(FormContext)

    const [email, setEmail] = useState("")
    const [emailConfirm, setEmailConfirm] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const [emailBorder, setEmailBorder] = useState("black")
    const [passwordBorder, setPasswordBorder] = useState("black")

    function RegisterUser(e){
        e.preventDefault()
        setEmailBorder("black")
        setPasswordBorder("black")

        if(localStorage.getItem(email)){ //Verificando se o email já esta registrado
            setEmailBorder("red")
            setAlertText("O E-mail já está registrado")
            AlertMensage()
            return
        }

        if(email !== emailConfirm){
            setEmailBorder("red")
            setAlertText("Os E-mails não correspondem")
            AlertMensage()
            return
        }
        if(password !== passwordConfirm){
            setPasswordBorder("red")
            setAlertText("As senhas não correspondem")
            AlertMensage()
            return
        }

        if(password.length < 4){
            setPasswordBorder("red")
            setAlertText("Sua senha deve conter pelo menos 4 caracteres")
            AlertMensage()
            return
        }

        localStorage.setItem(email, password)
        navigate("/")
        setAlertText("Usuário registrado com sucesso")
        AlertMensage()
    }

    return(
        <div className="Singup">
            <Alert />
            <div className="formulario">
                <h2>Singup</h2>
                <form onSubmit={RegisterUser}>
                <input style={{borderColor: emailBorder}} type="email" name="email" placeholder='Digite seu E-mail' onChange={(e) => setEmail(e.target.value)} required/>
                <input style={{borderColor: emailBorder}} type='email' name="email" placeholder='Confirme seu E-mail' onChange={(e) => setEmailConfirm(e.target.value)} required/>
                <div className="password">
                    <input style={{borderColor: passwordBorder}} type={passwordVisibility ? "text" : "password"} name="senha" placeholder='Digite sua Senha' onChange={(e) => setPassword(e.target.value)} required/>
                    <FaRegEye onClick={TogglePasswordVisibility} style={passwordVisibility ? {display: "block"} : {display: "none"}}/>
                    <FaRegEyeSlash onClick={TogglePasswordVisibility} style={passwordVisibility ? {display: "none"} : {display: "block"}}/>
                </div>
                <div className="password">
                    <input style={{borderColor: passwordBorder}} type={passwordVisibility ? "text" : "password"} name="senha" placeholder='Confirme sua Senha' onChange={(e) => setPasswordConfirm(e.target.value)} required/>
                    <FaRegEye onClick={TogglePasswordVisibility} style={passwordVisibility ? {display: "block"} : {display: "none"}}/>
                    <FaRegEyeSlash onClick={TogglePasswordVisibility} style={passwordVisibility ? {display: "none"} : {display: "block"}}/>
                </div>
                <button>
                    Registrar
                </button>
                </form>
                <span>Já tem uma conta? </span>
                <span onClick={goLogin}>Entre</span>
            </div>
        </div>
    )
}

export default Singup