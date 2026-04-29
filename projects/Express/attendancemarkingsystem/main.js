let slot = "";
let faculty = "";

// SLOT SELECT
function setType(value) {
  slot = value;
}

// FACULTY SELECT
function setFaculty(btn, name) {
  faculty = name;
  document.querySelectorAll(".row button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

// SUBMIT
function markAttendance() {
  let prn = document.getElementById("prn").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let work = document.getElementById("work").value;

  if (!prn || !date || !time || !slot || !faculty || !work) {
    alert("Fill all fields");
    return;
  }

  fetch("/api/attendance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prn, date, time, slot, faculty, work })
  });

  alert("Attendance submitted");
}