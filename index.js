let person = {
  personName: "Jason Wandrag",
  idNumber: "0408215108081",
};

const year = parseInt(person.idNumber.slice(0, 2));
const month = parseInt(person.idNumber.slice(2, 4) - 1);
const day = parseInt(person.idNumber.slice(4, 6));

let today, birthdayThisYearday, timeDifference, days, age;

today = new Date();
birthdayThisYearday = new Date(today.getFullYear(), month, day);

if (today.getTime() > birthdayThisYearday.getTime()) {
  birthdayThisYearday.setFullYear(birthdayThisYearday.getFullYear() + 1);
}

timeDifference = birthdayThisYearday.getTime() - today.getTime();
days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

console.log(
  `Hello ${person.personName} there are ${days} days until your birthday`
);
