firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    var selectId = decodeURIComponent(window.location.search);
    var selectTweetId = selectId.substring(1);
    console.log(selectId);
    console.log(selectTweetId);

    document.getElementById("click").onclick = function () {
      let comment = document.getElementById("comment").value;
      let timestamp = new Date();

      let click = firebase.firestore().collection("comment").doc();
      click
        .set({
          userId: uid,
          tweetId: selectTweetId,
          commentId: click.id,
          comment: comment,
          time: timestamp,
        })

        .then(() => {
          window.location.reload();
        })

        .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    };
    //display user and email
    // firebase;

    //   .firestore()
    //   .collection("Users")
    //   .doc(uid)
    //   .get()
    //   .then((doc) => {

    //     var userName = doc.data().userName;
    //     var userEmail = doc.data().userEmail;
    //     document.getElementById("welcome2").innerHTML =
    //       userName + " " + userEmail;
    //   })

    //   .catch((error) => {
    //     // An error happened.
    //     var errorMessage = error.message;
    //     console.log(errorMessage);
    //   });

    firebase
      .firestore()
      .collection("Users")
      .get()
      .then((querryUser) => {
        querryUser.forEach((userDoc) => {
          let user = userDoc.data().userName;
          let userId = userDoc.data().userId;

          console.log(user);

          firebase
            .firestore()
            .collection("comment")
            .get()
            .then((querryComment) => {
              let content = "";

              querryComment.forEach((commentDoc) => {
                let comment = commentDoc.data().comment;
                let UserId = commentDoc.data().userId;
                let time = commentDoc.data().time;

                console.log(comment);

                if (userId == UserId) {
                  content += '<div class="smurf" id="smurf">';
                  content += '<div class="header">';
                  content += "<p>" + user + "</p>";
                  content += "<p>" + "@" + user + "</P>";
                  content += "</div>";

                  content += '<div class="commentator"> ';
                  content += "<p>" + comment + "</p>";
                  content += "</div>";

                  content += '<div class = "reply">';
                  content += '<a href="">like </a>';
                  content += '<a href="">reply </a>';
                  content += "</div>";
                  content += "</div>";
                }
              });
              $("#mojojojo").append(content);
            });
        });
      });
    //

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
          let time = tweetDoc.data().time;

          document.getElementById("mytweet").innerHTML = tweet + " " + tweetId;

          if ((user == tweetUserId) & (tweetId == selectTweetId)) {
            console.log(tweetId);
            content += '<div class="surf" id="tweetComment">';
            content += "<p>" + "@" + user + "</p>";
            content += "<p>" + tweet + "</p>";
            content += "</div>";
          }
        });
        $("#comment").append(content);
      });

    //
    //
    firebase
      .firestore()
      .collection("comment")
      .get()
      .then((querryComment) => {
        querryComment.forEach((commentDoc) => {
          let commentId = commentDoc.data().userId;
          let comment = commentDoc.data().comment;
        });
      });
  }
});

// tweet
// input
// button and comments below
