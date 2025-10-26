// function editedbtn(){
//    var formse = document.getElementById('frm').innerHTML
// //    console.log(frm);
//     document.write(frm)

//     var done= document.getElementById('done')
//     if(button===done){
//       var =""

//     }
// }

var table = document.getElementById("studentTable");
var addForm = document.getElementById("addForm");
var editForm = document.getElementById("editForm");
var currentRow = null;

// Add student
addForm.addEventListener("submit", function(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var grade = document.getElementById("grade").value;

  var row = table.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = age;
  row.insertCell(2).innerText = grade;
  row.insertCell(3).innerHTML = 
    '<button onclick="editRow(this)">Edit</button> ' +
    '<button onclick="deleteRow(this)">Delete</button>';

  addForm.reset();
});

// Delete row
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  table.deleteRow(row.rowIndex);
}

// Edit row
function editRow(btn) {
  currentRow = btn.parentNode.parentNode;
  document.getElementById("editName").value = currentRow.cells[0].innerText;
  document.getElementById("editAge").value = currentRow.cells[1].innerText;
  document.getElementById("editGrade").value = currentRow.cells[2].innerText;
  editForm.classList.remove("hidden");
}

// Update details
editForm.addEventListener("submit", function(e) {
  e.preventDefault();
  currentRow.cells[0].innerText = document.getElementById("editName").value;
  currentRow.cells[1].innerText = document.getElementById("editAge").value;
  currentRow.cells[2].innerText = document.getElementById("editGrade").value;
  editForm.classList.add("hidden");
});

// Cancel edit
document.getElementById("cancelBtn").addEventListener("click", function() {
  editForm.classList.add("hidden");
});
