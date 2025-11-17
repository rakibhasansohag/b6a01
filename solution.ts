function formatValue(
	value: string | number | boolean,
): string | number | boolean {
	if (typeof value === 'string') {
		return value.toUpperCase();
	}
	if (typeof value === 'number') {
		return value * 10;
	}

	return !value;
}

function getLength(value: string | string[] | number[] | boolean[]): number {
	if (typeof value === 'string') {
		return value.length;
	}
	if (Array.isArray(value)) {
		return value.length;
	}
	return 0;
}

class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	getDetails() {
		return `Name: ${this.name}, Age: ${this.age}`;
	}
}

type RatedItem = {
	title: string;
	rating: number;
};

function filterByRating(items: RatedItem[]): RatedItem[] {
	return items.filter((item) => item.rating >= 4);
}

type User = {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
	return users.filter((user) => user.isActive);
}

interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
}

function printBookDetails(book: Book): void {
	const availableText = book.isAvailable ? 'Yes' : 'No';
	console.log(
		`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableText}`,
	);
}

function getUniqueValues<T extends number | string>(arr1: T[], arr2: T[]): T[] {
	const result: T[] = [];

	for (let i = 0; i < arr1.length; i++) {
		let exists = false;
		for (let j = 0; j < result.length; j++) {
			if (result[j] === arr1[i]) {
				exists = true;
				break;
			}
		}
		if (!exists) {
			result.push(arr1[i] as T);
		}
	}

	for (let i = 0; i < arr2.length; i++) {
		let exists = false;
		for (let j = 0; j < result.length; j++) {
			if (result[j] === arr2[i]) {
				exists = true;
				break;
			}
		}
		if (!exists) {
			result.push(arr2[i] as T);
		}
	}

	return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

const array3 = ['a', 'b', 'c', 'd', 'e'];
const array4 = ['c', 'd', 'e', 'f', 'g'];
console.log(getUniqueValues(array3, array4));
