# 1) Interface vs Type in typescript 

interface এবং type দুটোই TypeScript-এ টাইপ ডিফাইন করতে ব্যবহার করা হয়, কিন্তু ব্যবহার ও ক্ষমতায় কিছু পার্থক্য আছে:

interface মূলত অবজেক্টের আকার (shape) ডিফাইন করতে ব্যবহৃত হয়। ক্লাস বা অবজেক্টের প্রোপার্টি ও মেথডের কনট্র্যাক্ট নির্ধারণ করে। type অনেক বেশি জেনেরিক: ইউনিয়ন, টুপল, মৌলিক টাইপ ও অবজেক্ট—সবকিছুতে ব্যবহার করা যায়।

interface সহজে একেকটি interface একে অন্যকে extends করতে পারে এবং একাধিক বার একই নামের interface ডিক্লেয়ার করলে TypeScript সেগুলোকে মার্জ করে। type-এর ক্ষেত্রে টু-টাইপ মার্জ করা যায় না।

ব্যবহারিক হিসেবে শুধু অবজেক্ট বা ক্লাস কনট্র্যাক্ট দরকার হলে এবং ভবিষ্যতে বড়ো হতে পারে তাহলে interface বেবহার করা উচিত। যদি
ইউনিয়ন, টুপল বা জটিল টাইপ অপারেশন দরকার হয় তাহলে type বেশি সুবিধা দেবে। 

### example: 
```
interface User {
	name : string;
	age:number
}

type UserType ={
	name : string;
	age : number | null
}
```
# 2) Explain the difference between any, unknown, and never types in TypeScript.

TypeScript-এ এই তিনটা টাইপ অনেকের কাছে একই রকম মনে হয়, কিন্তু এদের কাজ পুরো আলাদা।

i) any 'যা খুশি হবে, আমি কিছু বলব না'

any মানে কোড এ টাইপ চেক করা বন্ধ করে দেয়।
কোড এর ভিতরে যা খুশি রাখবো TS কোনো ভুল ধরবে নাহ।

### example:
```
var age :any = 10;
value = 'hi'
value = false;

console.log(value) // value = false
```
ii) unknown ভেতরে কিছুই থাকতে পারে, কিন্তু ব্যবহার করার আগে টাইপ চেক করতে হবে|

unknown হলো any-র safe version.
ভ্যালু যাই হোক সমস্যা নেই, কিন্তু ব্যবহার করার আগে TypeScript proof চাইবে।

### example:
```
let name: unknown = "rakib";

// value.toUppercase() // will not allowed any string related work

if (typeof value === 'string'){
	value.toUpperCase();
}
```
iii) never এখানে কোনো ভ্যালুই আসবে না
never মানে এমন কিছু যা কখনও ঘটে না বা ফাংশন কখনও রিটার্ন করে না।

### example : 

ফাংশন সবসময় error ছোড়ে
ফাংশন কখনও শেষ হয় না (infinite loop)

