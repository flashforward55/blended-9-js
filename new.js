// /1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"What is the official name of JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "True!"
//у противному випадку показати:"Don't you know? ECMAScript!"

/* const message = 'ECMAScript';
const messageUser = prompt('What is the official name of JavaScript?');

// if (message === messageUser) {
//   alert('True!');
// } else {alert("Don't you know? ECMAScript!")};

const text = message === messageUser ? 'True!' : "Don't you know? ECMAScript!";

alert(text);
 */

//2. Напишіть програму, яка запитає у користувача "Enter the number of minutes to format"
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"

// let time = prompt("Enter the number of minutes to format");
// if (!time) {
//   alert("Ви не ввели дані");
// } else {
//   let hours = Math.floor(time / 60)
//     .toString()
//     .padStart(2, 0);
//   let minutes = (time % 60).toString().padStart(2, 0);
//   alert(`${hours}:${minutes}`);
// }

//3. Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню

// const min = 1;
// const max = 8;

// for (let index = max; index >= min; index-=1) {

//     if (index % 2 === 0) {
//         console.log(index);
//    }
// }

//4. Напишіть код, який буде запитувати логін за допомогою prompt "Hello, please enter your login!"
// і виводити результат у консоль браузера

//Якщо під час вводу login нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password)
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"

const login = prompt("Hello, please enter your login!");
const password = "adminPassword";
let message = "";

// if (login === null) {
//   message = "Authorization has been cancelled";
// } else if (login === "admin") {
//   const checkpassword = prompt("Please enter your password");
//   if (checkpassword === password) {
//     message = "Hello!";
//   } else if (checkpassword === null) {
//     message = "Authorization has been cancelled";
//   } else {
//     message = "Goodbye!";
//   }
// } else {
//   message = "Goodbye!";
// }

switch (login) {
  case null:
    message = "Authorization has been cancelled";
    break;
  case "admin":
    const checkpassword = prompt("Please enter your password");
    switch (checkpassword) {
      case password:
        message = "Hello!";
        break;

      case null:
        message = "Authorization has been cancelled";
        break;

      default:
        message = "Goodbye!";
    }
    break;

  default:
    message = "Goodbye!";
    break;
}

alert(message);
