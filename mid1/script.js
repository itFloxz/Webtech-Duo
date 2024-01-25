document.addEventListener("DOMContentLoaded", () => {
  const tableData = [
    {
      team: "Liverpool",
      played: 20,
      win: 13,
      draw: 6,
      loss: 1,
      goals_for: 43,
      goals_against: 18,
      goal_difference: 25,
      points: 45,
    },

    {
      team: "Aston Villa",
      played: 20,
      win: 13,
      draw: 3,
      loss: 4,
      goals_for: 43,
      goals_against: 27,
      goal_difference: 16,
      points: 42,
    },

    {
      team: "Manchester City",
      played: 19,
      win: 12,
      draw: 4,
      loss: 3,
      goals_for: 45,
      goals_against: 21,
      goal_difference: 24,
      points: 40,
    },

    {
      team: "Arsenal",
      played: 20,
      win: 12,
      draw: 4,
      loss: 4,
      goals_for: 37,
      goals_against: 20,
      goal_difference: 17,
      points: 40,
    },

    {
      team: "Tottenham Hotspur",
      played: 20,
      win: 12,
      draw: 3,
      loss: 5,
      goals_for: 42,
      goals_against: 29,
      goal_difference: 13,
      points: 39,
    },

    {
      team: "West Ham United",
      played: 20,
      win: 10,
      draw: 4,
      loss: 6,
      goals_for: 33,
      goals_against: 30,
      goal_difference: 3,
      points: 34,
    },
    {
      team: "Brighton",
      played: 20,
      win: 8,
      draw: 7,
      loss: 5,
      goals_for: 38,
      goals_against: 33,
      goal_difference: 5,
      points: 31,
    },
    {
      team: "Manchester United",
      played: 20,
      win: 10,
      draw: 1,
      loss: 9,
      goals_for: 22,
      goals_against: 27,
      goal_difference: -5,
      points: 31,
    },
  ];
});

document.getElementById("Liverpool").textContent = "Liverpool";
document.getElementById("detailsLiver").textContent = "20";
document.getElementById("winLiver").textContent = "13";
document.getElementById("drawLiver").textContent = "20";
document.getElementById("lossLiver").textContent = "1";
document.getElementById("goals_forLiver").textContent = "43";
document.getElementById("goal_againstLiver").textContent = "18";
document.getElementById("goal_differenceLiver").textContent = "25";
document.getElementById("pointsLiver").textContent = "45";

document.getElementById("Aston Villa").textContent = "Aston Villa";
document.getElementById("detailsaston").textContent = "20";
document.getElementById("winaston").textContent = "13";
document.getElementById("drawaston").textContent = "3";
document.getElementById("lossaston").textContent = "4";
document.getElementById("goals_foraston").textContent = "43";
document.getElementById("goal_againstaston").textContent = "27";
document.getElementById("goal_differenceaston").textContent = "16";
document.getElementById("pointsaston").textContent = "42";

document.getElementById("Manchester City").textContent = "Manchester City";
document.getElementById("detailsManches").textContent = "19";
document.getElementById("winManches").textContent = "12";
document.getElementById("drawManches").textContent = "4";
document.getElementById("lossManches").textContent = "3";
document.getElementById("goals_forManches").textContent = "45";
document.getElementById("goals_againtsManches").textContent = "21";
document.getElementById("goal_differenceManches").textContent = "24";
document.getElementById("pointsManches").textContent = "40";
