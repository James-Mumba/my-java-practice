// document.getElementById("click").onclick = function () {
//   window.location.href = "landing.html" + "?" + "click";
// };
document.getElementById("click").onclick = function () {
  var mail = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(mail, pass)
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
    });
};
