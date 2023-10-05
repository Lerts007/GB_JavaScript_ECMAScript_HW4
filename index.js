// Задание 1 "Получение данных о пользователе"

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID)
// в качестве аргумента и использует fetch для получения данных о пользователе с
// заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается
// с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден,
// промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера.
// Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью
// response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен,
// функция отклоняет промис с сообщением об ошибке.

// --------------------------------------------------------------------
console.log('--------------------------------------------------------------------');
console.log('Задание 1');
console.log('--------------------------------------------------------------------');

async function getUserData(ID) {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/users`);

  const users = await responce.json();
  if (responce.status !== 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    const user = users.find((el) => el.id === ID);
    console.log(user === undefined ? 'Пользователь не найден' : user);
  }
}

getUserData(5);
getUserData(15);

// --------------------------------------------------------------------
// Задание 2 "Отправка данных на сервер"

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в
// качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для
// сохранения. Функция должна возвращать промис, который разрешается, если данные успешно
// отправлены, или отклоняется в случае ошибки.

// Пример использования функции:
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер
// для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа
// содержимого application/json и сериализует объект с данными о пользователе в
// JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция
// разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

// --------------------------------------------------------------------
console.log('--------------------------------------------------------------------');
console.log('Задание 2');
console.log('--------------------------------------------------------------------');

async function saveUserData(user, url) {
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    console.log(response.status);
    throw new Error('Что-то пошло не так: ' + response.status);
  } else {
    console.log(response.status);
  }
}

const user = {
  name: 'John Smith',
  age: 30,
  email: 'john@example.com',
};
const url1 = 'https://jsonplaceholder.typicode.com/us';
const url2 = 'https://jsonplaceholder.typicode.com/users';

saveUserData(user, url1)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch((error) => {
    console.log(error.message);
  });

saveUserData(user, url2)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch((error) => {
    console.log(error.message);
  });

// --------------------------------------------------------------------
// Задание 3 "Изменение стиля элемента через заданное время"

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и
// время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить
// стиль элемента через указанное время.

// Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента
// с id 'myElement'

// --------------------------------------------------------------------
console.log('--------------------------------------------------------------------');
console.log('Задание 3');
console.log('--------------------------------------------------------------------');

const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
  changeStyleDelayed('myElement', 1000);
});

function changeStyleDelayed(nameClass, time) {
  const divEl = document.querySelector(`.${nameClass}`);

  setTimeout(() => {
    divEl.classList.toggle('colorBlue');
  }, time);
}

// --------------------------------------------------------------------

// async function delayedMessage(message, delay) {
//   setTimeout(() => {
//     console.log(message);
//   }, delay);
// }

// const tasks = [
//   { name: 'task 1', time: 1000 },
//   { name: 'task 2', time: 2000 },
//   { name: 'task 3', time: 3000 },
//   { name: 'task 4', time: 4000 },
//   { name: 'task 5', time: 5000 },
// ];

// tasks.forEach((el) => {
//   delayedMessage(el.name, el.time);
// });

// Напишите программу, которая загружает данные с сервера с использованием объекта XMLHttpRequest
// Создайте функцию loadData(url), которая принимает аргумент url (строка) - адрес сервера для загрузки данных.
// Внутри функции loadData() создайте объект XMLHttpRequest с помощью new XMLHttpRequest().
// Зарегистрируйте обработчик события onreadystatechange, который будет вызываться при изменении состояния запроса.
// Проверьте, если успешно выполнен запрос и успешный статус ответа сервера, то выведите полученные данные в консоль
//  с помощью console.log(xhr.responseText).
// Откройте запрос с помощью xhr.open("GET", url, true).
// Отправьте запрос на сервер.

// async function loadData(url) {
//   const responce = await fetch(url);

//   responce.onreadystatechange = () => {
//     if (xhr.status !== 200) {
//       console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     } else {
//       console.log(`User: ${xhr.responseText}`);
//     }
//   };
// }

// loadData('https://jsonplaceholder.typicode.com/users');

// async function loadData(url) {
//   const responce = await fetch(url);
//   const body = document.querySelector('body');

//   const users = await responce.json();
//   console.log(users);
//   users.forEach((element) => {
//     body.append(element.name);
//   });

//   // const newUsers = users.sort((a, b) => a.name.localeCompare(b.name));
//   // console.log(users);
// }

// loadData('https://jsonplaceholder.typicode.com/users');
