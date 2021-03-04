document.getElementById('cinnabun').addEventListener('click', alt)

let points = 0

function alt () {
  alert("Happy")
}

function game () {
  alert("w")
  points = parseInt(points)
  points = points + 1

  if (points > 50) {
  document.getElementById('cinnabun').style.backgroundImage = "url('./Images/dress.png')"
  } else if (points > 100) {
    document.getElementById('cinnabun').style.backgroundImage = "url('./Images/bubble.png')"
  } else if (userInput > 150) {
    document.getElementById('cinnabun').style.backgroundImage = "url('./Images/toy.png')"
  } else {
    document.getElementById('great').innerHTML = 'Great job!'
  }
  
  //for (points = 0; points < 150; points++) {
  document.getElementById('points').innerHTML = 'Your points are' + points +
  //}
}