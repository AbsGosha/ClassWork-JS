// оператор typeof - возвращает тип данных аргумента
// console.log(typeof 10); // number
// console.log(typeof 'weqf'); // string
// console.log(typeof true); // boolean
// console.log('ab'+'cd'); // abcd
// console.log(5 + '7'); // при сложении числа и строки, число преобразуется в строку
// console.log(5 * '5'); // при умножении, делении и вычитании строки преобразуются в числа
// console.log(10 / '5'); // 2
// console.log(10 + true); // при выполенении мат. операций с булевыми значениями и числами, булевые числа преобразуются в цифры, true = 1, false = 0
// // String(), Number(), Boolean() - явное преобразование
// console.log(Number('5t')); // NaN - это специальлное значение, означает не число
// случаи false: Boolean(0), Boolean(null), Boolean(undefined), Boolean(NaN), Boolean('')

// let isRain = false;
// if(isRain){
//     console.log('Возьми зонт');
// }
// else{
//     console.log('Надень кепку');
// }
// console.log('Идем гулять');

// alert('сообщение'); // всплываюещее окно с сообщением
// let answer = confirm('хотите продолжить?'); // всплывающее окно с выбором
// console.log(answer)
// if(answer){
//     console.log('доступ открыт')
// }
// else{
//     console.log('доступ закрыт')
// }

// let userName = prompt('введите ваше имя', 'Иван') // всплывающее окно с вводом
// if(userName){
//     console.log(`Привет, ${userName}`)
// }

// let a = Number(prompt('Введите первое число'))
// let b = Number(prompt('Введите второе число'))
// console.log(a+b)

// console.log(true && true) // true
// console.log(true && false) // false
// console.log(false && true) // false
// console.log(false && false) // false

// let login = 'abc';
// let password = '123';
// let userLogin = prompt('Введите логин: ');
// let userPassword = prompt('Введите пароль');
// if (login === userLogin && password === userPassword){
//     console.log('Данные верны');
// }
// else{
//     console.log('данные неверны');
// }

// console.log(true || true) // true
// console.log(true || false) // true
// console.log(false || true) // true
// console.log(false || false) // true

// let isSubscribe = confirm('У вас есть подписка')
// let summa = Number(prompt('Введите сумму покупки'))
// if (isSubscribe || summa >= 1000){
//     console.log('у вас есть скидка')
// }
// else{
//     console.log('скидки нету')
// }

// let sum = Number(prompt('Введите сумму покупки'))
// if(sum >= 500 && sum < 700){
//     console.log((sum - (sum / 100) * 3))
// }
// else if (sum >= 700 < 1000){
//     console.log((sum - (sum / 100) * 5))
// }
// else if (sum >= 1000) {
//     console.log((sum - (sum / 100) * 7))
// }
// else {
//     console.log(sum)
// }

// let isRain = true
// let isZont = (isRain) ? 'yes' : 'no'
// console.log(isZont)

// let count = 35
// let capacity = (count <= 30) ? 'студенты поместятся' : 'студенты не поместятся'
// console.log(capacity)

// let v1 = prompt('Введите объем 1, 2, 3')
// let toppings = prompt('Количество добавок')
// let totalSum = 0;
// if (toppings){
//     totalSum += toppings * 20
// }
// else if(v1 == '1'){
//     totalSum += 100
// }
// else if(v1 == '2'){
//     totalSum += 200
// }
// else if (v1 == '3'){
//     totalSum += 300
// }
// console.log(totalSum)

// let price;
// let age = Number(prompt("Введите ваш возраст: "))
// let student = confirm("Вы студент?")
// if(student){
//     price = 400
// }
// else if(age < 7){
//     price = 0
// }
// else if(age>=7 && age<17){
//     price = 300
// }
// else{
//     price = 600
// }
// let weekend = confirm("Сейчас выходной?")
// if(weekend){
//     let newPrice = price * 20 / 100
//     price = price+newPrice
// }
// alert(`${price} рублей`)

// let sum = Number(prompt("На какую сумму покупка?"))
// let birthday = confirm("У вас сегодня день рождения?")
// let programm = confirm("Являетесь ли вы участником программы?")
// let bonus;
// if(sum < 1000){
//     bonus = sum / 100
// }
// else if(sum >= 1000 && sum < 4999){
//     bonus = sum / 100 * 2
// }
// else if(sum >= 5000){
//     bonus = sum / 100 * 3
// }
// if(programm){
//     bonus*=2
// }
// if(birthday){
//     bonus+=500
// }
// alert(`Ваши бонусы: ${bonus}`)

// console.log(Math.abs(-10))
// console.log(Math.ceil(5.6))
// console.log(Math.floor(4.7))
// console.log(Math.round(1.2))
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(9))
// console.log(Math.log(100))
// console.log(Math.sin(90))
// console.log(Math.sin(90))
// console.log(Math.tan(60))
// console.log(Math.min(5,86,4,33))
// console.log(Math.max(76,88,6,0))

// let price = Number(prompt("Введите число:"))
// let range = prompt("Введите day, month или year:")
// if(range == "day"){
//     console.log(`${price} Р в день`)
// }
// else if(range == "month"){
//     console.log(`${price} в месяц`)
// }
// else{
//     console.log(`${price} в год`)
// }

// let temp = Number(prompt("Введите температуру:"))
// let weather = prompt("Введите clear/cloudy")
// let activity
// if(temp>=25 && weather == "clear"){
//     activity = "golf"
// }
// else if(temp>=10 && temp<=24 || weather == "cloudy"){
//     activity = "bowling"
// }
// else{
//     activity = "hiking"
// }
// console.log(activity)

// let a = Number(prompt("Введите первое число:"))
// let b = Number(prompt("Введите второе число:"))
// let sign = prompt("Введите операцию: +, -, /, *")
// if(sign == "+"){
//     console.log(`${a} + ${b} = ${a+b}`)
// }
// else if(sign == "-"){
//      console.log(`${a} - ${b} = ${a-b}`)
// }
// else if(sign == "*"){
//     console.log(`${a} * ${b} = ${a*b}`)
// }
// else if(b === 0){
//     console.log("На ноль делить нельзя!")
// }
// else{
//      console.log(`${a} / ${b} = ${a/b}`)
// }

// let word = prompt("Введите слово:")
// let result
// if(Math.sqrt(word.length) % 1 == 0){
//     result = 1
// }
// else{
//     result = 0
// }
// console.log(result)

// let password = '123'
// let user = ''
// do{
//     user = prompt('Enter password: ')
// } while(user != password)
// if (user == password){
//     alert('password correct')
// }

// let number = 5
// let num = ''
// num = prompt('Enter number')
// if(num == number){
//     alert('You are right')
// }
// else{
//     while(num != number){
//         num = prompt('Enter number')
//         if(num > number){
//             alert('Number big')
//         }
//         else if(num < number){
//             alert('Number small')
//         }
//     }
// }

// let number = Number(prompt('Enter number'))
// let i = 0
// let sum = 0
// while(i <= number){
//     sum+=i
//     i++
// }
// alert(sum)

// let number = Number(prompt('Enter number'))
// let sum = 0
// while(number!=0){
//     sum+=number
//     number = Number(prompt('Enter number'))
// }
// alert(sum)

// for(let i = 0; i <= 10; i++){
//     if(i % 2==0){
//         alert(i)
//     }
// }

// let count = 0
// for(let i = 0; i <= 15; i++){
//     if(i % 3==0){
//         count++
//     }
// }
// alert(count)

// for(let i = 0; i < 5; i++){
//     let line = ''
//     for(let j = 0; j < i; j++){
//         line+='*'
//     }
//     console.log(line)
// }

// let secret = 7
// let guessed = false
// for(let i=0;i<5;i++){
//     let userInput(Number(prompt(`Угадайте число, попытка ${i+1} из 5`)))
//     if(userInput === secret){
//         secret = true
//         alert('Вы угадали')
//         break
//     }
// }
// if(!secret){
//     alert('Попытки закончились')
// }

// let sum = 1
// for(let i=1; i <= 5; i++){
//     sum*=i
// }
// alert(sum)

// let word = prompt('Enter word: ')
// let result = ''
// for(let i=0;i<word.length;i++){
//     if(word[i]!='а' && word[i]!='А' && word[i]!='о' && word[i]!='О'){
//         result+=word[i]
//     }
// }
// console.log(result)

// let num = Number(prompt('Enter number: '))
// for(let i = 1; i < num; i++){
//     if(i%3==0){
//         console.log(i)
//     }
// }

// let numm = Number(prompt('Enter number: '))
// let j = 1
// console.log(j)
// for(let i = 2; i <= numm; i++){
//     j+=String(i)
//     console.log(j)
// }

// let numn = Number(prompt('Enter number: '))
// let sum = 1
// let sumn = 0
// for(let i = 1; i <= numn; i++){
//     sumn += sum*=i
// }
// console.log(sumn)

// let words = prompt('Enter word: ')
// let reverse = ''
// for(let i=words.length-1; i>=0; i--){
//     reverse += words[i]
// }
// if(words === reverse){
//     console.log('YES')
// }
// else{
//     console.log('NO')
// }

// let students = ['Иванов', 'Петров', 'Сидоров']
// console.log(students[0])
// students[3] = 'Шевченко'
// console.log(students[3])
// console.log(students.length)
// students.push('Бобров')
// console.log(students)
// students.unshift('михайлов')
// console.log(students)
// students.shift()
// console.log(students)
// students.pop()
// console.log(students)
// for(let i = 0; i < students.length; i++){
//     console.log(students[i])
// }

// let num = [1,2,3,4,5,6]
// let sum = 0
// for(let i = 0; i < num.length; i++){
//     if(num[i] % 2 == 0){
//         sum+=num[i]
//     }
// }
// console.log(sum)

// function sayHello(name){
//     console.log(`hello ${name}`)
// }

// function calculateSUm(a,b){
//     console.log(a+b)
// }

// function showTime(h,m,s){
//     console.log(`Time ${h}:${m}:${s}`)
// }

// function averageAge(arr){
//     let sum = 0;
// let a = arr.length
// for(let i = 0; i < arr.length; i++){
//     sum+=arr[i]
// }
// console.log(sum/a)
// }

// function eX1(r,s){
//     let hours = Math.round(r/s)
//     return hours
// }

// function eX2(sum, sk){
//     let fSum = sum - ((sum/100)*sk)
//     if(sum < 2000){
//         fSum+=200
//     }
//     return fSum
// }

// function eX3(array){
//     let arrNew = []
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             arrNew[i]=array[i]
//         }
//     }
//     return arrNew
// }
// sayHello('ivan')
// calculateSUm(5,2)
// showTime(15,23,58)
// let arr = [10,5,60,44]
// let arr1 = [34,5,22,13]
// averageAge(arr)
// averageAge(arr1)
// eX1(50,10)
// console.log(eX2(3000,20))
// let arr2 = [1,2,3,4,5,6]
// console.log(eX3(arr2))

// function ex1(km, hours) {
//   let price = 150 * km;
//   if (hours >= 23 || hours < 6) {
//     price = price * 0.3 + price;
//     return price;
//   } else {
//     return price;
//   }
// }
// console.log(ex1(20,7))

// let calculate = function (a, b) {
//   return a + b;
// };
// console.log(calculate(5,5))

// let calculate = (a,b) => {a+b}
// console.log(calculate(1,2))
// let sum = () => {
//   if (a > 5) {
//     return a + b;
//   } else {
//     return a - b;
//   }
// };

// let double = (num) => num * 2;
// function double(num) {
//   return num * 2;
// }

// let ex1 = (num) => num%2==0 ? true : false
// console.log(ex1(2))

// function checkElem(num) {
//   if (num % 7 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkElem(13))

// function changeArr(arr, num1){
//     let newArr=[]
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(arr[i]*num1)
//     }
//     console.log(newArr)
// }
// let array = [1,2,3,4]
// let result = changeArr(array, 3)
// console.log(result)

// function sumElems(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== '' && !isNaN(arr[i])){
//             sum += Number(arr[i]);
//         }
//     }
//     return sum
// }
// let array1 = ['10','Строка','5g','15','05']
// let result1 = sumElems(array1)
// console.log(result1)

// function reverseIndex(arr){
//     let newArr = []
//     for(let i = arr.length - 1; i >= 0; i--){
//         newArr.push(arr[i])
//     }
//     console.log(newArr)
// }
// let array2 = [1,2,3,4,5]
// reverseIndex(array2)

// function checkElem(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             return true;
//         }
//     }

//     return false;
// }
// let array3 = [1,2,3,4]
// let result2 = checkElem(array3, (elem) => elem == 3 )
// console.log(result2)

// let cat = {
//   name: "barsik",
//   age: 10,
// };
// cat.color = "black";
// console.log(cat.name);
// delete cat.age;
// console.log(cat);
// console.log("name" in cat);
// for(let key in cat){
//     console.log(cat[key])
// }

// let user = {
//   name: "qwerty",
//   password: 123,
//   age: 22,
//   isAdmin: false,
//   hobbies: ["football", "voleyball", "basketball"],
//   sayHi: function () {
//     console.log('hello ' + this.name);
//   },
// };
// user.work = 'doctor' // add
// user.age = 21 // change
// delete user.isAdmin // delete
// console.log('work' in user)
// console.log(user)
// for(let key in user){
//   console.log(user[key])
// }
// let user1 = user;
// console.log(user === user1);
// user.sayHi();

// let products = {
//   id: 1,
//   tittle: "apple",
//   category: "fructs",
//   price: 100,
//   inStock: true,
//   quantity: 50,
// };
// console.log(`tittle: ${products.tittle} price: ${products.price}`)
// products.price = 150
// console.log(products.price)
// products.brand = 'rostov'
// console.log(products.brand)
// delete products.inStock
// console.log('discount' in products)

// let wallet={
//   owner: 'ivan',
//   balance: 0,
//   showBalance:function(){
//     console.log(`name: ${this.owner} balance: ${this.balance}`)
//   },
//   deposit: function(sum){
//     console.log(this.balance+= sum)
//   },
//   withdraw: function(num){
//     console.log(this.balance -= num)
//   }
// }
// wallet.showBalance()
// wallet.deposit(1000)
// wallet.withdraw(500)

// let cart = {
//   apple: 100,
//   milk: 50,
//   bread: 30,
// };
// let sum = 0
// for(let key in cart){
//   sum+=cart[key]
// }
// console.log(sum)

//console.log(Object.keys(cart)) // возвращает массив из свойств объекта
//console.log(Object.values(cart)) // возвращает массив из значений объекта
//console.log(Object.entries(cart)) // возвращает массив из свойств и значений объекта

// let fruits = ['apple', 'grapes', 'orange']
// for(let i = 0; i < fruits.length; i++){
//   console.log(fruits[i])
// }
// for(let fruit of fruits){
//   console.log(fruit)
// }

// let nums = [10,20,30]
// let nums1 = []
// for(let n of nums){
//   nums1.push(n*5)
// }
// for(let n of nums1){
//   console.log(n)
// }

// let sum = 0
// let users = [{name: 'ivan', age: 20}, {name: 'bob', age: 25}, {name: 'sam', age: 30}]
// for (user of users){
//   sum+=user.age
// }
// console.log(sum/users.length)

// let str = 'qwertyqfgqcsq'
// let c = 0
// for(let s of str){
//   if(s == 'q'){
//     c+=1
//   }
// }
// console.log(c)

// let animals = ['dog', 'cat', 'bird']
// animals.splice(0,1)
// animals.splice(2, 0, 'ant')
// console.log(animals)
// let animals1 = animals.slice()
// console.log(animals1)
// let cat = animals.slice(0,1)
// console.log(cat)
// console.log(animals.indexOf('cat'))
// console.log(animals.includes('bird'))
// console.log(animals.reverse())
// let animals2 = 'qwe, rty, uio'
// let arr = animals2.split(', ')
// console.log(arr)
// let animals3 = ['qw', 'er', 'ty']
// let str = animals.join(', ')
// console.log(str)
// animals.forEach((value)=>{
//   console.log('element: ' + value)
// })

// function sum(...args){
//   let sumn = 0
//   for(let arg of args){
//     sumn+=arg
//   }
//   return sumn
// }
// console.log(sum(1,5))

// let input = "Ivan, Anna, Masha, Petr, Anna"
// let arr = input.split(', ')
// console.log(arr)
// console.log(arr.indexOf('Petr'))
// console.log(arr.includes('Oleg'))
// arr.splice(2,1,'Aleks')
// console.log(arr)
// console.log(arr.reverse())
// let str = arr.join('-')
// console.log(str)

// let obj = {
//   price1: 100,
//   price2: 150,
//   price3: 200,
//   price4: 100,
//   price5: 150,
// };
// let sum = 0;
// for(let key in obj){
//     sum+=obj[key]
// }
// console.log(sum)

// let array = [
//     {id: 1, name: 'apple'},
//     {id: 2, name: 'watermelon'},
//     {id: 3, name: 'qiwi'},
//     {id: 4, name: 'lemon'}
// ]
// let arr = []
// for(let i = 0; i < array.length; i++){
//     arr.push(Object.values(array[i]))
// }
// console.log(arr)

// function logString(...args){
//     let str = ''
//     for(let arg of args){
//         str+=arg
//     }
//     return str
// }
// console.log(logString('hello ', 'my ', 'world'))

// function checkObj(obj){
//     if('particle' in obj){
//         return true
//     }
//     else{return false}
// }
// console.log(checkObj({id: 1, particle: 10}))
// console.log(checkObj({id: 1, name: 10}))

// function generateArr(array){
//     for(let i = 0; i < array.length; i++){
//         if(typeof array[i] === 'object' && array[i] !== null && !Array.isArray(array[i])){
//             array.splice(i,1,Object.values(array[i]))
//         }
//     }
//     return array
// }
// let array1 = [[1], {id: 40}, [100], [300], {part: 10}]
// console.log(generateArr(array1))

// let today = new Date()
// console.log(today)
// let date = new Date(2024, 2, 22)
// console.log(date)
// console.log((today-date) / (100 * 60 * 60 * 24))
// let today = new Date()
// console.log(today.getFullYear())
// console.log(today.getMonth())
// console.log(today.getDate())
// console.log(today.getDay()) // воскресенье - 0, понедельник - 1
// let today = new Date()
// today.setFullYear(2030)
// console.log(today)
// let dr = new Date(2009, 5, 8)
// dr.setFullYear(2009)
// dr.setMonth(5)
// dr.setDate(8)
// console.log(dr)
// let today = new Date()
// console.log((today.getFullYear()-dr.getFullYear()))
// let date = new Date()
// let format = date.toLocaleDateString('en-US')
// console.log(format)
// let formatTime = date.toLocaleTimeString('ru-RU')
// console.log(formatTime)
// let formatDate = date.toLocaleString('ru-RU',{
//     day: "numeric",
//     month: "long",
//     year: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit"
// })
// console.log(formatDate)
// let date = new Date();
// let num = new Date(2000, 0, 1);
// console.log(Math.round((date - 1970) / (1000 * 60 * 60)));
// console.log(Math.round((date - num) / (1000 * 60 * 60 * 24)));
// date.setFullYear(date.getFullYear() + 5);
// console.log(date);

// function checkDate(date) {
//   if (date.getFullYear() / 4 == 0) {
//     console.log("високсоный");
//   } else {
//     console.log("невисокосный");
//   }
// }
// checkDate(date);

// function logDay(date) {
//   let date2 = new Date();
//   if (
//     date.getDate() === date2.getDate() &&
//     date.getMonth() === date2.getMonth() &&
//     date.getFullYear() === date2.getFullYear()
//   ) {
//     console.log("Сегодня " +date.toLocaleDateString("ru-RU", {
//           weekday: "long",
//         }),
//     );
//   } else {
//     console.log(date.toLocaleDateString("ru-RU", {
//         weekday: "long",
//       }),
//     );
//   }
// }
// let date1 = new Date("2022-10-18");
// logDay(date1);

// function endDay() {
//   let now = new Date();
//   let end = new Date();
//   end.setHours(23, 59, 59, 999);
//   return Math.floor((end - now) / 1000);
// }
// console.log(endDay());

// let str = "qwErty"
// console.log(str.length)
// console.log(str[0])
// console.log(str.at(-6))
// console.log(str.includes('qw'))
// console.log(str.indexOf('w'))
// console.log(str.slice(0,3))
// let arr = str.split(' ')
// console.log(arr)
// console.log(str.replace('q', 'a'))
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// let email = prompt("Enter email: ")
// if(email.includes("@") && email.endsWith(".com") && email.startsWith("student")){
//   console.log("Email true")
// }else{console.log("Email false")}

// let phone = prompt("Enter phone: ")
// let plus = phone.includes("+")
// let number = phone.replace("+", "")
// if(plus && number.length === 11 && !isNaN(number)){
//   let result = number.slice(0,7)+ "****"
//   console.log("Number: +" + result)
// }else{console.log("Error number")}

// test() проверяет по шаблону
// let regexp = /\d{4}/
// let str = '1234'
// console.log(regexp.test(str))
// match() находит совпадения с шаблоном и сохраняет в массив

// let phones = [
//   "590.423.4568",
//   "650.124.7234",
//   "650.507.9879",
//   "011.44.1343.529268",
//   "011.44.1344.478968",
//   "011.44.1644.429267",
//   "11.44.1343.52",
//   "11.44.1643.52",
// ];
// let arr = []
// for(let i = 0; i < phones.length; i++){
//     let last = phones[i].lastIndexOf(".")
//     let result = phones[i].slice(0,last+2)+"****"
//     arr.push(result)
// }
// console.log(arr)

// let cards = [
//   "4000 0012 0056 9499",
//   "4000 0013 5456 7379",
//   "4000 0014 1456 9869",
//   "4000 0015 3466 7859",
//   "4000 0016 3556 6899",
//   "4000 0017 4456 4699",
// ];
// let arr = [];
// let arr1 = [];
// for (let i = 0; i < cards.length; i++) {
//   let first = cards[i].indexOf(" ") + "*****";
//   let last = cards[i].lastIndexOf(" ");
//   let result = cards[i].slice(last+1, last + 5);
//   arr.push(first);
//   arr1.push(result);
// }
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]+arr1[i])
// }
// let arr = [];
// for(let i = 0 ; i < cards.length; i++){
//     let first = cards[i].slice(0,4)
//     let last = cards[i].slice(-4)
//     let result = first + "*****" + last
//     arr.push(result)
// }
// console.log(arr)

// function getInfo(prices) {
//   let c1 = 0;
//   let c2 = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i].startsWith("Цена")) {
//       c1++;
//     }
//     if (prices[i].endsWith("$")) {
//       c2++;
//     }
//   }
//   console.log("[",c1,c2,"]");
// }
// let prices = [
//   "Цена товара - 1200$",
//   "Стоимость - 500$",
//   "Цена не определена",
//   "9999",
//   "Ценовая категория - больше 300$",
//   "Цена за услугу 500 EUR",
//   "150$",
// ];
// getInfo(prices);

// function kingSayd(string){
//     if(string.startsWith("Король сказал")){
//         console.log(string)
//     }
//     else{
//         console.log("Король сказал: " + string)
//     }
// }
// let string = "Король сказал: сегодня хорошая погода"
// kingSayd(string)

// function iIstFridayToday(){
//     let date = new Date()
//     if(date.getDay() === 5){
//         console.log("Сегодня пятница!")
//     }
//     else if(date.getDay() === 6){
//         console.log("Пятница была вчера")
//     }
//     else if(date.getDay() === 4){
//         console.log("Завтра пятница!")
//     }
//     else{
//         console.log((5 - date.getDay() + 7) % 7)
//     }
// }
// iIstFridayToday()

// let numbers = [1,5,2,16,17,58]
// let newArr = []
// for(let num of numbers){
//     newArr.push(num*2)
// }
// console.log(newArr)

// let numbers = [1,5,2,16,17,58]
// console.log(numbers.map(num => num*2))
// let strs = ['anna', 'ivan', 'nikolai']
// console.log(strs.map(str => 'user name: ' + str))
// let object = [
//     {id:1, name:'vanya', age:20},
//     {id:2, name:'misha', age:30},
//     {id:3, name:'petya', age:40},
// ]
// console.log(object.map(obj => obj.name))

// let numbers = [1,5,2,16,17,58]
// let newArr = []
// for(let num of numbers){
//     if (num % 2 == 0){
//         newArr.push(num)
//     }
// }
// console.log(newArr)
// console.log(numbers.filter(num=> num %2 == 0))

// let phone = [
//     '+7929394234',
//     '234324234324',
//     '+123124213',
// ]
// console.log(phone.filter(num => num.startsWith('+')))

// let object = [
//     {id:1, name:'vanya', age:10},
//     {id:2, name:'misha', age:30},
//     {id:3, name:'petya', age:40},
// ]
// console.log(object.filter(obj => obj.age >= 18))

// let numbers = [1,5,2,16,17,58]
// for (let num of numbers){
//     if(num%2==0){
//         console.log(num)
//         break
//     }
// }
// console.log(numbers.find(num => num % 2 == 0))

// let numbers = [1,5,2,16,17,58]
// for(let num of numbers){
//     if(num % 2 !== 0){
//         console.log(true)
//         break
//     }
//     else{console.log(false)}
// }
// console.log(numbers.some(num => num%2!==0))
// console.log(numbers.every(num => num%2!==0))

let numbers = [1,5,2,16,17,58]
let sum = 0
for(let num of numbers){
    sum+=num
}
console.log(sum)