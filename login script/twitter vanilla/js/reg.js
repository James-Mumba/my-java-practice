document.getElementById("register").onclick = function () {
  var userName = document.getElementById("user").value;
  var Email = document.getElementById("Email").value;
  var Password = document.getElementById("Password").value;
  //
  //
  firebase
    .auth()
    .createUserWithEmailAndPassword(Email, Password)
    .then((userCredential) => {
      // Signed in
      let uid = userCredential.user.uid;
      var user = userCredential.user;
      // ...
      console.log(user);

      // collecting data from firestore
      // collecting data from firestore
      // collecting data from firestore

      firebase
        .firestore()
        .collection("Users")
        .doc(uid)
        .set({
          userId: uid,
          userName: userName,
          userEmail: Email,
        })
        .then(() => {
          window.location.href = "/landing.html";
        })
        .catch((error) => {
          let errorMessage = error.Message;
          console.log(errorMessage);
        });
      // window.location.href = "landing.html";
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};
// collecting data from firestore
