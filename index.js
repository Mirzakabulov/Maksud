'use strict';
// let hello = "Welcome";
// let name =`${hello} John \u00fa`;
// console.log(name);

// let fn=function(arg) {
//     return arg+10;
// }
// let w = `Hello ${fn(4)}`;
// console.log(fn(2));
// console.log(w)


// let text = "testing: 1,2,3,4";
// let pattern = /\d+/g;
// console.log(text.split(pattern));

// let a = NaN;
// let b = 10;
// if(a) {
//     console.log(a);
// }else{
//     console.log(b);
// }



// let x=0;
// if (x==0){
//  console.log(false);
// } else {
//     console.log(true);
// }

// let x = NaN; y=20;
// if(x && y) {
//     console.log("Both")
// }
// if (x||y){
//     console.log("else")
// } 
// if (!x){
//     console.log(true);
// }

// function fn(){
//    return 5+4;
// }
// console.log(fn());


// let a = Symbol();
// let b = Symbol();
// console.log(a==b);
// console.log(typeof a);

// let o = {};
// o["x"]=10;
// o["y"]=2;
// o["x"] = "text";
// o[Symbol()]=300;
// o[Symbol()]=500;
// o[Symbol()]=undefined;
// o[Symbol()]=null;
// console.log(o);

// let s = Symbol.for("shared");
// let t = Symbol.for("shared");
// console.log(s.toString());

// let a = 2;
// if(a%3 == 0){
//     console.log(`${a} soni 3ga qoldiqsiz bo'linadi`);
// }else {
//     console.log(`${a} soni 3ga bo'linmaydi`);
// }



// function fn(a) {
//     for (let i = 1; i <= a.length; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log(i)
//         }
//     }
// }

// fn("texttexttexttext")


// let a = "Maksud"
// console.log(a.charAt(a.length-1))



// a = "Hello world";
// let s=a.toUpperCase();
// let f=a.toLowerCase();
// console.log(s);
// console.log(a);
// console.log(f);


// o = {
//     x: 1
// }
// o.x = 12
// console.log(o);


// let a = [4,0];
// let b = a;
// b[1]= 5;
// b[20]="text"
// a [3]= 7;
// console.log(b);
// console.log(a);


// let o = {}
// let n = {}

// console.log(n==o);


// a=5;
// b="5";
// console.log(a === b);


// let n = {}
//     let m=n;
//     console.log(m==n);
//     m.x=10;
//     console.log(m);
//     console.log(n);


// let s = [1,2,3]
// let b=s;
// b[3]=undefined;
// console.log(b==s);

// let x = 7;
// let y = x;
// console.log(x==y);
// y = "text";
// console.log(x==y);

// let a = `Uzbekistan`
// let b = {};
// for (let i = 0; i < a.length; i++) {
//     b[i] = a[i];
// }
// console.log(b);



// let a=[1,2,3,4,5];
// let b=[1,"two","three", 4, "five"];
// for (i=0; i<=a.length; i++){
//     if (a[i]==b[i]) {
//         console.log(a[i]);
//     }
// }


// console.log(a[2]);
// console.log(b[2]);


// console.log(5+true);



// let k;

// function check(a){
//     if (typeof (a) == "number") {
//         console.log(a / 25);
//     } else if (typeof(a) == "string") {
//     console.log(a.length);
//     } else if (a === undefined) {
//         console.log(false)
//     }  
// }
//  check(k);
//  check(100);


 
// let[x, y]=[6, 7];
// console.log(x,y);


// function fn(x, y) {
//     return [x+5, y+5];

// }
// console.log(fn(5,7)[7]);

// let[x, y] = [1];
// console.log(x,y);

// let[,x,,,y] = [1, 2, 3, 4, 5]; 
// console.log(x, y);

// let [x, ...y] = [1, 2, 3, 4, 5];
// console.log(x, y);

// let[a,[...b]] = [1,[2,2.5]];
// console.log(a,...b)

// let a = "text";

// function fn(a) {
//     if (typeof (a) == "number") {
//         console.log(`${a} natural son`)
//     } else if (typeof (a) == "string") {
//         let [...d] = a;
//         console.log(d);
//     }
// }
// fn("oij")
// fn(10)

// function f (x){
//     if(x==0){
//         return 0
//     }
//     return x + f(x-2)
// }
// console.log(f(4));

// o = { x:10,y:20};
// let {x,y}=o
// console.log(o.x);

// const{sin, pow, cos, x, tan} = Math;
// console.log(pow(x));
// console.log(x);


// let a=[1, 2, 3, 4, 5,];
// let b=[4, 5, 6, 8, 12];
// let x=[...a,...b]
// console.log(x);

// const {ceil:d, floor:p} = Math;
// console.log(d(2.3));
// console.log(p(2.3));

// const {parseInt:pi}=Number;
// console.log(pi(3.14));
// console.log(pi("16hexA"));

// const f = [{a:7, b:8},{a:9, b:10}];
// let [{a:x1,b:x2},{a:y1,b:y2}]=f
// console.log(x1);
// console.log(f[0].a);

// const s = {t1:[4,5], t2:[6,7]};
// let{t1:[x1,y1], t2:[x2,y2]}= s;
// console.log(x2,x1);




// let qatiq = 1200; 
// console.log(qatiq*7);

// function sum(qatiq) {
//     let h = qatiq*7;
//     let o = qatiq*30;
//     let y = qatiq*365;
//     return [h, o, y];
// }
//  console.log(sum(1200)); 



//    let a = [1,,3,,,2];
//    console.log(a[1]);


// let square = function(x){
// return x*x;
// }
//  let rec = square;
//  console.log(rec(7));


//  let square = function(x){
//      return x*x;
//  }
//  let sand = square;
//  console.log(sand(9));


// function fn(a){
//     return a**3;
// } 
// const func=fn;
// console.log(func(3));
// console.log(fn(4));

// let o= {};
// o.x=5;
// o["y"]=6;
// o["5"]="text";
// console.log(o);

// let o={x:1,y:{z:3}};
// let a=[o,4,[5,6]]
// console.log(a[0].y.z);


// let n = {};
// n[" "]=10;
// console.log(n);

// let o={};
// console.log(o.b?.c);


// const dogs = ["Fido", "Odie", "Oscar"];
// dogs.length = 1;
// console.log(dogs);

// var difference = 45-10;
// console.log(difference);

// function test(val) {
//     if(val==12){
//         return "Equal";
//     } else {
//     return "Not Equal";
// }
// }
// console.log(test(12)); 
// console.log(test(10));

// function testgreaterThan(val) {
//     if (val>100) {
//         return "Over 100";
//     }
//     else if(val>10) {
//         return "Over 10";
//     } else 
//     return "10 or Under";
// }

// console.log(testgreaterThan(100));


// function testLogicalOr(val) {

//     if (val < 10 || val > 20) {
//       return "Outside";
//     }else {

//       return "Inside";
//   }
// }
//   console.log(testLogicalOr(15));

// o = {
//   x:{y:10}  
// }
// console.log(o.x?.y)

// let a = {
//     b: {}};
// console.log(a["b"]);

// let a = [];
// let i = 0;
// a?.[i++];
// console.log(i);

// function maktab(x,y) {
//   return x*y;
// }
// console.log(maktab(12,5));

// let ob = {
//     x: 10,
//     y: function() {
//         return this.x;
//     }
// }
// console.log(ob.y());

// let a;
// let index = 0;
// try {
//     a[index++];
// }catch(e) {
//     index
// }
// console.log(index);

// let a = 11;
// let b = 9;
// if ((a + b) % 5 == 3) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// console.log("5" +  {});
// console.log("5" + true); 


// function table(x) {
//     let y = 2.3*x**3+6*x**2+3*x+8;
//     return y;
// }
// console.log(table(10));

// console.log(undefined!=null);

// function kvadrat (a,b) {
//   let p = 2*(a+b);
//   let d = Math.sqrt(a**2 + b**2);
//   let s = a*b;
//   return [p, d, s];
// }
// console.log(kvadrat(4,30));  


// let hajim;
// let x = 3;
// hajim=Math.pow(x,3);
// console.log(hajim);


// let book = {
//     topic : "O'tgan kunlar"
// }
// console.log("topic" in book);


// let data = [7,8,9];
// console.log(0 in data);

// let laptop = {
//     brand: "Lenovo",
//     screen_inch: 14,
//     memory: "500gb"
// }

// if(!("graphic card" in laptop)){

// }else{
//     laptop["graphic card"] = "AMD"
// }
// console.log(laptop);


// class A {}
// let c = new A;
// console.log(c instanceof A);

// a = [1,2,3]
// console.log(a instanceof Array);
// let x,y;
// console.log(x==0 && y==0);

// let a =10, b = 10;
// if (a==b)
// console.log(true);

// a==b && console.log(true);

// function wr (o,p) {
//     p=p || {};
//     return o;
// }
//  console.log(wr);

//  let a = 4
//  console.log(a=2*a);

// let a = 10;
// let greeting = a < 10 ? "true" : "false";
// console.log(greeting);

// let x = "ishga kelsin";
// y = "ishga kelsin";
// z = "ishga kelsin";
// if (!(x||y||z)) {

// console.log("Hamma kelsin");

// } else {
//     console.log("Havfsiz"); 
// };


// let a = 0;
// let b = 0;
// let c = 30;
// console.log(a ? b : (b ? b : c)); 

// let a = null;
// let b = 20;
// console.log(a ? a : b);
// console.log(a ?? b);
 

// let options = {
//     y:3,
//     x:4
// }
   
// console.log((typeof(options.y)==="string")?
//  options.y : options.y.toString())

// let options = {
//     x:0,
//     y:false,
//     z:"",
//     w:true,
// }
// delete options.w;
// console.log(options);


// let a = [1, 2, 3];
// delete a [0];
// // delete a [1];
// // delete a [2];
// console.log(a);

// let a = "1500 so'm";
// let b = 1000;
// console.log(parseInt(a) > b);


// let sum = 0;
// for ( let i = 0; i <= 8_000_000; i++) {
//     if (i % 7 == 0 && i % 11 == 0) {
//         sum+=i;
//     }
// }
// console.log(sum);

// function copy (x, y) {
//     if (typeof x === "number" && typeof y === "number") {
//         return x*y;
//     }
//     return x+y;
// }
// console.log (copy(4,4));

// {
//     a = 35;
//     b = 40;
//     c = "Si"
// }
// console.log(c);


// let n = 10;
// if (n===1) {
//     console.log("You have 1 new MessageChannel.");
//     } else {
//         console.log("You have ${n} new message")
//     }


      


// let a = 1;
// if (a === 0) {
//     console.log(a);
// } else if ( a === 1){
//     console.log(a);
// } else if ( a === 2){
//     console.log(a);
// } else if ( a === 3){
//     console.log(a);
// } else {
//     console.log(a);
// }
// let a = 5
// switch (a) {
//     case 1:
//         console.log(a);
//         break;
//     case 2:
//         console.log(a);
//         break;    
//     case 3:
//         console.log(a);
//         break;
//     default:
//         console.log(a);
//         break;  
// }          


// let a = "cool";
// if(typeof a === "number") {
//     console.log(`${a} - bu raqam`);
// }else if (typeof a === "string") {
//     console.log(`${a} - bu string`);
// }else if (typeof a === "object") {
//     console.log(`${a} - bu object`);
// } else if (typeof a === "function"){
//     console.log(`${a} - bu funktsiya`);
// } else {
//     console.log(a);
// }

// let a = 3;
// switch (typeof a) {
//     case "number":
//         console.log(a);
//         break;
//     case "string":
//         console.log(a);
//         break;
//     case "object":
//         console.log(a);
//         break;
//     case "function":
//         console.log(a);
//         break;
//     default: 
//         console.log(a);
//         break;          
// }


// function convert(x) {

//     switch(typeof x) {
//       case "number":
//           return x.toString(16);
//       case "string":
//           return '"' + x + '"';
//       default:
//           return String(x);
//     }
           
// }  
// console.log(convert(10));


// let count = 0;
// while( count < 10 ) {
//     console.log(count);
//     count++;
// }
// console.log(count);

// let count = 0;
// do {
//     count++
//     console.log(count);
// }while (count < 10);

// function lengthArr(a) {
//     len = a.length; i = 0;
//     if (len === 0 ){
//         console.log("Array empty");
//     } else {
//         do {
//             console.log(a[i]);
//         } while (++i < len)
//     } 
// }
// lengthArr([1, 2, 3, 4, 5, 6])

// let i = 1;
// while(i <= 5){
//     console.log("hello world");
//     i++;
// }

// let num = 12345;
// // let num2 = 0
// while(num>0){
//     console.log(num%10);
//     num = parseInt(num/10)
// }
// console.log(num2);

// let a = 0;
// let sum = 0;
// while(a < 4) {
//     sum=sum+a;
//     a++;
// }
// console.log(sum)

// a = 12345;
// a_str = String(a);
// k = "";
// let w = a_str.length;
// while (w>0) {
//     w--;
//     k +=a_str[w];
// }
// console.log(Number(k));

// let i, j, sum = 0
// for (let i = 0, j = 20; i < 10; i++, j--) {
//     // console.log(j);
//     console.log(i);        
// };
// let arr = [1, 2, 3]
// for (let k of arr){
//    console.log(k); 
// }

// let arr = [1, 2, 3, 4, 5];
// for(let element of arr){
//     console.log(element);
// }

// let obj = {
//     x: 4,
//     y: 5,
//     z: 9,
// }
// for (let key of Object.keys(obj)){
//     console.log(obj[key]);
// }

// let detail = {
//     x:3,
//     y:6     
// }
// for(let k in detail){
//     console.log(detail[k]);
// }

// let num = 6;
// let result;
// if(num%2===0){
//     result = "even"
// }  else  {
//     result = "odd"
// }
// console.log(result);



// result = num%2===0 ? "even" : "odd"
//  console.log(result);


// let input = "name"
// let alien = {
//     name: "Navin",
//     tech: "JS",
//     work_exp: 4    
// }
// console.log(alien[input]);

// let posts = {
//     "id": 1,
//     "title": "post title",
//     "body":
//     "post body"
// };
// for(let post in posts){
//     // console.log(posts[post]);
//     console.log(post);
// }


// let numbers = [1, 3, 5, 7, 9];
// for(let number in numbers){
//     console.log(number);
//     console.log(numbers[number]);
// }

// let user = {
//     firstName: "john",
//     lastName: "doe"};
// for(key in user){
//     console.log(user[key]);
// }

// let i = 0;
// while(i <10){
//     console.log(i);
//     i ++;
//     if(i === 5) break; // will not be counted until 10
// }


// let i = 0;
// while(i < 10){
//     i ++;
//     if(i === 5) continue; // 5 will be dropped.
//     console.log(i);
// }


// let people = [
//     {
//         firstName: "John",
//         lastName: "Doe"
//     },
//     {
//         firstName: "Jane",
//         lastName: "Doe"
//     }
// ]
// let names = [];
// for(person of people){
//     names.push("${person.firstName} ${person.lastName}");
// }
// console.log(names);


// let people = {
//     firstName: "Abdulloh",
//     secondName: "Karimov"
// }
// for(person in people) {
// }
// console.log(people);
// console.log(people[person]);

// let numbers = [ [1, 2], [3, 4], [5, 6] ];
// for( let i = 0; i < numbers.length; i++ ) {
//     for( let j = 0; j < numbers[i].length; j++) {
//         console.log(numbers[i][j]);
//     }
// }

// let numbers = [10, 9, 8, 7, 6, 5, 4];

// for (let i = 0; i < numbers.length; i++); {
//     console.log(numbers);
// }

// let nums = [];
// nums[0] = 5;
// nums[99] = 9;
// for(let n of nums){
//     console.log(n);
// }


// let data = ['Maksud', 5, {tech:"JS"},
//  function(){console.log('Hello world');}];
// console.log(data);
// data[3]();

// let a = [1, 3, 5, 8]
// for (let i = 0; i <a.length; i++) {
//     if(a[i] == 5) break;
//     console.log(a[i]);
// }

// user = {
//     username: "John",
//     age: 24,
//     job: "Programmer",
//     phone: "+12345",
//     email:"john@example.com"
// }
// for(let key of Object.keys(user)){
//     if (key == "age" || key == "phone" || key == "email"){
//         continue;
//     }
//     console.log(user[key]);
// }

// for (var i = 0; i < 3; i++){
//     setTimeout(()=> console.log(i), 1);
// }
// // for(let i = 0; i < 3; i++){
// //     setTimeout(() => console.log(i), 1);
// // }


// let a = [1, 2, 3];
// let b = [1, 2, 3];
// let c =  '1,2,3';

// console.log(a == c);
// console.log(b == c);
// console.log(a == b);

// const {name:myName , job:mainjob} = {name: "Lydia", job: "translator"};
// console.log(name);
// console.log(job);

// const sum = eval(10*10+5);
// console.log(sum);

// for(var i = 0; i < 12; i+=3) {
//     if(++i === 7) {
//         break;
//     } else continue;

// }
//  console.log(i++);

// function factorial(x) {
//     if(x<0) throw new Error ("x must not be negative");
//     let f;
//     for(f = 1; x > 1; f *=x,x--);
//     return f;
// }
// console.log(factorial(5));     

// try {
//     let n = Number(prompt("Please enter a positive integer", ""));
//     let f = factorial(n);
//     alert(n + "!=" + f);    
// }
// catch(ex) {
//     alert(ex);
// }


// function getMonthName (mo) {
//     mo -=1;
//     let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
//     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     if(months[mo]) {
//         return months[mo]
//     } else {
//         throw 'InvalidMonthNo';
//     }
// }
// try {
//     console.log(getMonthName(15));
// } catch (error) {
//     console.log("Error found");
// } finally {
//     console.log("The Best Month");
// }


// something();

// try{
//     getClients();
// } catch(error) {
//     console.log(error);
// }finally {
//     console.log("Execute no matter what!");
// }

// function getClients(){
//     console.log("Downloading...");
//     setTimeout(function(){
//         console.log("Complete...");
//     }, 3000);
// }
// getClients();


// Getter/Setter

// let person = {
//     firstName: "Javohir",
//     lastName: "Berdiyev",
//     get fullName() {
//         return this.firstName+ " " +this.lastName;
//     },
//     set fullName(value){
//         let fullNameArray = value.split(' ');
//         this.firstName = fullNameArray[0],
//         this.lastName = fullNameArray[1]
//     }
// }
// person.fullName = "Maksud Mirzakabulov";
// // console.log(person.firstName+" "+person.lastName);
// // console.log(person.firstName,person.lastName);
// console.log(person.fullName);

// Module Pattern

// (function(){
//     console.log("Hello");
// })();

// let myModule = (function() {
//     return{
//         pub: function(){
//             return "Hello World";
//         }
//     }
// })().pub();

// console.log(myModule);


// function beforetryCatch() {
//     let obj = undefined;
//     console.log(obj.b);
//     console.log('Assalomu alaykum');
       
// }
// beforetryCatch();

// function afterTryCatch() {
//     try{
//         let obj = undefined;
//         console.log(obj.b);
//         console.log('Assalomu alaykum');
//     } catch (error) {
//         console.log('Error');
//     }   
// }
// afterTryCatch();
// console.log("Assalomu alaykum");

// const [a,...b,] = [1, 2, 3];
// console.log(b);

// function fix(a) {
//     if(!a) debugger;
//     return a;
// }
// fix(0);

// let n = 10;
// prime: for (let i = 0; i <= n; i++) {

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue prime;
//         console.log(i+' '+j);
//     }
   
//     console.log(i);
//     console.log('\n');
// }


// for nested loop


// for(let i = 0; i < 4; i++){
//     for(let j = 0; j < 4; j++){
//       console.log(i+' '+j);
//     }
    
//     console.log('\n');
//   }

// let nums = [5, 3, 2, 5, 7]
// // console.log(nums);
// let [a, b, c, d, e]=nums;
// console.log(e);

// let words = "My name is Maksud Mirzakabulov".split(' ');
// let [a,b,c,d,e] = words;

// console.log(d , e);

// const x = 59.9 | 0;
// console.log(x);


// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// foo();
// console.log(typeof a);
// console.log(typeof b);

// let o ={
//     x: 10,
//     y: 20
// };
// console.log(delete o.x);
// console.log(delete o.x);
// // console.log(delete o);
// console.log(o);


// let f = function(){
//     this.a = 1;
//     this.b = 2;
// };
// let o = new f();
//     o.d = 5;

// f.prototype.b = 3;
// f.prototype.c = 4;

// console.log(o.a);
// console.log(o.b);
// console.log(o.c);
// console.log(o.d);

// console.log(o);

// console.log(f);
// console.log(f.prototype);



// let d = function(){
//     this.a = 5;
//     this.b = 10;
// };
// let e = new d();
// e.c = 34;
// d.prototype.g = 12;

// console.log(e.a);
// console.log(e.b);
// console.log(e.c);
// console.log(e.g);
// console.log(d);
// console.log(e);

// let car = {
//     Wheel: "Four",
//     Model: "Tesla",
//     show(){
//         console.log(`Car Model ${this.Model}, Have ${this.Wheel} Wheel`);
//     } 
// };
// let bike={
//     CC: 250
// };

// bike.__proto__=car;
// console.log(bike);
// console.log(bike.CC);
// console.log(bike.Wheel);
// console.log(bike.Model);
// bike.show();


// let o  = {};
// function fn(o, propertyname,value) {
//     if(!(typeof o ==='object')) var o = {};
//     o[propertyname]=value;
//     return o[propertyname] = value;
// }
// fn(o, "propertyname" , 5);
// fn(o, "property" , 5);
// fn(o, "name" , 5);

// console.log(o);
// console.log(o);

// let o = 0;
// for(let i = 0; i < 6; i++){
//     console.log((o, "Address" +i, 5)); 
// }
// console.log(o);

// let addr = "";
// let customer = 0;
// for (let i = 0; i < 4; i++) {
//     addr += customer[`address${i}`] + "\n";
// }
// console.log();

// let radius = 10;
// const pi = 3.14;
// // let result = radius % 3;
// let result = pi * radius**2
// console.log(result);

// let result = 5 * (10-3)**2;

// console.log(result);

//let ninjas = ['Shaun', 'Maksud', 'Karimbek'];
//let result = ninjas.join(',');
//let result = ninjas.concat(['Ken', 'Safina']);
//console.log(result);

// let age// = null;
// console.log(age, age + 3,`age is ${age}`);

//type of conversion

//let score = '100';
//score = Number(score);
//console.log(score + 1);
//console.log(typeof score);
//let result = Number('Hello');
//let result = String(50);
//let result = Boolean(0);
//let result = Boolean('0');
//let result = Boolean('');

//console.log(result, typeof result);

//Loops//

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }
// console.log('loop finished');

// const names = ['shaun', 'mario', 'crsytal','luigi','maksud'];{
//     for(let i = 0; i < names.length; i++)
//     console.log(names[i]);
// }

// const names = ['shaun', 'mario', 'crsytal','luigi','maksud'];
// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// let i = 5;

// do{
//     console.log('value of i is:', i);
//     i++;
// } while(i < 5);

//if statements//

// const password = 'p@assword';
// if(password.length >=12){
//     console.log('that password is mighty strong!');
// }else if(password.length >=8){
//     console.log('that password is long enough!');    
// } else {
//     console.log('password is not long enough!');
// }

// const password = 'p@ssword123';
// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// }else if (password.length >= 8 || password.includes('@')&& password.length >=5){
//     console.log('that password is strong enough!');
// }else {
//     console.log('password is not strong enough');
// }

// let book = {
//     author:{
//         title:"Book JavaScript",
//     }
// }
// if (book){
//     if(book.author){
//         book.author.content = "content";
//     }
// }
// console.log(book);

// let x = book && book.author && (book.author.content = "content");
// console.log(book);

