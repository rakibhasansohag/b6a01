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

const myBook: Book = {
	title: 'The Great Gatsby',
	author: 'F. Scott Fitzgerald',
	publishedYear: 1925,
	isAvailable: !false,
};

printBookDetails(myBook);
