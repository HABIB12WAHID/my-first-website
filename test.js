var marks = [45, 50, 71, 83, 90, 95, 98, 23, 35, 65, 100, 88, 90];

var max = marks[0];

for (var i = 0; i < marks.length; i++){
    var element = marks[i];
    // sum = sum + element;
    if(element > max){
        max = element;
    }
}
console.log(max);