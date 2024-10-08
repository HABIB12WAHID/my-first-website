console.log("Hello World");

// ..................Array add and remove element from beginners...............

var teaLine = ["Habib", "Wahid", "Jhonkar Mahbub", "Anisul Islam"]; //কোন একটা Array নির্ধারন করার জন্য। 
teaLine.push("Jalal"); // .push() array টি হলো কোন একটি শব্দ পুরাতন array তে সর্বশেষে যোগ করার জন্য। 
teaLine.pop();  // .pop() array টি হলো পুরাতন array থেকে সর্বশেষ শব্দটি ডিলেট করার জন্য। 
console.log(teaLine);

console.log('..............While and For loop each element.............')

// ............While and For loop each element and array element from begginers.......... 
 
// প্রথমে একটি ভেরিয়েবল নির্ধারন করতে হবে যেকোন একটি নাম দিয়ে। তারপর সেই ভেরিয়েবলের একটি মান দিতে হবে । While loop করতে গেলে একটি কন্ডিশন লুপের ভিতরে  দিতে হবে। 
// কোন একটি কাজ বার বার করার জন্য লুপ ব্যবহার করা হয়। যেমন ১-১৫ পর্যন্ত সংখ্যা যদি ক্রমানুসারে প্রকাশ করতে চাই তাহলে এই ধরনের লুপ ব্যবহার করে থাকি। 



// Learning while loop

var num = 0;
while (num <= 5){ 
    console.log(num);
    // num = num + 1;
    num++;
}

// Learning for loop

for ( var i = 0; i <= 7; i++){
    console.log(i);
}



console.log("...............Array element for loop from begginers..................");



// অনেক গুলো রেজাল্ট একসাথে প্রকাশ করার জন্য  Array নির্ধারন করে একটি লুপ চালানো যাবে। 


// example 01
var nums = [55, 66, 77, 88, 99, 11, 44];

for ( var i = 0; i < nums.length; i++){ // ........(array এর মধ্যে কয়টা এলিমেন্ট আছে তা জানার জন্য আমরা .length ব্যবহার করি।)

    var element = nums[i] // .................(array একটা এলিমেন্ট বের করার জন্য তার ভেরিয়েবল নাম এবং তার ইনডেক্স দিয়ে বের করব।) index i = 0;

    console.log(element); 
}




console.log(".............Switch Case Break and Default lesson.................");



// ...................JavaScript Switch Case, Break and Default from begginers...................

// switch case মূলত if else এর মতো করে কাজ করে । if else ছোট লেখার জন্য ভালো হলেও switch case বড় লেখার জন্য অনেক ভালো। 


// example 01
num = 5 
switch (num){
    case 1000:
        console.log('i am 1000');
        break;
    case 100:
        console.log('i am 100');
        break;
    case 10:
    case 20:
        console.log('i am either 10 or 20');
        break;
    default:
        console.log(`I don't know who you are`);
}

// example 02 
num = 1000 
switch (num){
    case 1000:
        console.log('i am 1000');
        break;
    case 100:
        console.log('i am 100');
        break;
    case 10:
    case 20:
        console.log('i am either 10 or 20');
        break;
    default:
        console.log(`I don't know who you are`);
}


console.log("............Function, call function lesson.............");



// ....................Function and call function from beggginers................

// Function হচ্ছে এমন একটি উপায় যেটা আগে থেকে ধারনা থাকে। যদি বলা হয় কেন ধারণা থাকে তাহলে আপনার স্কুল সম্পর্কে ভাবুন একবার। 
// ধরুন আপনি আগামীকাল স্কুলে যাবেন তাহলে আগামীকাল আপনাকে স্কুলে কয়টা ক্লাস করতে হবে কি কি ক্লাস করতে হবে সেঁটার রুটিন আছে। 
// তেমনি আপনি একটা রুটিন করে রাখলে পরবর্তীতে ৮ টায় কি বই পড়তে হবে আপনি জানবেন। এখানে বই যেমন  একটা রেফারেন্স আপনি সহজেই বলতে পারতেছেন। তেমনি Function কাজ করে। 


// example 01 
function sayLoveYou () {
    console.log('You are my best one when i see you at the late night');
    console.log('I Love You');
}
sayLoveYou(); // sayLoveYou() Function টারে যতবার কল করা হবে ততবার তোমাকে এই আউটপুট দিবে। এক্ষেত্রে তোমার সুবিধা হচ্ছে তোমাকে নতুন করে আবার একই Function লিখতে হচ্ছে না। 


// example 02
function doubleIt(num) {
    var result = num * 2;
    console.log(result);
}
doubleIt(50); // 100
doubleIt(500); // 1000


// example 03 
function doubleIt(num) {
    var result = num * 3;
    return result;
}
var first = doubleIt(7);
var second = doubleIt(34);
var total = first + second;
console.log(total); // 123


// example 04
function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
var sum = add(220, 101);
console.log(sum); // 321


console.log('............Object, Key Value pair, get object property and set value...............');


// .................Object function from begginers.................


// exmaple 01
var student = { id: 121, phone: 17756, name: "Jannatul"};
var student2 = { id: 122, phone: 19456, name: "Akhi"};
console.log(student); //.........................{ id: 121, phone: 17756, name: "Jannatul" }
console.log(student2); // .......................{ id: 122, phone: 19456, name: "Akhi" }

// example 02
var phoneNo = student.phone; // প্রথম স্টুডেন্ট এর ফোন নাম্বার নির্দিষ্টভাবে চেক করার জন্য এভাবে তিনটি উপায় লেখা যায়। 
var phoneNo2 = student["phone"]; // ............উপায় নাম্বার ০২ 
var phonePropName = "phone" // ...............উপায় নাম্বার ০৩ 
var phoneNo3 = student[phonePropName];

console.log(phoneNo); // 17756

//  তুমি যখন অনেক গুলো অবজেক্ট একসাথে নিয়ে কাজ করবা তখন তুমি এইভাবে অবজেক্ট নির্ধারন করবা।  এখানে তুমি আপডেট করতে পারবা আবার নতুন প্রোপার্টি যুক্ত করতে পারো। 

//  ...................................এই পর্যন্ত আমরা অনেক কিছু শিখলাম ..................................।। 

// একদম শুরুতেই আমরা শিখছি কিভাবে Variable নির্ধারন করতে পারি। কিভাবে আউটপুট দেখাইতে পারি । ভেরিয়েবল শিখার পর পরই আমরা String শিখছি । 

// এরপর আমরা if....else কন্ডিশনে চলে গেলাম, আমরা যদি ফোন কিনতে চাই কি ধরনের ফোন কিনব,,অথবা ওইটা হলে ওইটা করব না হলে অন্যটা করব । 

// এরপর আমরা Array নিয়ে আলোচনা করছি । কিভাবে Array Index ধরে এটা বের করতে পারি সেটা দেখছি আবার কিভাবে পজিশনের Value সেট করতে পারি। 

// তারপর আমরা Loop নিয়ে আলোচনা করছি । কোন একটা কাজ রিপিট করবা এবং সেই কাজ while Loop এবং for loop এর মাধ্যমে এক এক কিভাবে করে বাড়ানো যায় সেটাও দেখেছি। 

// তারপর আমরা function নিয়ে আলোচনা করছি । কিভাবে function call করব সেটা দেখেছি, একই function একবার লিখে কিভাবে বার বার ব্যবহার করব সেটাও দেখেছি । 


console.log('.................Calculate Factorial of a Number using..................')

//  .....................Factorial of a number using a while loop lesson from begginers................

// ..........factorial for loop..... 


console.log("..............factorial for loop................")
// example 01
var factorial = 1;
for ( var i = 1; i <= 5; i++){
    factorial = factorial * i;
    console.log(i, factorial);
}


console.log("............factorial while loop.............")
// example 01

var i = 1;
var factorial = 1;
while ( i <= 10 ) {
    factorial = factorial * i;
    i++;
}
console.log(factorial); // 3628800


// function এর মাধ্যমে factorial কিভাবে নির্নয় করতে পারি সেটার উদাহরণ দেখলে কিছুটা বুঝা যাবে উদাহরণ নাম্বার ০২। 

// example 02

function factoriel (n){
    var i = 1;
    var fact = 1;
    while ( i <= n ) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var result = factoriel(5);
console.log(result);


console.log("............factorial recursive function..............")



// ..................Factorial recursive function.....................

// example 01
var factorial = 1;
for ( var i = 5; i >= 1; i--){
    factorial = factorial * i;
    console.log(i, factorial);
}

// .........function if else factorial.........

// example 02
function foctorial (n) { //................same function name বার বার লিখতে পারব না সেজন্য foctorial লেখা হয়েছে ।
    if ( n == 0){  //......................যদি n সমান 0 হয় তাহলে return 1 দিবে। 
        return 1;
    }
    else {
        return n * foctorial(n-1);
    }
}
var result = foctorial(10);
console.log(result);  // 3628800 


console.log("..............Create Fibonacci series for loop..................");


// ..................Create Fibonacci series from begginers......................

var fibo = [0, 1];
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];

for ( var i = 2; i <= 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    console.log(fibo[i], fibo[i-1], fibo[i-2]);
}
// console.log(fibo);


console.log(".............Fibonacci series recursive function..................");


// ..........fibonacci series recursive way.............

function fibonacci(n){
    if ( n == 0){
        return 0;
    }
    if ( n == 1){
        return 1;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(10);
console.log(result);



console.log("..........javascript prime number check from begginers..............")


// ....................Javascript prime number check from begginers.....................

function isPrime(n){
    for ( i = 2; i < n; i++){
        if(n%i == 0){
            return "not a prime number";
        }
    }
    return "Your number is a prime number";
}
var result = isPrime(79);
console.log(result);

