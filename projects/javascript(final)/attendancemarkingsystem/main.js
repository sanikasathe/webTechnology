let attendanceList = [];
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

// SUBMIT ATTENDANCE
function markAttendance() {
  let prn = document.getElementById("prn").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let work = document.getElementById("work").value;

  if (prn === "" || date === "" || time === "") { alert("Fill all fields"); return; }
  if (slot === "") { alert("Select Type"); return; }
  if (faculty === "") { alert("Select Faculty"); return; }
  if (work === "") { alert("Select Work"); return; }

  let record = prn + " | " + date + " | " + time + " | " + slot + " | " + faculty + " | " + work;
  attendanceList.push(record);

  document.getElementById("result").innerHTML = attendanceList.join("<br>");
  alert("Attendance submitted successfully!");
}