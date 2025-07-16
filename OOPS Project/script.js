// Program :- 1
class student {
  constructor(id, name, rollnum, schoolname) {
    this.id = id;
    this.name = name;
    this.rollnum = rollnum;
    this.schoolname = schoolname;
  }
  greet() {
    console.log(`Enter Student Details :- `);
    console.log(`Id : ${this.id}`);
    console.log(`Name : ${this.name}`);
    console.log(`RollNo : ${this.rollnum}`);
    console.log(`SchoolName : ${this.schoolname}`);
  }
}
let obj = new student(1, "Pranav", 1, "Akshar School");
obj.greet();

console.log(" ");

// Progarm :- 2
class Weather {
  constructor(city, temp, day, date) {
    this.city = city;
    this.temp = temp;
    this.day = day;
    this.date = date;
  }
  greet() {
    console.log(`Enter Weather Details :- `);
    console.log(`City : ${this.city}`);
    console.log(`Temp : ${this.temp}`);
    console.log(`Day : ${this.day}`);
    console.log(`Date : ${this.date}`);
  }
}
let obj1 = new Weather("Rajkot", "25deg", "Monday", "10/07/2025");
obj1.greet();

console.log(" ");

// Progarm :- 3
class book {
  constructor(title, author, pages, isavalable) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isavalable = isavalable;
  }
  greet() {
    console.log(`Enter Book Details :`);
    console.log(`Title : ${this.title}`);
    console.log(`Author : ${this.author}`);
    console.log(`Pages : ${this.pages}`);
    console.log(`IsAvalable : ${this.isavalable}`);
  }
}
let obj2 = new book("Harry Potter", "J.K. Rowling", 500, true);
obj2.greet();

console.log(" ");

// Progarm :- 4
class Cource {
    constructor(name, duration, isOnline, instructor) {
        this.name = name;
        this.duration = duration;
        this.isOnline = isOnline;
        this.instructor = instructor;
    }
    greet() {
        console.log(`Enter Cource Details :`);
        console.log(`Cource Name : ${this.name}`);
        console.log(`Duration : ${this.duration}`);
        console.log(`IsOnline : ${this.isOnline}`);
        console.log(`Instructor : ${this.instructor}`);
    }
}
let obj3 = new Cource("Full Stack Web Development", "6 months", true, "Rahul Sharma");
obj3.greet();

console.log(" ");

// Progarm :- 4
class Phone {
    constructor(brand, model, price, is5g) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.is5g = is5g;
    }
    greet() {
        console.log(`Enter Phone Details :`);
        console.log(`Brand : ${this.brand}`);
        console.log(`Model : ${this.model}`);
        console.log(`Price : ${this.price}`);
        console.log(`Is5g : ${this.is5g}`);
    }
}
let obj4 = new Phone("Apple", "iPhone 14", 89999, true);
obj4.greet();