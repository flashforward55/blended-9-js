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

// const login = prompt("Hello, please enter your login!");
// const password = "adminPassword";
// let message = "";

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

// switch (login) {
//   case null:
//     message = "Authorization has been cancelled";
//     break;
//   case "admin":
//     const checkpassword = prompt("Please enter your password");
//     switch (checkpassword) {
//       case password:
//         message = "Hello!";
//         break;

//       case null:
//         message = "Authorization has been cancelled";
//         break;

//       default:
//         message = "Goodbye!";
//     }
//     break;

//   default:
//     message = "Goodbye!";
//     break;
// }

// alert(message);

// ----------------------------домашка--------------------------------------

//6. При завантаженні сторінки користувачу у prompt пропонується ввести
// число 'Hello, enter please the number'.
// Введене число додається до значення змінної total.
//Операція введення числа продовжується до тих пір, поки користувач не
// натисне кнопку Cancel у prompt.
//Після того, як користувач припинив серію введень і натиснув кнопку Cancel,
// показати alert з рядком "The total sum of the entered numbers is [total]."
//Робити перевірку, що користувач ввів саме число, а не довільний рядок не
// потрібно.

// let total = 0;
// while (true) {
//    let enterNumber = Number(prompt('Hello, enter please the number'));
//     if (enterNumber) {
//       total += enterNumber;
//     } else {
//       break;
//     }
// }
// alert(`The total sum of the entered numbers is ${total}.`);

//7. Напишіть цикл, який пропонує ввести
//число більше 100 через prompt 'Hello, enter please the number greater then 100.'
// та виводить його у alert, якщо умова виконана
//Якщо користувач ввів інше число, то попросити ввести ще раз і так далі.
//Цикл повинен запитувати число, поки користувач не введе число більше 100.
// Якщо користувач натисне кнопку відміни у prompt, то у alert треба вивести
// 'Goodbye'.

// while (true) {
//   let enterNumber = prompt('Hello, enter please the number greater then 100.');
//   if (enterNumber === null) {
//       alert(`Goodbye`);
//       break;
//   } else if (enterNumber <= 100) {
//       alert(`Enter please the number greater then 100`);
//   } else {
//       alert(`${enterNumber}`);
//       break;
//   }
// }

// 8. При завантаженні сторінки користувачу у prompt пропонується ввести число
// від 0 до 59 'Hello, enter please the number between  0 and 59'.
//Зроби перевірку на відповідність введеного числа вказаному діапазону (0-59).
// Якщо число не відповідає виведіть
//alert з повідомленням "The [number] is outside 0 and 59"
// Визначте в яку чверть години попаде
// це число(в першу, другу, третю чи четверту) та виведіть це повідомлення у
// консоль, наприклад, "Number [number] refers to 2 quarters".
// 0 - 15 1ша чверть
// 16 - 30 2га чверть
// 31 - 45 3тя чверть
// 46 - 59 4та чверть

// let enterNumber = prompt('Hello, enter please the number between  0 and 59');
// let message = '';

// if (enterNumber === null) {
//   message = 'Goodbye!';
// } else if (enterNumber < 0 || enterNumber > 59) {
//   alert(`The ${enterNumber} is outside 0 and 59`);
// } else if (enterNumber === 0 || enterNumber <= 15) {
//   message = `Number ${enterNumber} refers to 1 quarters`;
// } else if (enterNumber === 16 || enterNumber <= 30) {
//   message = `Number ${enterNumber} refers to 2 quarters`;
// } else if (enterNumber === 31 || enterNumber <= 45) {
//   message = `Number ${enterNumber} refers to 3 quarters`;
// } else {
//   message = `Number ${enterNumber} refers to 4 quarters`;
// }
// console.log(message);

//9. Дано рядок, що складається із символів, наприклад, 'a1abcde'.
// Перевір, що першим символом цього рядка є літера 'a'.
// Якщо так - виведи 'yes' у консоль, в противному випадку виведи 'no'.

// const text = 'a1abcde';
// let message = '';
// text[0] === 'a' ? (message = 'yes') : (message = 'no');
// console.log(message);

// 10. Напишіть функцію, яка приймає два параметри довжину і елемент-заповнювач та
//  повертає масив з вказаною довжиною і заповнює його переданим елементом
// наприклад, виклик функції fillArray(3, 'a') має повернути масив ['a', 'a', 'a']

// function fillArray(arrLength, arrElement) {
//     const arr = [];
//     for (let i = 0; i < arrLength; i+=1) {
//         arr.push(arrElement);
//     }
//     console.log(arr);
// }
// fillArray(3, 'a')

// 11. Написати функцію, яка буде видаляти з масива усі значення, які приводяться
// до false
// undefined, null, false, '', 0, NaN

// -----Варіант рішення 1 ------------------------------------------------

// function cleanArray(arr) {
//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     if (!arr[i]) {
//       arr.splice(i, 1);
//     }
//   }
//   console.log(arr);
// }
// cleanArray([1, undefined, 2, null, 3, false, 4, '', 5, 0, 6, NaN]);
// cleanArray([12, undefined, 22, null, 33, false, 44, '', 55, 0, 66, NaN]);

// ------Варіант рішення 2 ----------------------------------------------

// const arrValues = [undefined, null, false, '', 0, NaN];

// function cleanArray(arr) {
//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     if (arrValues.includes(arr[i])) {
//       arr.splice(i, 1);
//     }
//   }
//   console.log(arr);
// }
// cleanArray([1, undefined, 2, null, 3, false, 4, '', 5, 0, 6, NaN]);
// cleanArray([12, undefined, 22, null, 33, false, 44, '', 55, 0, 66, NaN]);

//task1 lesson2
//1. Напишіть скрипт, який для об'єкта user, послідовно:
//1 додасть властивість mood зі значенням 'happy'
//2 замінить значення властивості hobby на 'skydiving'
//3 замінить значення властивості premium на false
//4 використовуючи Object.keys() и for...of, виведе у консоль зміст об'єкта users у форматі:
//name: John
//"age: 20"
//"hobby: skydiving"
//"premium: false"
//"mood: happy"

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const userKey = Object.keys(user);

// for (const key of userKey) {
//     console.log(`${key}: ${user[key]}`)
// }

//2. Є об'єкт, в якому зберігаються зарплати команди. Напишіть функцію getTotalSalary, яка буде повертати загальну суму зарплат. Якщо об'єкт пустий, то функція має повернути 0

// const salaries = {
//   mango: 1000,
//   poly: 1600,
//   ajax: 1470,
// };

// let totalSalary = 0;
// function getTotalSalary(salaries) {
//   const values = Object.values(salaries);

//   for (const value of values) {
//     totalSalary += value;
//   }

//   return totalSalary;
// }

// console.log(getTotalSalary(salaries));

//3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем

// const stones = [
//   { name: "emerald", price: 1300, quantity: 4 },
//   { name: "diamond", price: 2700, quantity: 6 },
//   { name: "sapphire", price: 400, quantity: 7 },
//   { name: "rubble", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName){
// for (const stone of stones){
//   if(stone.name === stonesName){
//     return stone.price*stone.quantity
//   }

// }
// }
// console.log(calcTotalPrice(stones, "rubble"))

//4. Створіть об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами prop1 та prop2
//sum() перевіряє чи присутні  властивості prop1/prop2 та повертає їх суму, в противному випадку повертає null
//mult() перевіряє чи присутні  властивості prop1/prop2 та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями

// const calculator = {
//   read(a, b) {
//     this.prop1 = Number(a);
//     this.prop2 = Number(b);
//   },
//   sum() {
//     if (!isNaN(this.prop1) && !isNaN(this.prop2)) {
//       return this.prop1 + this.prop2;
//     }
//     return null;
//   },
//   mult() {
//     if (!isNaN(this.prop1) && !isNaN(this.prop2)) {
//       return this.prop1 * this.prop2;
//     }
//     return null;
//   },
// };
// calculator.read("five", 0);
// console.log(calculator.sum());
// console.log(calculator.mult());

//5. Напишіть функцію updateObject, яка приймає об'єкт та ключ
//і повертає новий об'єкт без вказаної властивості
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b') => {a: 1, c: 3}
function updateObject(object, removeKey) {
  const newObject = { ...object };
  delete newObject[removeKey];
  return newObject;
}
console.log(updateObject({ a: 1, b: 2, c: 3 }, "b"));

//6. Напишіть функцію updateObject, яка приймає об'єкт та перелік ключів
//і повертає новий об'єкт без вказаних властивостей
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b', 'c') => {a: 1}

// 7. Напишіть функцію changeObject, яка приймає як параметр об'єкт
// та повертає масив, в якому кожен елемент це масив, який складається з двох елементів [key, value]
// Очікуваний результат console.log(changeObject({ a: 1, b: 2, c: 3 })) // [["a", 1], ["b", 2], ["c", 3]]


// 8. Напиши скрипт керування особистим кабінетом інтернет банку.
//Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією трансакцій
//Типів трансакцій усього два. Можна поповнити рахунок або списати з нього гроші.
//
// const TYPES_TRANSACTION = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// }
//Кожна трансакція має мати властивості: id, type, amount.

{
  const account = {
    //поточний баланс рахунку
    balance: 0,
    //Історія трансакцій
    transactions: [],
    //Метод приймає суму та тип трансакції
    //створює об'єкт трансакції за зразком {id, type, amount}
    //додає його у масив трансакцій
    //в залежності від типу трансакції викликає методи, які відповідають за збільшення/зменшення балансу
    createTransaction(type, amount) {
     
    },
    //Метод приймає суму трансакції і відповідає за додавання суми до балансу.
    deposit(amount) {
    
    },
    //Метод приймає суму трансакції і відповідає за віднімання суми до балансу.
    //Якщо amount більше ніж поточний баланс, виводимо повідомлення в консоль про те, що недостатньо коштів на рахунку [You don't have enough funds in your account] і повертаємо null
    withdraw(amount) {
    
    },
    //Метод повертає поточний баланс
    getBalance() {
    
    },
    //Метод шукає та повертає об'єкт трансакції по id
    getTransactionDetails(idForSearch) {
   
    },
    //Метод повертає загальну суму трансакції певного типу із всієї історії трансакцій
    getTotalSumByType(type) {
    
    },
  }
    
//9. Напишіть функцію isPlainObject, яка перевіряє чи є параметр простим об'єктом, а не масивом або null.
// Якщо так, то повертає true, в противному випадку false

//10. Напишіть функцію isEmpty , яка перевіряє чи порожній обєкт. Якщо так, то повертає true, в противному випадку false

//11. Напишіть дві функції
// letMeSeeYourName(callback) - має запитувати ім'я користувача через prompt і викликати callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не пустий