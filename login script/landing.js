/* this comes after to make sure no one re opens a closed page */
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("log").onclick = function () {
      //   var log = document.getElementById("log").value;

      /* here is the code for logging a user out below */

      firebase

        .auth()
        .signOut()
        .then(() => {
          console.log("Sign Out Successful");
          window.location.href = "/login.html";
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    };
    var uid = user.uid;
    //

    firebase

      .firestore()
      .collection("Users")
      .doc(uid)
      .get()
      .then((doc) => {
        var userName = doc.data().userName;
        var userEmail = doc.data().userEmail;
        document.getElementById("welcome").innerText =
          userName + " " + userEmail;
      })

      .catch((error) => {
        // An error happened.
        var errorMessage = error.message;
        console.log(errorMessage);
      });

    // collecting user and email to display on landing page from firestore above

    //
    // the tweet data
    //
    document.getElementById("send").onclick = function () {
      var tweet = document.getElementById("tweet").value;

      firebase
        .firestore()
        .collection("Tweets")
        .doc(uid)
        .set({
          post: tweet,
        })

        .then(() => {
          console.log(tweet);
        })
        .catch((error) => {
          let errorMessage = error.message;
          console.log(errorMessage);
        });
    };
  }

  /* here is the code for logging a user out */
  /* log out code ends here*/

  /* below is code for making sure no one can go back to the landing page */

  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  else {
    window.location.href = "/login.html";
  }
});
