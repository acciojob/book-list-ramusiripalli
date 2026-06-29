//your JS code here. If required.
function addBook(){
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let isbnInput = document.getElementById("isbn");

	let title = titleInput.value;
	let author = authorInput.value;
	let isbn = isbnInput.value;

	if(title === "" || author === "" || isbn === ""){
		alert("please fill all fields")
		return;
	}

let booklist = document.getElementById("book-list");
let row=document.createElement("tr");

let titleCell = document.createElement("td");
let authorCell = document.createElement("td");
let isbnCell = document.createElement("td");
let clearCell = document.createElement("td");

	
let clearBtn = document.createElement("button");
	
	

titleCell.textContent = title;
authorCell.textContent = author;
isbnCell.textContent = isbn;
clearBtn.textContent = "X";
clearBtn.classList.add("delete");
clearBtn.addEventListener("click",function(){
row.remove();
	});
clearCell.appendChild(clearBtn);


	row.appendChild(titleCell);
	row.appendChild(authorCell);
	row.appendChild(isbnCell);
	row.appendChild(clearCell);
	booklist.appendChild(row);

titleInput.value = "";
authorInput.value = "";
isbnInput.value = "";
}


let btn = document.getElementById("submit");
btn.addEventListener("click",addBook);
