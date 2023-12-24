import './Alert.css'
import { IoIosClose } from "react-icons/io";

import { useContext } from 'react';
import { FormContext } from '../../context/context';

function Alert(){

    const {alert, alertText, closeAlertMensage} = useContext(FormContext)

    return(
        <div className={`Alert ${alert ? "" : "displayNone"}`}>
            <div className='top'>
                <div className='text'>
                    <p>{alertText}</p>
                </div>
                <IoIosClose onClick={() => closeAlertMensage()}/>
            </div>
            <div className='line'></div>
        </div>
    )
}

export default Alert