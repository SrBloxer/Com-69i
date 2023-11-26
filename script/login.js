const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');


const submitBtn = document.getElementById('submitButton');
const labelValidationName = document.getElementById('validationLabelName');

const regexLoginUser = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const regexLoginPass = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/;

const validateFields = () => {
    const isLoginEmailValid = regexLoginUser.test(emailInput.value);
    const isLoginPasswordValid = regexLoginPass.test(passwordInput.value);
  
    const validationLoginSuccesfull = isLoginEmailValid && isLoginPasswordValid;
  
    return validationLoginSuccesfull;
  }

const handleChange = (event) => {
    if (!regexLoginUser) {
    alert ('ingrese un usuario o contraseña válida')
    } else {
    alert ('ingrese un usuario o contraseña válida')
  }

  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const arrayUsers = JSON.parse(localStorage.getItem('users'));
    const foundUser = arrayUsers.find(user => user.email === email.value);
  
    if (foundUser.password === password.value) {
      alert('Ingresaste con exito');
      localStorage.setItem('authUser', JSON.stringify(foundUser))
      window.location.href = './index.html'
    } else {
      alert('Las credenciales ingresadas no son validas')
    }
  
  }
