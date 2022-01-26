import { useState } from  'react';

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [nombreError, setNombreError] = useState("");

    const [apellido, setApellido] = useState("");
    const [apellidoError, setApellidoError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [contrasena, setContrasena] = useState("");
    const [contrasenaError, setContrasenaError] = useState("");

    const [contrasena2, setContrasena2] = useState("");
    const [contrasenaError2, setContrasenaError2] = useState("");

    const validarNombre = (e) => {
        setNombre(e.target.value);
        if(e.target.value.length < 1) {
            setNombreError("El nombre es un campo obligatorio.");
        }else if(e.target.value.length < 2){
            setNombreError("El nombre debe tener mas de 2 caracteres.");
        }else{
            setNombreError('');
        }
    }

    const validarApellido = (e) => {
        setApellido(e.target.value);
        if(e.target.value.length < 1) {
            setApellidoError("El apellido es un campo obligatorio.");
        }else if(e.target.value.length < 2){
            setApellidoError("El apellido debe tener mas de 2 caracteres.");
        }else{
            setApellidoError('');
        }
    }

    const validarEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("El email es un campo obligatorio.");
        }else if(e.target.value.length < 5){
            setEmailError("El email debe tener mas de 5 caracteres.");
        }else{
            setEmailError('');
        }
    }

    const validarContrasena = (e) => {
        setContrasena(e.target.value);
        if(e.target.value.length < 1) {
            setContrasenaError("La contraseña es un campo obligatorio.");
        }else if(e.target.value.length < 8){
            setContrasenaError("La contraseña debe tener mas de 8 caracteres.");
        }else{
            setContrasenaError('');
        }
    }

    const validarContrasena2 = (e) => {
        setContrasena2(e.target.value);
        if((e.target.value.length < 1 )) {
            setContrasenaError2("La contraseña es un campo obligatorio.");
        }else if(e.target.value.length < 8){
            setContrasenaError2("La contraseña debe tener mas de 8 caracteres.");
        }else{
            setContrasenaError2('');
        }
    }

    const validarContrasenas = (e) => {
        const a=1;
        const b=2;
        if(( a == a)) {
            alert("Mensaje 1");
        }else{
            alert("Mensaje 2");
        }
    }

    const crearUsuario = (e) => {
        e.preventDefault();
    }
    
    return(
        <form onsubmit={ (e) => e.preventDefault() }>
            <div>                
                <label>Primer nombre: </label>
                <input type="text" value={nombre} onChange={ validarNombre }/>
                {
                    nombreError ?
                    <p style={{color:'red'}}>{ nombreError }</p> :
                    ''
                }               
            </div>
            <div>                
                <label>Segundo nombre: </label>
                <input type="text" value={apellido} onChange={ validarApellido }/>
                {
                    apellidoError ?
                    <p style={{color:'red'}}>{ apellidoError }</p> :
                    ''
                }               
            </div>
            <div>                
                <label>Email: </label>
                <input type="text" value={email} onChange={ validarEmail }/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }               
            </div>
            <div>                
                <label>Contraseña: </label>
                <input type="password" value={contrasena} onChange={ validarContrasena }/>
                {
                    contrasenaError ?
                    <p style={{color:'red'}}>{ contrasenaError }</p> :
                    ''
                }               
            </div>
            <div>                
                <label>Contraseña 2: </label>
                <input type="password" value={contrasena2} onChange={validarContrasena2}/>
                {
                    contrasenaError2 ?
                    <p style={{color:'red'}}>{ contrasenaError2 }</p> :
                    ''
                }
            </div>
        </form>
    )    
};

export default Formulario;