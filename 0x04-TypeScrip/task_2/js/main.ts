// The DirectorInterface
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

// The TeacherInterface
interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

// The Director class
class Director implements DirectorInterface {
	workFromHome() {
		return 'Working from home';
	}

	getCoffeeBreak() {
		return 'Getting a coffee break';
	}

	workDirectorTasks() {
		return 'Getting to director tasks';
	}
}

// The Teacher class
class Teacher implements TeacherInterface {
	workFromHome() {
		return 'Cannot work from home';
	}

	getCoffeeBreak() {
		return 'Cannot have a break';
	}

	workTeacherTasks() {
		return 'Getting to work';
	}
}

// Function to an createEmployee
function createEmployee(salary: number | string): Director | Teacher{
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}


// Function isDirector
function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
}

// Function executeWork
function executeWork(employee: Director | Teacher) {
	if (isDirector(employee)) {
		console.log(employee.workDirectorTasks());
	} else {
		console.log(employee.workTeacherTasks());
	}
}


