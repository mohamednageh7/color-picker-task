function makeGrid() {

  // Select size input
  var tableRow = document.getElementById('inputHeight').value;
  var tableColum = document.getElementById('inputWidth').value;
  // When size is submitted by the user, call makeGrid()
  var table = document.getElementById('pixelCanvas');
  var tableData = '';

  for (var i = 0; i < tableColum; i++) {
    tableData += '<tr>'
    for (var j = 0; j < tableRow; j++) {
      tableData += '<td></td>'
    }
    tableData += '</tr>'
  }
  table.innerHTML = tableData
  colorChange();

}

function colorChange() {
  // Select color input
  const tds = document.getElementsByTagName('td');
  for (var i = 0; i < tds.length; i++) {
    tds[i].addEventListener('click', function (e) {
      var current = e.target
      current.style.backgroundColor = document.getElementById('colorPicker').value
    })
  }
}


