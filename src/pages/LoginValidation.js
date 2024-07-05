function Validation(values) {
    alert("")
    let error = {}
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(values.email === "") {
        error.email = "Please enter your email"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Incorrect username or password"
    }else{
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Please enter your password"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Incorrect password or email"
    }
    else{
        error.password = ""
    }
    return error;
}

export default Validation;