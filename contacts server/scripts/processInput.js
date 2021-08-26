/* processInput.js */


// patterns for input validation
const idPat = new RegExp('^[0-9]+$');
const namePat = new RegExp('^[a-zA-Z]+$');
const phonePat = new RegExp('^[(]?[0-9]{3}([)-.\s]{1})?[0-9]{3}([-.\s]{1})?[0-9]{4}$');
const emailPat = new RegExp('^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
const webPat = new RegExp('^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$');

// contact object constructor
function Contact(key, id, first, last, phone, mobile, fax, email, web) {
	this.key = key;  // only used for update
	this.id = id;
	this.first = first;
	this.last = last;
	this.phone = phone;
	this.mobile = mobile;
	this.fax = fax;
	this.email = email;
	this.web = web;
	this.getName = function() {return `${this.first} ${this.last}`;};
	this.toString = function() {
		const str = `[ID: ${this.id}, Name: ${this.name}, Phone: ${this.phone}, Mobile: ${this.mobile}, Fax: ${this.fax}, Email: ${this.email}, Website: ${this.web}]`;
		return str;
	};
}

// contact object using full name
function createContact(id, name, phone, mobile, fax, email, web) {
	var nameStr = [];
	nameStr = this.name.split(" ", 2);
	var temp = new Contact(this.id, this.nameStr[0], this.nameStr[1], this.phone, this.mobile, this.fax, this.email, this.web);
	return temp;
}


//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// called on "create contacts table" button press (after number input),
//    provides user editable table with specified number of rows

function addContactsTable() {
	var numRows = document.getElementById('addContactsNum').value;
	//console.log("addContactsTable() called. Number of rows : " + numRows + "\n");
	
	// edit existing elements
	var button = document.getElementById('addContactsNumSubmit');
	button.setAttribute("style", "display: none;")
	button.innerHTML = 'Add contacts';
	button.setAttribute("id", "editButton")
	button.setAttribute("onclick", "addContacts()")
	var table =  document.getElementById('insertTable');
	table.setAttribute("style", "display: none;")
	table.setAttribute("class", "TB")
	table.value = numRows;
	// remove elements
	var temp = document.getElementById('inputPrompt');
	temp.innerHTML = "";
	temp.remove()
	var temp = document.getElementById('addContactsNum');
	temp.remove()
	var temp = document.getElementById('inputRow');
	temp.remove()
	
	var text = document.createElement("p");
	text.innerHTML = "	* required"
	text.setAttribute("id","req");
	text.setAttribute("class", "Info");
	document.getElementById("insertMain").prepend(text);
	var row = table.insertRow(0);
	row.class = "B";
	var cell = document.createElement("th");
	cell.innerHTML = "* ID";
	cell.class = "B";
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.innerHTML = "First Name";
	cell.class = "B";
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.innerHTML = "Last Name";
	cell.class = "B";
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.innerHTML = "Phone";
	cell.class = "B";
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.innerHTML = "Mobile";
	cell.class = "B";
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.innerHTML = "Fax";
	cell.class = "B";
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.innerHTML = "Email";
	cell.class = "B";
	row.appendChild(cell);
	cell = document.createElement("th");
	cell.innerHTML = "Website";
	cell.class = "B";
	row.appendChild(cell);
	
	// insert specified number rows containing input text box
	var input;
	for(i = 0; i < numRows; i++) {
		row = table.insertRow((i + 1));
		row.class = "B";
		row.id = 'row' + i;
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = 'id' + i;
		input.setAttribute("required", "required");
		input.setAttribute("class", "Required");
		cell.appendChild(input);
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = 'first' + i;
		cell.appendChild(input);
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = 'last' + i;
		cell.appendChild(input);
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = 'phone' + i;
		cell.appendChild(input);
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = 'mobile' + i;
		cell.appendChild(input);
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = 'fax' + i;
		cell.appendChild(input);
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = 'email' + i;
		cell.appendChild(input);
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = 'web' + i;
		cell.appendChild(input);
	}
	table.setAttribute("style", "display: table;")
	button.setAttribute("style", "display: inline;")
	//console.log("addContactsTable() finoshed.  button onclick = " + button.onclick.value);
}


//---------------------------------------------------------------------------------------------------


function insertValidate() {
	var isValid = true;
	var table = document.getElementById('insertTable');
	var numContacts = table.value;
	var id;
	var first;
	var last;
	var phone;
	var mobile;
	var fax;
	var email;
	var web;
	//console.log("insertValidate().  Number of contact inputs: " + numContacts);
	for(i = 0; i < numContacts; i++) {
		id = document.getElementById(`id${i}`).value;
		first = document.getElementById(`first${i}`).value;
		last = document.getElementById(`last${i}`).value;
		phone = document.getElementById(`phone${i}`).value;
		mobile = document.getElementById(`mobile${i}`).value;
		fax = document.getElementById(`fax${i}`).value;
		email = document.getElementById(`email${i}`).value;
		web = document.getElementById(`web${i}`).value;
		//console.log("Validating... ID = " + id + ", First = " + first + ", Last =  " + last + "\n"); 
		if(!idPat.test(id)) {
			alert("Error, ID number is invalid.");
			document.getElementById(`id${i}`).setAttribute("class", "Invalid");
			isValid = false;
		} else if(!namePat.test(first) && first !== "" && first !== 'none') {
			console.log("First name invalid. Value = " + first + "\n");
			alert("Error, first name is invalid.");
			document.getElementById(`first${i}`).setAttribute("class", "Invalid");
			isValid = false;
		} else if(!namePat.test(last) && last !== "" && last !== 'none') {
			console.log("Last name invalid. Value = " + last + "\n");
			alert("Error, last name is invalid.");
			document.getElementById(`last${i}`).setAttribute("class", "Invalid");
			isValid = false;
		} else if(!phonePat.test(phone) && phone !== "" && phone !== 'none') {
			console.log("phone invalid. Value = " + phone + "\n");
			alert("Error, phone number is invalid.");
			document.getElementById(`phone${i}`).setAttribute("class", "Invalid");
			isValid = false;
		} else if(!phonePat.test(mobile) && mobile !== "" && mobile !== 'none') {
			console.log("mobile invalid. Value = " + mobile + "\n");
			alert("Error, mobile number is invalid.");
			document.getElementById(`mobile${i}`).setAttribute("class", "Invalid");
			isValid = false;
		} else if(!phonePat.test(fax) && fax !== "" && fax !== 'none') {
			console.log("fax invalid. Value = " + fax + "\n");
			alert("Error, fax number is invalid.");
			document.getElementById(`fax${i}`).setAttribute("class", "Invalid");
			isValid = false;
		} else if(!emailPat.test(email) && email !== "" && email !== 'none') {
			console.log("email invalid. Value = " + email + "\n");
			alert("Error, Email is invalid.");
			document.getElementById(`email${i}`).setAttribute("class", "Invalid");
			isValid = false;
		} else if(!webPat.test(web) && web !== "" && web !== 'none') {
			console.log("web invalid. Value = " + web + "\n");
			alert("Error, website is invalid.");
			document.getElementById(`web${i}`).setAttribute("class", "Invalid");
			isValid = false;
		}
	}
	//console.log("Valid: " + isValid);
	if(isValid) {
		console.log("Input valid.\n");
		table.setAttribute("style", "display: none;")
		document.getElementById("req").setAttribute("style", "display: none;")
		document.getElementById('editButton').setAttribute("style", "display: none;")
		document.getElementById("success").setAttribute("style", "display: inherit;")
		return true;
	}
}

//---------------------------------------------------------------------------------------------------
// called on "Add contacts" button press (after contact data input),
//    creates an array of Contact() objects, converts array, and sends XMLHttpRequest to insert.php for DB inserts

function addContacts() {
	
	if(insertValidate()) {
		var table = document.getElementById('insertTable');
		var numContacts = table.value;
		//console.log("\naddContacts() called. Number of contacts : " + numContacts +"\n");
		var contactArr = [];
		for(i = 0; i < numContacts; i++) {
			contactArr.push(new Contact());
			contactArr[i].id = document.getElementById(`id${i}`).value;
			contactArr[i].first = document.getElementById(`first${i}`).value;
			contactArr[i].last = document.getElementById(`last${i}`).value;
			contactArr[i].phone = document.getElementById(`phone${i}`).value;
			contactArr[i].mobile = document.getElementById(`mobile${i}`).value;
			contactArr[i].fax = document.getElementById(`fax${i}`).value;
			contactArr[i].email = document.getElementById(`email${i}`).value;
			contactArr[i].web = document.getElementById(`web${i}`).value;
			//console.log("Contact array loop. contactArr[" + i + "] = " +contactArr[i].toString() + "\n\n");
		}
		// AJAX
		var contactsStr = JSON.stringify(contactArr);
		//console.log("\n\n\naddContacts() --> Contact array string :  " + contactsStr + "\n\n\n");
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "scripts/insert.php", true);
		xhr.setRequestHeader("content-type", "application/json");
		xhr.send(contactsStr);
		xhr.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
			}
		}
	}
}

//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// used by update.html and delete.html for contact selection

function contactsSelectionTable() {
	console.log("contactsSelectionTable() called\n\n");
	var table = document.getElementById("selectionTable");
	table.style = "display: none";
	var x;
	var length;
	var cell;
	var checkbox;
	// get contacts table data
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "scripts/update_delete.php", true);  
	xhr.send();
	xhr.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			//console.log(this.responseText);
			x = JSON.parse(this.responseText);
			length = x.length;
			
			// clear existing selection table rows
			var headRow = table.lastChild.firstChild;
			while(headRow != table.lastChild.lastChild) {
				table.lastChild.lastChild.remove()
			}	
			// add table data
			var rowNum = 0;
			for(i = 0; i < length; i++) {
				row = table.insertRow((i + 1));
				row.name = "contact";
				row.id = x[i]["id"];
				cell = row.insertCell(-1);
				checkbox = document.createElement("input");
				checkbox.type = "checkbox";
				checkbox.name = "edit";
				checkbox.value = row.id;  // set checkbox value to row ID
				checkbox.id = "checkbox" + rowNum;
				//console.log("rowNum = " + rowNum + ", i = " + i + ", checkbox = " + checkbox.id + "\n\n");
				cell.appendChild(checkbox);
				cell = row.insertCell(-1);
				cell.innerHTML = x[i]["id"];
				cell.setAttribute("id",`id${i}`);
				cell.setAttribute("required", "required");
				cell = row.insertCell(-1);
				cell.innerHTML = x[i]["first"] + " " + x[i]["last"];
				cell.setAttribute("id",`name${i}`);
				cell = row.insertCell(-1);
				cell.innerHTML = x[i]["phone"];
				cell.setAttribute("id",`phone${i}`);
				cell = row.insertCell(-1);
				cell.innerHTML = x[i]["mobile"];
				cell.setAttribute("id",`mobile${i}`);
				cell = row.insertCell(-1);
				cell.innerHTML = x[i]["fax"];
				cell.setAttribute("id",`fax${i}`);
				cell = row.insertCell(-1);
				cell.innerHTML = x[i]["email"];
				cell.setAttribute("id",`email${i}`);
				cell = row.insertCell(-1);
				cell.innerHTML = x[i]["web"];
				cell.setAttribute("id",`web${i}`);
				rowNum++;
			}
			table.value = length;  // set table value to number of contacts
			document.getElementById('selectionTable').style = "display: table;";  // display table
			document.getElementById('editButton').style = "display: inline;";  // display edit button
			
		}
	}
}


//---------------------------------------------------------------------------------------------------
// called after contact selection, provides editable table containing selected contacts
function updateContactsTable() {
	
	var table = document.getElementById('selectionTable');
	//console.log("updateContactsTable() called. Initial number of rows = " + table.value);
	var numRows = table.value;
	var checkboxes = table.querySelectorAll('[name="edit"]');  // array containing refrences to all checkboxes
	// iterate through checkbox array, if checked add contact object to toUpdate[] array
	var toUpdate = [];
	var str = [];
	var j = 0;
	for(i = 0; i < numRows; i++) {
		console.log("i = " + i + ", checked = " + checkboxes[i].checked);
		if(checkboxes[i].checked) {
			str = document.getElementById(`name${i}`).innerHTML.split(" ", 2);  // name --> first, last
			toUpdate.push(new Contact());
			toUpdate[j].id = document.getElementById(`id${i}`).innerHTML;
			toUpdate[j].first = str[0];
			toUpdate[j].last = str[1];			
			toUpdate[j].phone = document.getElementById(`phone${i}`).innerHTML;
			toUpdate[j].mobile = document.getElementById(`mobile${i}`).innerHTML;
			toUpdate[j].fax = document.getElementById(`fax${i}`).innerHTML;
			toUpdate[j].email = document.getElementById(`email${i}`).innerHTML;
			toUpdate[j].web = document.getElementById(`web${i}`).innerHTML;
			j++;
			//console.log("update contact, i = " + i + " : " + toUpdate[j].toString() + "\n");
		}
	}
	numRows = toUpdate.length;
	
	// edit existing elements
	var button = document.getElementById('editButton');
	button.setAttribute("style", "display: none;")
	button.innerHTML = 'Update database';
	button.setAttribute("onclick", "updateContacts()")
	table.setAttribute("style", "display: none;")
	table.setAttribute("class", "TB")
	table.value = numRows;
	document.getElementById("updateCol").innerHTML = "* ID";
	document.getElementById("idCol").innerHTML = "First";
	document.getElementById("nameCol").innerHTML = "Last";
	
	// remove elements
	var headRow = document.getElementById("tH");
	while(headRow != table.lastChild.lastChild) {
		table.lastChild.lastChild.remove()
	}
	document.getElementById('updateContactsRefresh').remove()
	
	// insert selected rows with editable text box containing current data
	var input;
	for(i = 0; i < numRows; i++) {
		//console.log("insert rows, i = " + i + "\n");
		row = table.insertRow((i + 1));
		row.class = "B";
		row.id = toUpdate[i].id;  // set row id to original contact id
		
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = `id${i}`;
		input.value = toUpdate[i].id;  // add contact data to text box
		input.setAttribute("class","Required");
		cell.appendChild(input);
	
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = `first${i}`;
		input.value = toUpdate[i].first;  // add contact data to text box
		cell.appendChild(input);
	
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = `last${i}`;
		input.value = toUpdate[i].last;  // add contact data to text box
		cell.appendChild(input);
	
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = `phone${i}`;
		input.value = toUpdate[i].phone;  // add contact data to text box
		cell.appendChild(input);
	
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = `mobile${i}`;
		input.value = toUpdate[i].mobile;  // add contact data to text box
		cell.appendChild(input);
		
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = `fax${i}`;
		input.value = toUpdate[i].fax;  // add contact data to text box
		cell.appendChild(input);
		
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = `email${i}`;
		input.value = toUpdate[i].email;  // add contact data to text box
		cell.appendChild(input);
		
		cell = row.insertCell(-1);
		input = document.createElement("input");
		input.type = 'text';
		input.id = `web${i}`;
		input.value = toUpdate[i].web;  // add contact data to text box
		cell.appendChild(input);
	}
	button.setAttribute("style", "display: inline;")
	table.setAttribute("style","display: table;")
	table.setAttribute("id","insertTable")
	var text = document.createElement("p");
	text.innerHTML = "	* required"
	text.setAttribute("id","req");
	text.setAttribute("class", "Info")
	document.getElementById("updateMain").prepend(text);
	//console.log("toUpdate[] : \n" + JSON.stringify(toUpdate) + "\n\nupdateContactsTable() finished. Number of rows = " + table.value);
}


//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// called after contacts have been edited by user, updates Contacts table

function updateContacts() {
	
	if(insertValidate()) {
		var i = 0;
		var contactArr = [];
		while(document.getElementById(`id${i}`) !== null) {
			//console.log("updateContacts() --> contact update array loop, i = " + i + "\n");
			contactArr.push(new Contact());
			contactArr[i].key = document.getElementById(`id${i}`).parentElement.parentElement.id;  // original ID (primary key)
			//console.log("i = " + i + ", key = " + contactArr[i].key + "\n");
			contactArr[i].id = document.getElementById(`id${i}`).value;
			contactArr[i].first = document.getElementById(`first${i}`).value;
			contactArr[i].last = document.getElementById(`last${i}`).value;
			contactArr[i].phone = document.getElementById(`phone${i}`).value;
			contactArr[i].mobile = document.getElementById(`mobile${i}`).value;
			contactArr[i].fax = document.getElementById(`fax${i}`).value;
			contactArr[i].email = document.getElementById(`email${i}`).value;
			contactArr[i].web = document.getElementById(`web${i}`).value;
			i++;
			//console.log("\n\n updated contact: " + JSON.stringify(contactArr) + "\n\n");
		}
		// AJAX
		var contactsStr = JSON.stringify(contactArr);
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "scripts/update.php", true);
		xhr.setRequestHeader("content-type", "application/json");
		xhr.send(contactsStr);
		xhr.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
			}
		}
	}
}

//---------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------
// 
function deleteContacts() {
	//console.log("deleteContacts() called");
	var table = document.getElementById('selectionTable');
	var refresh = document.getElementById('deleteContactsRefresh');
	var numRows = table.value;
	var checkboxes = table.querySelectorAll('[name="edit"]');  // array containing refrences to all checkboxes
	//console.log("\ndelete contacts. Initial number of table rows: " + table.value + "\n\n");
	
	// iterate through checkbox array, if checked add value (contact ID) to toDelete[] array
	var toDelete = [];
	for(i = 0; i < numRows; i++) {
		if(checkboxes[i].checked) {
			toDelete.push(checkboxes[i].value);
			//console.log("delete: " + checkboxes[i].value + "\n");
		}
	}
	
	var arr = JSON.stringify(toDelete);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "scripts/delete.php", true);
	xhr.setRequestHeader("content-type", "application/json");
	xhr.send(arr);
	xhr.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			refresh.click();
		}
	}
}

//---------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------
// called when search field is selected, modifies DOM to include next input fields
function searchContactsNextField(x) {
	if(x === '1') {
		document.getElementById('r2').hidden = false;
	} else if(x === '2') {
		document.getElementById('r3').hidden = false;
		document.getElementById('div1').hidden = false;
	}
}

//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
// called on search button press
function searchContacts() {
	
	document.getElementById('searchInputTable').hidden = true;
	document.getElementById('div1').hidden = true;
	document.getElementById('div2').hidden = false;
	var outputDiv = document.getElementById('results');
	var table = document.getElementById('outputTable');
	var message = document.getElementById('message');
	
	var query = 'SELECT * FROM Contacts WHERE ';
	var results;
	var field = (document.getElementById('searchFieldDropdown').value).toLowerCase();
	var input = ((document.getElementById('searchTerm').value).trim()).toLowerCase();
	var patt;
	var exactMatch;
	if(document.getElementById("exactMatch").checked === true) {
		exactMatch = true;
		// RegExp for input validation
		if(field === 'first' || field === 'last') {
			patt = namePat;
		} else {
			patt = eval(field + 'Pat');
		}
	} else {
		exactMatch = false;
		if(field === 'first' || field === 'last') {
			patt = namePat;
		} else if(field === 'id'){
			patt = idPat;
		} else {
			patt = new RegExp('^.{1,50}$');
		}
	}
	
	// validate search term input
	if(!patt.test(input)) {
		alert("Invalid input. Do better.")
	} else {
		if(exactMatch == true) {
			query = query + field + " = " + "'" + input + "';"; // exact match
		} else {
			query = query + field + " LIKE '%" + input + "%';"; // partial match
		}
		//console.log("\n query :  " + query + "\n\n");
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "scripts/select.php", true); 
		xhr.setRequestHeader("content-type", "application/json");
		xhr.send(JSON.stringify(query));
		xhr.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200) {
				//console.log("JS, Response: \n" + this.responseText + "\n");
				results = JSON.parse(this.responseText);
				var numResults = results.length;
				//console.log("Number of results: " + numResults + "\n");
				message.innerHTML = "SQL query: " + '"' + query + '"' + "<br><br><br>Results: " + numResults + "<br><br>";
				var row;
				outputDiv.hidden = false;
				table.hidden = false;
				if(numResults > 0) {
					for(i = 0; i < numResults; i++) {
						row = table.insertRow((i + 1));
						row.name = "contact";
						row.id = results[i]["id"];
						row.setAttribute("class", "TD");
						// ID
						cell = row.insertCell(-1);
						cell.innerHTML = results[i]["id"];
						cell.setAttribute("class", "TD");
						cell.setAttribute("id",`id${i}`);
						cell.setAttribute("required", "required");
						// First name
						cell = row.insertCell(-1);
						cell.innerHTML = results[i]["first"];
						cell.setAttribute("class", "TD");
						cell.setAttribute("id",`first${i}`);
						// Last name
						cell = row.insertCell(-1);
						cell.innerHTML = results[i]["last"];
						cell.setAttribute("class", "TD");
						cell.setAttribute("id",`last${i}`);
						// Phone
						cell = row.insertCell(-1);
						cell.innerHTML = results[i]["phone"];
						cell.setAttribute("class", "TD");
						cell.setAttribute("id",`phone${i}`);
						// Mobile
						cell = row.insertCell(-1);
						cell.innerHTML = results[i]["mobile"];
						cell.setAttribute("class", "TD");
						cell.setAttribute("id",`mobile${i}`);
						// Fax
						cell = row.insertCell(-1);
						cell.innerHTML = results[i]["fax"];
						cell.setAttribute("class", "TD");
						cell.setAttribute("id",`fax${i}`);
						// Email
						cell = row.insertCell(-1);
						cell.innerHTML = results[i]["email"];
						cell.setAttribute("class", "TD");
						cell.setAttribute("id",`email${i}`);
						// Website
						cell = row.insertCell(-1);
						cell.innerHTML = results[i]["web"];
						cell.setAttribute("class", "TD");
						cell.setAttribute("id",`web${i}`);	
					}
				//table.style = "table;";			
				} else {
					message.innerHTML = message.innerHTML + "<br><br><br>No matches<br>";
					outputDiv.hidden = false;
				}
			}
		}
		
	}
	
}

//---------------------------------------------------------------------------------------------------
// nav bar for small screens

const navSlide = () => {
    
    var mobile = document.getElementById("mobile");
	var nav = document.getElementById('links');
	var links = document.querySelectorAll('.Links li');
	mobile.addEventListener('click', function() {
    	nav.classList.toggle('Mobile-active');
		console.log("toggle, class = " + nav.className);
	});
	
}

navSlide();


//---------------------------------------------------------------------------------------------------


