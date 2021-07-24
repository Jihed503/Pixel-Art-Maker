const submit = document.getElementsByTagName("input")[2];
const table = document.querySelector("table");

submit.addEventListener("click", function (e) {
  const height = document.getElementsByTagName("input")[0].value;
  const width = document.getElementsByTagName("input")[1].value;

  e.preventDefault();
  tr = "";
  for (let i = 1; i <= height; i++) {
    td = "";
    for (let j = 1; j <= width; j++) {
      td += "<td></td>";
    }
    tr += "<tr>" + td + "</tr>";
  }
  console.log(tr);
  table.innerHTML = tr;
});

table.addEventListener("click", function (e) {
  const color = document.getElementById("colorPicker").value;
  e.preventDefault();
  e.target.style.backgroundColor = color;
});
