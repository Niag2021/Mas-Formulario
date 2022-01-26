import { useState } from "react";

const valoresForm = {
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    confirmar_contrasena: ''
  }

const erroresInicial = {
    errorNom: '',
    errorAp: '',
    errorEm: '',
    errorContr: '',
    errorConfCont: ''
}  

const MasForm = props => {

    const [inputs, setInputs] = useState (valoresForm);
    const [errores, setErrores] = useState (erroresInicial);

    const actualizarForm = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });

        if ( name === "nombre" ){
            if ( value.length < 2 ){
                setErrores({
                    ...errores, 
                    errorNom: "First Name must be at least 2 characters"
                });
            } else {
                setErrores({
                    ...errores, 
                    errorNom: ""            
                });
            }  
        };

        if ( name === "apellido" ){
            if ( value.length < 2 ){
                setErrores({
                    ...errores, 
                    errorAp: "Last Name must be at least 2 characters"
                });
            } else {
                setErrores({
                    ...errores, 
                    errorAp: ""        
                });
            }         
        };

        if ( name === "email" ){
            if ( value.length < 5 ){
                setErrores({
                    ...errores, 
                    errorEm: "Email must be at least 5 characters"
                });
            } else {
                setErrores({
                    ...errores, 
                    errorEm: ""        
                });
            } 
        };

        if ( name === "contrasena" ){
            if ( value.length < 8 ){
                setErrores({
                    ...errores, 
                    errorContr: "Password must be at least 8 characters"
                });
            } else {
                setErrores({
                    ...errores, 
                    errorContr: ""        
                });
            } 
        };

        if ( name === "confirmar_contrasena" ){
            if ( inputs.contrasena !== value ){
                setErrores({
                    ...errores, 
                    errorConfCont: "Passwords must match"
                });
            } else {
            setErrores({
                ...errores, 
                errorConfCont: ""        
                });
            } 
        };
    }

    const enviarForm = (e) => {
    e.preventDefault();
    setInputs(valoresForm);
    }
    
    return (
        <form onSubmit={enviarForm}>
            <div className="DivForm">
                <label htmlFor="nombre">First Name:</label>
                <input className="InNo" type="text" name="nombre" value={inputs.nombre} onChange={actualizarForm}/>
            </div> 
            {
            errores &&
            <p>{errores.errorNom}</p>
            }           
            <div className="DivForm">              
                <label htmlFor="apellido">Last Name:</label>
                <input className="InAp" type="text" name="apellido" value={inputs.apellido} onChange={actualizarForm}/>
            </div>
            {
                errores && 
                <p>{errores.errorAp}</p>
            } 
            <div className="DivForm">
                <label htmlFor="email">Email:</label>
                <input className="InEm" type="email" name="email" value={inputs.email} onChange={actualizarForm}/>
            </div>
            {
                errores &&
                <p>{errores.errorEm}</p>
            } 
            <div className="DivForm">
                <label htmlFor="contrasena">Password:</label>
                <input className="InCon" type="password" name="contrasena" value={inputs.contrasena} onChange={actualizarForm}/>
            </div>
            {
                errores &&
                <p>{errores.errorContr}</p>
            } 
            {
                errores &&
                <p>{errores.errorConfCont}</p>
            }
            <div className="DivForm">
                <label htmlFor="confirmar_contrasena">Confirm Password:</label>
                <input className="InConfCont" type="password" name="confirmar_contrasena" value={inputs.confirmar_contrasena} onChange={actualizarForm}/>
            </div>       
        </form>
    );
}

export default MasForm;