function findAge() {
  let name = document.getElementById("name").value;
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);

  let today = new Date();

  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let age = currentYear - year;
document.getElementById("result").innerText =
    name + " is " + age + " years old";
}