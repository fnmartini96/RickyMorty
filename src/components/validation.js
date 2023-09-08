const validator = (data) => {
    let errors = {}

    if(!data.email.includes('@')){
        errors.e1 = "Ingresa un email válido"
    }
    if(!data.email){
        errors.e2 = "El email no puede estar vacío"
    }
    if(!data.email.length > 35){
        errors.e3 = "El email debe tener menos de 35 caracteres"
    }
    if(!/\d/.test(data.password)){
        errors.p1 = "La contraseña debe tener al menos un número"
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = "La contraseña debe tener más de 6 y menos de 10 caracteres"
    }
    return errors;

}

export default validator;