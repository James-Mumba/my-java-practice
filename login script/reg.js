document.getElementById("register").onclick = function () {
  var Email = document.getElementById("Email").value;
  var Password = document.getElementById("Password").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(Email, Password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      console.log(user);
      window.location.href = "landing.html";
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};

