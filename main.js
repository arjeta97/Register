function addRow() {
    var table = document.getElementById("my_table");

    var newRow = table.insertRow(-1);


    //new tds
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');



    //elements of tds
    var newCheckbox = document.createElement('input');
    var newName = document.createElement('input');
    var newPosition = document.createElement('input');
    var newAge = document.createElement('input');
    var newAdress = document.createElement('input'); 
    var newDelete = document.createElement('button');


    //specify elements
    newCheckbox.type = 'checkbox'; 
    newName.type = 'textbox';
    newPosition.type = 'textbox';
    newAge.type = 'number';
    newAdress.type = 'textbox';
    newDelete.type = 'button'; 
    newDelete.innerHTML = "x";
    
    newDelete.classList.add('btn', 'btn-danger', 'rounded', 'px-3');
    newDelete.onclick = function() {deleteRow(this)};

    //assign to tds
    td1.appendChild(newCheckbox);
    td2.appendChild(newName);
    td3.appendChild(newPosition);
    td4.appendChild(newAge);
    td5.appendChild(newAdress);
    td6.appendChild(newDelete);
    td1.classList.add('p-4');


    //assign tds to the new row
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(td3);
    newRow.appendChild(td4);
    newRow.appendChild(td5);
    newRow.appendChild(td6);
    
}

function deleteRow(r){ 
    var i = r.parentNode.parentNode.rowIndex; 
    document.getElementById("my_table").deleteRow(i);
}


