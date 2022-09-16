function add(event) {
  var team = event.currentTarget.id.split("-")[0]; // home
  var addScoreText = event.currentTarget.id.split("-")[1]; // 1/2/3
  var addScore = parseInt(addScoreText);

  //get the big score in the span tag only the first (home or guest in home-score or guest-score name)
  teamName =
    event.currentTarget.parentElement.parentElement.children[1].children[0].id.split(
      "-"
    )[0]; //document.getElementById('home-1').parentElement.parentElement.children[1].children[0].id

  if (team === teamName) {
    scoreText = document.getElementById(team + "-score").innerText;
    currentScore = parseInt(scoreText);
    currentScore += addScore;
    document.getElementById(team + "-score").innerText = currentScore;
  } else {
    console.log("not working");
  }
}

homeTotal = document.getElementsByClassName("home-plus");
var plus1;
for (var a = 0; a < homeTotal.length; a++) {
  plus1 = a + 1;
  homeTotal[a].id = "home-" + plus1;
  homeTotal[a].addEventListener("click", add);
}

guestTotal = document.getElementsByClassName("guest-plus");
for (var i = 0; i < guestTotal.length; i++) {
  plus1 = i + 1;
  guestTotal[i].id = "guest-" + plus1;
  guestTotal[i].addEventListener("click", add);
}

// add a "New Game" button
var newBtn = document.getElementsByClassName("new-game")[0];
newBtn.addEventListener("click", () => {
  document.getElementById("home-score").innerText = 0;
  document.getElementById("guest-score").innerText = 0;
});

// highlight the leader
// add a few more counters (eg.period, fouls, timer)
// change the design
