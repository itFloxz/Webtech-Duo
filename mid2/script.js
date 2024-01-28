let matchResults = [
  {
    date: "Sunday 14 January 2024",
    home_team: "Man Utd",
    away_team: "Spurs",
    score: "2-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 31 December 2023",
    home_team: "Nott'm Forest",
    away_team: "Man Utd",
    score: "2-1",
    location: "The City Ground, Nottingham",
  },
  {
    date: "Wednesday 27 December 2023",
    home_team: "Man Utd",
    away_team: "Aston Villa",
    score: "3-2",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Saturday 23 December 2023",
    home_team: "West Ham",
    away_team: "Man Utd",
    score: "2-0",
    location: "London Stadium, London",
  },
  {
    date: "Sunday 17 December 2023",
    home_team: "Liverpool",
    away_team: "Man Utd",
    score: "0-0",
    location: "Anfield, Liverpool",
  },
  {
    date: "Saturday 9 December 2023",
    home_team: "Man Utd",
    away_team: "Bournemouth",
    score: "0-3",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Thursday 7 December 2023",
    home_team: "Man Utd",
    away_team: "Chelsea",
    score: "2-1",
    location: "Old Trafford, Manchester",
  },
  {
    date: "Sunday 3 December 2023",
    home_team: "Newcastle",
    away_team: "Man Utd",
    score: "1-0",
    location: "St. James' Park, Newcastle",
  },
];

// ดึง Element ของตาราง
const tableBody = document.getElementById("matchResultsBody");

// ดึง Element ของฟอร์มและเพิ่ม event
const form = document.getElementById("addResultForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // ดึงค่าจากอินพุตของฟอร์ม
  const date = document.getElementById("date").value;
  const homeTeam = document.getElementById("homeTeam").value;
  const awayTeam = document.getElementById("awayTeam").value;
  const score = document.getElementById("score").value;
  const location = document.getElementById("location").value;

  // สร้าง object ของ newMatchResult
  const newMatchResult = {
    date,
    home_team: homeTeam,
    away_team: awayTeam,
    score,
    location,
  };

  // เพิ่ม newMatchResult ลงใน Array
  matchResults.push(newMatchResult);

  // ทำการรีเซ็ตฟอร์มหลังจากการส่ง
  form.reset();

  // อัพเดทตาราง
  updateTable();
});

function updateTable() {
  tableBody.innerHTML = ""; // ลบแถวตารางที่มีอยู่

  // สร้างแถวของตาราง
  matchResults.forEach((match) => {
    const row = document.createElement("tr");

    // สร้างเซลล์วันที่
    const dateCell = document.createElement("td");
    dateCell.textContent = match.date;
    row.appendChild(dateCell);

    // สร้างเซลล์ทีม
    const vscell = document.createElement("td");
    vscell.textContent = `${match.home_team} vs ${match.away_team}`;
    row.appendChild(vscell);

    // สร้างเซลล์คะแนน
    const scoreCell = document.createElement("td");
    scoreCell.textContent = match.score;
    row.appendChild(scoreCell);

    // สร้างเซลล์สถานที่
    const locationCell = document.createElement("td");
    locationCell.textContent = match.location;
    row.appendChild(locationCell);

    // รวมแถวในตาราง
    tableBody.appendChild(row);
  });
}

// เรียกใช้ฟังก์ชันอัพเดทตารางเมื่อโค้ดเริ่มต้นทำงาน
updateTable();
