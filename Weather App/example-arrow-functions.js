// var names = ['Michael', 'Twinkie', 'Amy', 'Albert'];

// names.forEach(function (name) {
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log('arrowFunc2', name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Michael'));

// var person = {
//     name: 'Michael',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };

// person.greet();

function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

console.log(addStatement(1, 4));

var addExpression = (a, b) => a + b;

console.log(addExpression(1, 5));

console.log(add(1, 3));