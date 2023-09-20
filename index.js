// ПОИСК ОШИБОК
// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }
// console.log(func1() + func2());

// function sum (arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
//     return res;
// }
// console.log(sum([1, 2, 3, 4, 5]));

// let arr = [1, 2, 3, 4, 5];
// function func(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	console.log(res);
// }
// func(arr)

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }
// console.log(func1() + func2());

// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);
// function sum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }

// function add(num) {
// 	if (num <= 9) {
// 		return console.log('0' + num);
// 	} else {
//         return console.log(num);
//     }
// }
// add(1)

// let arr = [1, 2, 3, 4, 5];
// console.log(res);
// function sum (arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res;
// }

// Код должен найти сумму цифр числа:
// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);
// function getDigitsSum(num) {
// 	let arr = String(num).split('');
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}
// 	return sum;
// }

// console.log(isPrime(13));
// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i !== 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }

// ПРАКТИКА ФУНКЦИИ
/////////////////////////////////////////////////////////////////////////////
// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
// let arr = [1, 2, 3, 4, 5];
//  function func(arr) {
//  	let res = 0;
//  	for (let elem of arr) {
//  		res += elem;
//  	}
//  	console.log(res);
//  }
//  func(arr)
///////////////////////////////////////////////////////////////////////////////////////
// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
// function func(num) {
//     let arr =[];
//     for (let i = 1; i<=num; i++) {
//      let res = num % i;
//        if (res == 0) {
//            arr.push(i)
//     }
// }
//    return arr 
// }
// console.log(func(100))
////////////////////////////////////////////////////////////////////////////////////////
// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
// function func (str) {
//     let arr =[];
//     for (let i = 0; i < str.length; i++) {
//            arr.push(str[i])
//     }
//    return arr 
// }
// console.log(func('anastasia'))
////////////////////////////////////////////////////////////////////////////////////
// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
// function func (str) {
//     let arr =[];
//     for (let i = str.length-1; i >= 0; i--) {
//            arr.push(str[i])
//     }
//    return arr 
// }
// console.log(func('anastasia'))
//////////////////////////////////////////////////////////////
// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
// function func (str) {
//     let res = str.slice(0,1).toUpperCase() + str.slice(1);
//     return res
// }
//  console.log(func('anastasia'))
/////////////////////////////////////////////////////////////////////////////////
// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
// function func(str) {
//     let arr = str.split(' ');
//     let res = '';
//     for (let i = 0; i < arr.length; i++) {
//        res += arr[i][0].toUpperCase() + arr[i].slice(1) + ' '; 
//     }
//     return res.trim();
// }
// console.log(func('anastasia noviikova'))
////////////////////////////////////////////////////////////////
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
// let arr = [];
// function func() {
//  	for (let i = 1; i <= 5; i++) {
//         arr.push(i)
//  	}  
//     return arr
//  }
//  console.log(func(arr));
////////////////////////////////////////////////////////////////////////////////////
// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
// let num = 12345;
//  let res = Sum(num);
//  console.log(res);
//  function Sum(num) {
//  	let arr = String(num).split('');
//  	let sum = 0;
//  	for (let elem of arr) {
//  		sum += +elem;
//  	}
//  	return sum;
//  }
////////////////////////////////////////////////////////////////////////////////////////////
// Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
// function isLeapYear (year) {
//     return year % 4 == 0;
// }
// let year = +prompt("Введи год:");
//  if(isLeapYear(year)){
//        alert("Год " + year + " - високосный.");
//  } else {
//        alert("Год " + year + " - не високосный.");
//  }
/////////////////////////////////////////////////////////////////////
// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
// function sytki (sec) {
//     return sec/60/60/24;
// }
// console.log(sytki(172800))
///////////////////////////////////////////////////////////////////////////////////
// Сделайте функцию, которая будет возвращать случайный элемент из массива.
// let arr = [6, 7, 4, 0, 12]
// function func (arr) {
//     let sluch = Math.floor(Math.random() * (arr.length))
//     return arr[sluch]
// }
// console.log(func(arr))
//////////////////////////////////////////////////////////////////////////////////////
// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}
// }
// console.log(isPrime(4));