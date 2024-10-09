
console.log("........................Javascript Core part start for beginners level.....................");

// ........................JavaScript Core part from beginners........................

// .....Swap variable without temp.....
// ধরুন আপনার কাছে দুটি বাটি আছে । প্রথম বাটিতে জুস রাখা আর দ্বিতীয় বাটিতে পানি রাখা আছে । 
// এখন প্রথম বাটির জুস দ্বিতীয় বাটিতে রাখতে হবে কিন্তু শর্ত হচ্ছে জুস যাতে পানির সাথে না মিশে যায় । সেজন্য আপনাকে তৃতীয় কোন বাটি নিতে হবে পানির বাটি খালি করার জন্য। 
// তারপর তৃতীয় বাটিতে পানি ঢেলে সেই পানির বাটিতে জুস রাখতে হবে । এখানে তৃতীয় বাটিই হচ্ছে Swap 

console.log("...........Swap variable without temp...........");

var a = 7;
var b = 5;
console.log("Before Swap: a =", a, "b =", b);
var temp = a;  //.................................এটা হচ্ছে তৃতীয় বাটি 
a = b;
b = temp;
console.log("After Swap: a =", a, "b =", b);



console.log("............Javascript random number..................");


// .......................Javascript random number from beginners.................

// Math.floor()......এটা নিচের নাম্বার প্রকাশ করবে। 
// Math.ceil()....... এটা উপরের নাম্বার প্রকাশ করবে। 
// Math.round()...... এটা অর্ধেক নাম্বার যেখানে বেশি থাকবে সেটা প্রকাশ করবে। 

// var num = 2.578;
// var result1 = Math.floor(num); // 2
// var result2 = Math.ceil(num); // 3
// var result3 = Math.round(num); // 2 যদি var num = 2.358; হতো। মানে অর্ধেকের বেশি হলে ceil হবে আর কম হলে floor হবে। 
// var result3 = Math.round(num); // 3 

// var randomNumber = Math.random(num) * 6;
// var output = Math.ceil(randomNumber);
// console.log(output);

// ........random number for loop.........

for ( var i = 0; i < 5; i++){
    var randomNum = Math.random() * 6;
    var output = Math.round(randomNum);
    console.log(output);
}


console.log(".............Javascript conditional number.............");



// ...................Javascript Conditional number from beginners......................

// example 01

var businessMan = 750;
var ministerMan = 950;
var sochibMan = 650;
var max = Math.max(businessMan, ministerMan, sochibMan);

if ( businessMan > ministerMan ) {
    if(businessMan > sochibMan ){
        console.log(`Business Man is Bigger : ${max} core taka`);
    }
    else {
        console.log(`Sochib Man is Bigger : ${max} core taka`);
    }
}
else {
    if(ministerMan > sochibMan){
        console.log(`Minister Man is Bigger : ${max} core taka`);
    }
    else {
        console.log(`Sochib Man is Bigger : ${max} core taka`);
    }
}



console.log(".............Find the largest element of an array.................");


// ..................Find the largest element of an array from beginners........................


// example 01
// var marks = [45, 50, 71, 83, 90, 95, 98, 23, 35, 65, 100, 88, 90];

// var max = marks[0];
// var sum = 0;

// for (var i = 0; i < marks.length; i++){
//     var element = marks[i];
//     sum = sum + element;
//     if(element > max){
//         max = element;
//     }
// }
// console.log(`Highest value is : ${max} and Total of the numbers : ${sum}`);


// example 02

var marks = [45, 50, 71, 83, 90, 95, 98, 23, 35, 65, 100, 88, 90];

var max = marks[0];

function getArray (marks){
    var sum = 0;

    for (var i = 0; i < marks.length; i++){
        var element = marks[i];
        sum = sum + element;
        if(element > max){
            max = element;
        }
    }
    return sum;
   
}


var result = getArray(marks);
console.log(`Highest value is : ${max} and Total of the numbers : ${result}`);




console.log("............Remove Duplicate item from an array..............");




// ...............Remove Duplicate item from an array.................

// মনে করুন, আপনার স্কুলে ফ্রিতে বিরিয়ানির প্যাকেট দিবে । প্যাকেট নেওয়ার জন্য যার যার স্টুডেন্ট নাম দিতে হবে । 
// এখন আপনি খুব সাদাসিদা মানুষ তাই আপনি একটাই নাম দিলেন কিন্তু আপনার বন্ধু আপনাকে বলল সে ৩ টা নাম দিয়ে এসেছে। 
// এদিকে স্কুল কর্মকর্তারা দেখলন ৫০টি স্টুডেন্ট এর জায়গায় ৭৫টি নাম লেখা হয়েছে। তারা পড়ে গেল মহাবিপদে কিভাবে ফেক নামগুলো বাদ দিবেন। 
// সে duplicate নামগুলো বাদ দেয়ার জন্য নিচের function লেখা হয়েছে । 

// exmaple 01
var nameId = [2, 3, 4, 5, 6, 3, 4, 7, 8, 9, 10, 11, 7, 8, 12, 13, 14, 15, 20];
var uniqueName = [];

for (var i = 0; i < nameId.length; i++){
    var element = nameId[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);



console.log("............Javascript Count Number start for begginers............");

// ................Javascript count numbers for begginers level......................

// ধরো তুমি একটা জায়গায় বক্তৃতা দিবে ২ মিনিট । এই দুই মিনিটে তুমি অনেক কথা বলবে । কেউ যদি বলে যে তুমি ২ মিনিট ভাষণের মাঝে কতগুলো শব্দ উচ্চারণ করছো। 
// কতগুলো শব্দ উচ্চারণ করছ এটা কিভাবে বুঝবে, এটা বুঝার জন্য তোমাকে অবশ্যই শব্দ গুনতে হবে ।
//  এই শব্দ গননার পদ্ধতিই হচ্ছে Count Number 



// exmaple 01
var speech = "I am a good person. I don't snore at nigth";
var count = 0;
// console.log(speech.length); // তোমার speech মোট কতগুলো শব্দ আছে সেঁটা check করার জন্য .length ব্যবহার করা । 

for (var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);


console.log("............. Reverse a string for begginers............");

// ................ Javascript reverse a string number for begginers...........

// ধরো তোমাকে চাঁদে পাঠান হলো, তুমি চাঁদে  ঘুরতে ঘুরতে কিছু এলিয়েন এর দেখা পেলে তারা নিজেদের মধ্যে কথা বলতেছে কিন্তু তুমি তাদের কথা কিছুই বুঝতেছো না। 
// বেশ কিছুদিন এটা নিয়ে গবেষণা করার পর তুমি বুঝতে পারল যে,  তুমি যেভাবে কথা বলো তারা সেই একই কথা উল্টা ভাবে বলে ? মানে তুমি শব্দটা তারা মিতু হিসেবে বলতেছে। 

console.log(`"This is javascript proggram" এটার reverse নিচে দেওয়া হলো`);

var statement = "Hello! this is javascript proggram";

function reverseString (str) {
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var forAlien = reverseString(statement);
console.log(forAlien);







