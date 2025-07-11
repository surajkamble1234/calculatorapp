
let labels = [
  ['1', '2', '3', '+'],
  ['4', '5', '6', '-'],
  ['7', '8', '9', '*'],
  ['0', '/', '.', '=']
];

function calcapp() {
  let str = "";
  let first, second, result;
  let choice = 0;
  let grid = document.createElement("table");

  for (let i = 0; i < 4; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      let col = document.createElement("td");
      let btn = document.createElement("input");
      btn.type = "button";
      btn.value = labels[i][j];

      btn.addEventListener('click', function () {
        let inputtext = document.getElementById("txt");
        str = inputtext.value;

        if (this.value === "+") {
          first = inputtext.value;
          inputtext.value = "";
          choice = 1;
        } else if (this.value === "-") {
          first = inputtext.value;
          inputtext.value = "";
          choice = 2;
        } else if (this.value === "*") {
          first = inputtext.value;
          inputtext.value = "";
          choice = 3;
        } else if (this.value === "/") {
          first = inputtext.value;
          inputtext.value = "";
          choice = 4;
        } else if (this.value === "=") {
          second = inputtext.value;
          switch (choice) {
            case 1:
              result = parseFloat(first) + parseFloat(second);
              break;
            case 2:
              result = parseFloat(first) - parseFloat(second);
              break;
            case 3:
              result = parseFloat(first) * parseFloat(second);
              break;
            case 4:
              result = parseFloat(first) / parseFloat(second);
              break;
            default:
              result = "Error";
          }
          inputtext.value = result;
        } else {
          str += this.value;
          inputtext.value = str;
        }
      });

      col.appendChild(btn);
      row.appendChild(col);
    }
    grid.appendChild(row);
  }

  document.getElementById("panel").appendChild(grid);
}