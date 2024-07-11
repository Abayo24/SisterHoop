function Validation(values) {
    let errors = {};
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (values.email === "") {
        errors.email = "Please enter your email";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Incorrect username or password";
    }

    if (values.password === "") {
        errors.password = "Please enter your password";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Incorrect password or email";
    }

    return errors;
}

export default Validation;