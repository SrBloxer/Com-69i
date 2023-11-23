class User {
    constructor (username, nombre, apellido, email, password) {
        this.username = username;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;

    }
}

const user = new User()

const regexName = /^[A-Za-z\s]{3,41}$/;
const regexUsername = /^[A-Za-z\s]{2,50}$/;
const regexEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;
const regexPass = /^(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;

const handleChange = (event) => {
    switch (event.target.id) {
        case 'username':
          if (!regexUsername.test(event.target.value)) {
            user.username = '';
          } else {
            user.username = event.target.value.toLowerCase();
          }
            break;
          case 'nombre':
            if (!regexName.test(event.target.value)) {
              user.nombre = '';
            } else {
              user.nombre = event.target.value.toLowerCase();
            } 
            break;
          case 'apellido':
            if (!regexName.test(event.target.value)) {
              user.apellido = '';
            } else {
              user.apellido = event.target.value.toLowerCase();
            }
            break;
          case 'email':
            if (!regexEmail.test(event.target.value)) {
              user.email = ''
            } else {
              user.email = event.target.value.toLowerCase();
            }
            break;
          case "password":
            if (!regexPass.test(event.target.value)) {
              user.password = ''
            } else {
              user.password = event.target.value
            }
            break;
          case 'repeatPassword':
            if (user.password !== event.target.value) {
              user.repeatPassword = ''
            } else {
              user.repeatPassword = event.target.value
            }
            break;    
    } 
}

const handleSubmit = (event) => {
  event.preventDefault();
  const saveUsers = JSON.parse(localStorage.getItem('users'))
  if (saveUsers) {
    saveUsers.push(user);
    const jsonUsers = JSON.stringify(saveUsers)
    localStorage.setItem('users', jsonUsers)
  } else {
    let users = []
    users.push(user)
    const jsonUsers = JSON.stringify(users)
    localStorage.setItem('users', jsonUsers) 
  }
}