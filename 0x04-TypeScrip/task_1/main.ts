// The student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// The teacher interface
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number; // Optional property can be present or not
	location: string;
	[propName: string]: any; // Index signature for additional properties
}

// The directors interface
interface Directors extends Teacher {
	numberOfReports: number;
}

// The printTeacher function interface
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

// The printTeacher function
function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
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
