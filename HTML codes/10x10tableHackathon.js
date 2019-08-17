var table = document.getElementById("table");

  loadTable();

  function loadTable(input) {
    
    table.innerHTML = '';
    var totalRows = 10;
    var totalColumns = 10;
    var x = 0;


    for (var r = 0; r < totalRows; r++) {
      var row = document.createElement("tr");

      for (var c = 0; c < totalColumns; c++) {
        var cell = document.createElement("td");   

        x = x + 1;

        if (input) {
          if (x % input === 0) {
            cell.innerText = '**'
          } else  {
            cell.innerText = x;
          }
        } else {
        cell.innerHTML = x;
        }
        
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  }

  document.getElementById("button").addEventListener("click", starMultiples);

  function starMultiples() {

    input = document.getElementById("input").value;
        console.log(input);

    loadTable(input);
  }