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

const books = [
	{ title: 'Book A', rating: 4.5 },
	{ title: 'Book B', rating: 3.2 },
	{ title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));
