let Firstname = false;
let Lastname = false;
let Username = false;
let Password = false;

function registration(event) {
  event.preventDefault();
  let FirstnameInput = document.getElementById("Firstname").value;
  let LastnameInput = document.getElementById("Lastname").value;
  let UsernameInput = document.getElementById("Username").value;
  let PasswordInput = document.getElementById("password").value;

  let userData = localStorage.getItem("userData")

  if (userData === null || userData.length === 0) {
    let users = [];
    users.push({
      Firstname: FirstnameInput,
      Lastname: LastnameInput,
      Username: UsernameInput,
      Password: PasswordInput,
    });
    console.log(Firstname,Lastname,Username,Password)

    if (Firstname && Lastname && Username && Password) {
      localStorage.setItem("userData", JSON.stringify(users));
    }


  }
  
  if (userData.length > 0 ) {
    userData = JSON.parse(userData);
    userData.push({
      Firstname: FirstnameInput,
      Lastname: LastnameInput,
      Username: UsernameInput,
      Password: PasswordInput,
    });
    console.log(Firstname, Lastname, Username, Password);
    if (Firstname && Lastname && Username && Password) {
      localStorage.setItem("userData", JSON.stringify(users));
    }
  }
}

function FirstnameValidator() {
  let Firstname = document.getElementById("Firstname").value;
  const FirstnameRegex = /^[A-Za-z]{3,10}$/gi;
  let FirstnameValid = document.getElementById("FirstnameValid");

  if (!Firstname.match(FirstnameRegex)) {
    FirstnameValid.style.color = "red";
    FirstnameValid.innerHTML = "incorrect format";
    Firstname = false;
  } else {
    FirstnameValid.innerHTML = "";
    Firstname = true;
  }
  console.log(Firstname);
}

function LastnameValidator() {
  let Lastname = document.getElementById("Lastname").value;
  const LastnameRegex = /^[A-Za-z]{3,10}$/gi;
  let LastnameValid = document.getElementById("LastnameValid");

  if (!Lastname.match(LastnameRegex)) {
    LastnameValid.style.color = "red";
    LastnameValid.innerHTML = "incorrect format";
    Lastname = false;
  } else {
    LastnameValid.innerHTML = "";
    Lastname = true;
  }
}

function Usernamevalidator() {
  let Username = document.getElementById("Username").value;
  const UsernameRegex = /^[A-Za-z]{3,10}$/gi;
  let UsernameValid = document.getElementById("UsernameValid");

  if (!Username.match(UsernameRegex)) {
    UsernameValid.style.color = "red";
    UsernameValid.innerHTML = "incorrect fortmat";
    Username = false;
  } else {
    UsernameValid.innerHTML = "";
    Username = true;
  }
}

function passwordValidator() {
  let password = document.getElementById("password").value;
  //   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,15}$/;
  const passwordRegex = /^[A-Z].{0,8}$/;
  let passwordValid = document.getElementById("passwordValidator");

  if (!password.match(passwordRegex)) {
    passwordValid.style.color = "red";
    passwordValid.innerHTML = "incorrect format";
    Password = false;
  } else {
    passwordValid.innerHTML = "";
    Password = true;
  }
}
