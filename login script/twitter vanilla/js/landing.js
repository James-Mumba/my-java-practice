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
    //
    //getting data from firestore collection
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

    // collecting user and email to display on landing page from firestore (the code above)

    //
    // the tweet data/
    //sending the tweet to firestore (the code below)

    // document.getElementById("send").onclick = function () {
    //   var tweet = document.getElementById("tweet").value;
    //   var timestamp = new Date();

    //   firebase
    //     .firestore()
    //     .collection("Tweets")
    //     .doc(uid)
    //     .set({
    //       post: tweet,
    //     })

    //     .then(() => {
    //       console.log(tweet);
    //     })
    //     .catch((error) => {
    //       let errorMessage = error.message;
    //       console.log(errorMessage);
    //     });
    // };

    /* here is the code for logging a user out */
    /* log out code ends here*/

    /* below is code for making sure no one can go back to the landing page */
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User

    // sending tweet  to firestore

    document.getElementById("send").onclick = function () {
      let tweet = document.getElementById("tweet").value;
      let timestamp = new Date();

      let send = firebase.firestore().collection("Tweets").doc();
      send
        .set({
          tweets: tweet,
          userId: uid,
          tweetId: send.id,
          time: timestamp,
        })
        .then(() => {
          window.location.reload();
        });
    };
    //

    //Display the tweet
    //
    firebase
      .firestore()
      .collection("Users")
      .get()
      .then((querryUser) => {
        querryUser.forEach((userDoc) => {
          let user = userDoc.data().userName;
          let userId = userDoc.data().userId;

          firebase
            .firestore()
            .collection("Tweets")
            .get()
            .then((querryTweet) => {
              let content = "";
              querryTweet.forEach((tweetDoc) => {
                let tweetUserId = tweetDoc.data().userId;
                let tweet = tweetDoc.data().tweets;
                let tweetId = tweetDoc.data().tweetId;

                // console.log(tweet);

                if (userId == tweetUserId) {
                  content +=
                    '<div class=tweet Id="tweetContent" onclick="navigateToTweetPage(\'' +
                    tweetId +
                    "')\">";
                  content += "<div class='header'>";
                  content += "<p>" + user + "</p>";
                  content += "<p>" + "@" + user + "</p>";
                  content += "</div>";

                  content += '<div class="tweetContent">';
                  content += "<p>" + tweet + "</p>";
                  content += "</div>";

                  content += '<div class="tweetOperations">';
                  content += '<a href="">like <a>';
                  content += '<a href =""> comment <a/>';
                  content += "</div>";
                  content += "</div>";
                }
              });
              $("#container").append(content); //or $('.tweetcontainer').append(content);
            });
        });
      });

    window.navigateToEliteBook = function (tweetid) {
      console.log(tweetid);

      window.location.href = "tweet.html" + "?" + tweetid;
    };
  } else {
    window.location.href = "/login.html";
  }
});
