interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}


const studentA: Student = {
	firstName: "Michael",
	lastName: 'iyke',
	age: 36,
	location: 'Enugu'
};

const studentB: Student = {
	lastName: 'Jerry',
	firstName: 'Ifeanyi',
	age: 37,
	location: 'Onisha'
};

const studentsList: Student[] = [studentA, studentB];

// Create table of students
const table = document.createElement("table");
const thead = th("First Name", "Last Name");
table.appendChild(thead);
const tbody = document.createElement("tbody");

// Fill in student data
for (const student of studentsList) {
	tbody.appendChild(tr(student.firstName, student.lastName));
}

table.appendChild(tbody);
document.body.appendChild(table);

// Creates table headings
function th(...texts: string[]) {
	const tr = document.createElement("thead");
	texts.forEach((text) => {
		const th = document.createElement("th");
		th.textContent = text;
		tr.appendChild(th);
	});
	return tr;
}

// Creates a table row
function tr(...texts: string[]) {
	const tr = document.createElement("tr");
	texts.forEach((text) => {
		const td = document.createElement("td");
		td.textContent = text;
		tr.appendChild(td);
	});
	return tr;
}
