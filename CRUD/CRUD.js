var selectedRow = null
function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null )
    insertNewRecord(formData);
    else
    resetForm();

}

function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["Dob"] = document.getElementById("Dob").value;
    formData["StartDate"] = document.getElementById("StartDate").value;
    // formData["EndDate"] = document.getElementById("EndDate").value;
    // formData["Upload"] = document.getElementById("Upload").value;
    return formData;

}


function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Dob;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.StartDate;
    // cell4 = newRow.insertCell(3);
    // cell4.innerHTML = data.EndDate;
    // cell5 = newRow.insertCell(4);
    // cell5.innerHTML = data.Upload;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                       <a>Delete</a>`;
}

function resetForm(){
    document.getElementById("name").value ="";
    document.getElementById("Dob").value ="";
    document.getElementById("StartDate").value ="";
    // document.getElementById("EndDate").value ="";
    // document.getElementById("Upload").value ="";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Dob").value = selectedRow.cells[0].innerHTML;
    document.getElementById("StartDate").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("EndDate").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("Upload").value = selectedRow.cells[0].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.Dob;
    selectedRow.cells[2].innerHTML = formData.StartDate;
    // selectedRow.cells[3].innerHTML = formData.EndDate;
    // selectedRow.cells[4].innerHTML = formData.Upload;

}

function onDelete(td){
    if(confirm('Are You Sure to Delete this Record ?')){
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
    }
}


    
