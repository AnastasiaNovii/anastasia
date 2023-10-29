// №1
// let elem = document.querySelector('input')
// let text = document.querySelector('p')
// elem.addEventListener('blur', func)
// function func() {
//     text.textContent += elem.value 
// }
// №2
// let nums = document.querySelectorAll('.info')
// let sum = document.querySelector('p')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', summa)
// function summa () {
//     for (let num of nums) {
//         sum.textContent = +sum.textContent + Number(num.value)
//     }
// };
// №3
// let num = document.querySelector('input');
// num.addEventListener('blur', sum)
// function sum() {
//     let sum = 0;
//     let str = String(num.value);
//     let arr = str.split('')
//     for (let i=0; i < arr.length; i++) {
//         sum += +arr[i]
//     }
//     num.value = sum
// }
// №4
// let nums = document.querySelector('input')
// nums.addEventListener('blur', summa)
// function summa() {
//     let str = String(nums.value);
//     let arr = str.split(',');
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
// 		sum += parseInt(arr[i]);
// 	}
//     nums.value = sum / arr.length;
// };
// №5
// let fullname = document.querySelector('#fullname');
// let fio = document.querySelectorAll('#fio');
// fullname.addEventListener('blur', func)
// function func () {
//     let arr = fullname.value.split(' ')
//     for (let i = 0, j = 0; i < arr.length, j < fio.length; i++, j++) {
//         fio[j].value = arr[i]
//     }
// }
// №6
// let fio = document.querySelector('input')
// fio.addEventListener('blur', func)
// function func() {
//     let arr = fio.value.split(' ')
//     let arr2 = []
//     for(let i = 0; i < arr.length; i++){
//         arr2.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
//     }
//     fio.value = arr2.join(' ')
// }
// №7
// let text = document.querySelector('input')
// text.addEventListener('blur', quantity)
// function quantity() {
//     let num = 0;
//     let arr = text.value.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//     num++
//     }
//     text.value = 'кол-во слов втексте =' + ' ' + num;
// }
// №8
// let data = document.querySelector('input')
// data.addEventListener('blur', reverse)
// function reverse() {
//     let strData = String(data.value)
//     let res = strData.split('.').reverse().join('-')
//     data.value = res
// }
// №9
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener ('click', check)
// function check() {
//     let str1 = elem.value;
//     let arr = elem.value.split('');
//     arr.reverse();
//     let str2 = arr.join('')
//     if (str1 == str2) {
//     elem.value = 'yes';
// } else {
//     elem.value = 'no'
//     }
// }
// №10
// let num = document.querySelector('input')
// num.addEventListener('blur', func) 
// function func() {
//     let arr = num.value.split('')
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 3) {
//         num.value = 'yes';
//     } else {
//     num.value = 'no';
//     }
//     }
// }
// №11
// let elems = document.querySelectorAll('.container');
// let btn = document.querySelector('input');
// btn.addEventListener('click', function() {
//     for (let i = 0; i < elems.length;) {
//         let elem = elems[i++];
//             elem.textContent += ' ' + i;
//     }
// })
// №12
// let a = document.querySelectorAll('a')
// let btn = document.querySelector('input')
// btn.addEventListener ('click', roundbrackets)
// function roundbrackets() {
//     for (let i = 0; i < a.length; i++) {
//         a[i].innerHTML = a[i].innerHTML + '('+a[i].href+')'
//     }
// }
// №13
// let link = document.querySelectorAll('a');
// document.addEventListener('DOMContentLoaded', arrow) 
// function arrow() {
//   for (let i = 0; i < link.length; i++) {
//     if (link[i].href.indexOf('http://') == 0) {
//         link[i].innerHTML = link[i].innerHTML + '&rarr;';
//     }
//   }
// }
// №14
// let nums = document.querySelectorAll('p');
// for (let num of nums) {
//      num.addEventListener('click', func);
// }
// function func(){
//     this.textContent = Number(this.textContent) ** 2
// }
// №15
// let data = document.querySelector('input')
// data.addEventListener('blur', func)
// function func() {
//     let dayofWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//     let arr = data.value.split('.');
//     let [day, month, year] = arr;
//     let date = new Date(year, month-1, day);
//     let newDay = date.getDay();
//     data.value = dayofWeek[newDay]
// }
// №16
// let inp = document.querySelector('#inp');
// let plus = document.querySelector('#plus');
// let minus = document.querySelector('#minus');
// plus.addEventListener('click', add);
// minus.addEventListener('click', decrease);
// function add() {
//     inp.value = +inp.value + 1;
// };
// function decrease() {
//     if (inp.value > 0) {
//         inp.value = +inp.value - 1;
//     } else {
//         inp.value = 0;
//     }
// }
// №17
// let elems = document.querySelectorAll('p');
// let inp = document.querySelector('input');
// for (let i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('click', func)
// }
// let count = 0;
// function func() {
//     count++;
//     inp.value = count
// }
// №18 
// let divs = document.querySelectorAll('div');
// let btn = document.querySelector('input');
// btn.addEventListener('click', func)
// function func() {
//     for (let text of divs) {
//         text.innerHTML = text.innerHTML.slice(0, 10) + '...'
//     }
// }
// №19
// let generator = document.querySelector('#generator');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', randomString)
// function randomString() {
//     let str = '';
//     let anySymbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (let i = 0; i < 8; i++) {
//         str += anySymbol.charAt(Math.floor(Math.random() * anySymbol.length));
//       }
//       generator.value = str;
// }
// №20
// let btn = document.querySelector('#btn');
// let stroka = document.querySelector('#stroka');
// btn.addEventListener('click', mix)
// function mix() {
//     let str ='';
//     for (let i = 0; i <= stroka.value.length; i++) {
//         str += stroka.value.charAt(Math.floor(Math.random() * stroka.value.length));
//       }
//       stroka.value = str;
// }
// №21
// let celsius = document.querySelector('p');
// let btn = document.querySelector('#btn');
// let fahrenheit = document.querySelector('#fahrenheit');
// btn.addEventListener('click', degrees);
// function degrees() {
//     celsius.textContent = (fahrenheit.value - 32) * 5 / 9
// }
// №22
// let btn = document.querySelector('#btn');
// let num = document.querySelector('#num');
// let factorial = document.querySelector('p');
// btn.addEventListener('click', func);
// function func() {
//     let res=1;
//     for (let i = 1;i <= num.value; i++) {
//         res *= i;
//     }
//     factorial.textContent = res;
// }
// №23
// let btn = document.querySelector('#btn');
// let korni = document.querySelector('p');
// let a = document.querySelector('#kofa');
// let b = document.querySelector('#kofb');
// let c = document.querySelector('#kofc');
// btn.addEventListener ('click', func)
// function func () {
//     let D = b.value**2 - 4*a.value*c.value
//             if(D > 0) {
//                 let x1=(-(b.value)+Math.sqrt(D)) / 2 * a.value;
//                 let x2=(-(b.value)-Math.sqrt(D)) / 2 * a.value;
//                 korni.textContent = ("x1 = " + x1 + ", x2 = " + x2);
//             } else if (D == 0) {
//                 let x = (-(b.value) / (2 * a.value));  
//                 korni.textContent = ("x = " + x);
//             }
//             else {
//                 korni.textContent = 'нет корней'
//             }
//           } 